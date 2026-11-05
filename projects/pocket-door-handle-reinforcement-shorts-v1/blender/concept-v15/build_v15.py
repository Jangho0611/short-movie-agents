import bpy,bmesh,json,hashlib
from pathlib import Path
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
out=R/'public/assets/images/pocket-handle-xray-reinforcement-v15.png';blend=D/'pocket-handle-xray-reinforcement-v15.blend'
assert not out.exists() and not blend.exists()
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v14/pocket-handle-single-cutout-pre-v14.blend'))
s=bpy.context.scene;door=bpy.data.objects['v14 restored v12 single-pocket envelope']
grips=[o for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))]
def signature(o):
 return {'matrix':[list(x) for x in o.matrix_world], 'vertices':[list(v.co) for v in o.data.vertices] if o.type=='MESH' else [],'polygons':[list(p.vertices) for p in o.data.polygons] if o.type=='MESH' else []}
fixed={o.name:signature(o) for o in grips+[door,s.camera]}
# A material-only reveal: no new aperture, surface topology unchanged.
mat=door.data.materials[0].copy();mat.name='v15 local X-ray paint - educational optical effect';door.data.materials[0]=mat
nt=mat.node_tree;n=nt.nodes;l=nt.links;output=next(x for x in n if x.type=='OUTPUT_MATERIAL');original=output.inputs['Surface'].links[0].from_socket
geo=n.new('ShaderNodeNewGeometry');sep=n.new('ShaderNodeSeparateXYZ');l.new(geo.outputs['Position'],sep.inputs[0])
def math(op,a,b=None):
 x=n.new('ShaderNodeMath');x.operation=op
 for i,v in enumerate([a,b]):
  if v is None:continue
  if isinstance(v,(float,int)):x.inputs[i].default_value=v
  else:l.new(v,x.inputs[i])
 return x.outputs[0]
# Soft elliptical shader falloff, not geometry or a separate panel.
x=math('DIVIDE',math('ADD',sep.outputs['X'],.245),.43)
z=math('DIVIDE',math('SUBTRACT',sep.outputs['Z'],.077),.59)
r=math('SQRT',math('ADD',math('MULTIPLY',x,x),math('MULTIPLY',z,z)))
fall=n.new('ShaderNodeMapRange');fall.clamp=True;fall.interpolation_type='SMOOTHERSTEP';l.new(r,fall.inputs['Value']);fall.inputs['From Min'].default_value=.56;fall.inputs['From Max'].default_value=1;fall.inputs['To Min'].default_value=.78;fall.inputs['To Max'].default_value=0
# Only the front skin. Preserve pocket interior and its near-edge contour.
front=math('LESS_THAN',sep.outputs['Y'],-.195)
# Keep an opaque narrow lip directly alongside the installation aperture.
ax=math('ABSOLUTE',math('ADD',sep.outputs['X'],.245));az=math('ABSOLUTE',math('SUBTRACT',sep.outputs['Z'],.077))
near=math('MULTIPLY',math('LESS_THAN',ax,.136),math('LESS_THAN',az,.646))
fac=math('MULTIPLY',math('MULTIPLY',fall.outputs['Result'],front),math('SUBTRACT',1,near))
trans=n.new('ShaderNodeBsdfTransparent');mix=n.new('ShaderNodeMixShader');l.new(fac,mix.inputs[0]);l.new(original,mix.inputs[1]);l.new(trans.outputs[0],mix.inputs[2]);l.new(mix.outputs[0],output.inputs['Surface'])
# Disconnected short support cheeks, recessed behind skin, clear of receiving volume.
wood=bpy.data.materials.get('Educational support example - wood appearance NOT specified material')
if wood:wood=wood.copy()
else:
 wood=bpy.data.materials.new('v15 neutral educational support');wood.use_nodes=True;wood.node_tree.nodes.get('Principled BSDF').inputs['Base Color'].default_value=(.35,.25,.16,1)
wood.name='v15 support appearance - hypothetical not specified material'
def cube(name,loc,dims,material=None):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=dims;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
 if material:o.data.materials.append(material)
 return o
supports=[]
for name,loc in [('left',(-.430,.005,.077)),('right',(-.060,.005,.077))]:
 o=cube('v15 hypothetical short internal support '+name,loc,(.098,.22,.48),wood);m=o.modifiers.new('Soft conceptual edges','BEVEL');m.width=.007;m.segments=3;supports.append(o)
# Exact solid-volume intersection with the entire receiving pocket.
q14=json.loads((R/'blender/concept-v14/geometry-qa.json').read_text());q=q14['source_pocket_qa'];cx,cz=q['pocket_axis_xz'];w,h,d=q['pocket_width_height_depth']
probe=cube('QA receiving volume',(cx,-.2+d/2,cz),(w,d,h));probe.hide_render=True
vol={}
for o in supports:
 ev=o.evaluated_get(bpy.context.evaluated_depsgraph_get());me=bpy.data.meshes.new_from_object(ev);t=bpy.data.objects.new('QA temporary overlap',me);s.collection.objects.link(t);t.matrix_world=o.matrix_world.copy();bpy.context.view_layer.objects.active=t;m=t.modifiers.new('Exact overlap','BOOLEAN');m.operation='INTERSECT';m.solver='EXACT';m.object=probe;bpy.ops.object.modifier_apply(modifier=m.name);bm=bmesh.new();bm.from_mesh(t.data);vol[o.name]=abs(bm.calc_volume());bm.free();bpy.data.objects.remove(t,do_unlink=True)
bpy.data.objects.remove(probe,do_unlink=True)
assert max(vol.values())<1e-9
assert all(signature(bpy.data.objects[k])==v for k,v in fixed.items())
qa={'fixed_meshes_transforms_camera_unchanged':True,'physical_openings':q14['front_opening_connected_components'],'pocket_intersection_volumes':vol,'support_centers':[list(o.location) for o in supports],'support_dimensions':[list(o.dimensions) for o in supports],'support_front_y':-.105,'door_front_y':-.2,'xray_max_transparency':.78,'xray_center_xz':[-.245,.077],'xray_falloff_radii_xz':[.43,.59],'opaque_pocket_lip_preserved':True,'concept_only_not_installation_specs':True,'source_single_pocket_qa':q14}
(D/'geometry-qa.json').write_text(json.dumps(qa,indent=2))
s['scope']='Educational optical X-ray. Hypothetical support arrangement; no verified DOMUS installation or actual door core. One unchanged pocket. No new cutaway.'
s.render.resolution_x=540;s.render.resolution_y=960;s.render.resolution_percentage=100;s.cycles.samples=32;s.render.filepath=str(out)
bpy.ops.wm.save_as_mainfile(filepath=str(blend));bpy.ops.render.render(write_still=True)
