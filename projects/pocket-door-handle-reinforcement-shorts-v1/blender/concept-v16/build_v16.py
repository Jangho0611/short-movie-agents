import bpy,json,math
from pathlib import Path
from mathutils import Vector
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
out=R/'public/assets/images/pocket-handle-horizontal-section-v16.png';assert not out.exists()
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v14/pocket-handle-single-cutout-pre-v14.blend'))
s=bpy.context.scene;originalcam=s.camera;door=bpy.data.objects['v14 restored v12 single-pocket envelope'];grips=[o for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))]
q=json.loads((R/'blender/concept-v14/geometry-qa.json').read_text());cx,cz=q['source_pocket_qa']['pocket_axis_xz'];w,h,depth=q['source_pocket_qa']['pocket_width_height_depth']
def sig(o):return {'matrix':[list(v) for v in o.matrix_world],'vertices':[list(v.co) for v in o.data.vertices] if o.type=='MESH' else [],'faces':[list(p.vertices) for p in o.data.polygons] if o.type=='MESH' else []}
fixed={o.name:sig(o) for o in [door,originalcam]+grips}
# Render-only intersection, same original mesh datablocks copied without edits.
bpy.ops.mesh.primitive_cube_add(size=1,location=(0,0,cz-10));clip=bpy.context.object;clip.name='v16 editorial halfspace - NOT a physical opening';clip.dimensions=(30,30,20);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);clip.hide_render=True;clip.hide_set(True)
paint=door.data.materials[0].copy();paint.name='v16 opaque educational section surface';nt=paint.node_tree;n=nt.nodes;l=nt.links;outnode=next(x for x in n if x.type=='OUTPUT_MATERIAL');old=outnode.inputs['Surface'].links[0].from_socket
geo=n.new('ShaderNodeNewGeometry');sep=n.new('ShaderNodeSeparateXYZ');l.new(geo.outputs['Position'],sep.inputs[0])
def m(op,a,b=None):
 node=n.new('ShaderNodeMath');node.operation=op
 for i,v in enumerate([a,b]):
  if v is None:continue
  if isinstance(v,(int,float)):node.inputs[i].default_value=v
  else:l.new(v,node.inputs[i])
 return node.outputs[0]
def inside(v,lo,hi):return m('MULTIPLY',m('GREATER_THAN',v,lo),m('LESS_THAN',v,hi))
# Only the flat editorial section receives explanatory material. No support solids.
cap=m('LESS_THAN',m('ABSOLUTE',m('SUBTRACT',sep.outputs['Z'],cz)),.0001)
xabs=m('ABSOLUTE',m('SUBTRACT',sep.outputs['X'],cx))
zone=m('MULTIPLY',inside(xabs,w/2+.025,w/2+.16),inside(sep.outputs['Y'],-.17,.17))
hatch=m('GREATER_THAN',m('SINE',m('MULTIPLY',m('ADD',sep.outputs['X'],sep.outputs['Y']),170)),.60)
col=n.new('ShaderNodeMixRGB');col.inputs[1].default_value=(.28,.30,.28,1);col.inputs[2].default_value=(.47,.49,.46,1);l.new(hatch,col.inputs[0])
base=n.new('ShaderNodeMixRGB');base.inputs[1].default_value=(.66,.65,.60,1);l.new(zone,base.inputs[0]);l.new(col.outputs[0],base.inputs[2])
bs=n.new('ShaderNodeBsdfPrincipled');bs.inputs['Roughness'].default_value=.84;l.new(base.outputs[0],bs.inputs['Base Color'])
mix=n.new('ShaderNodeMixShader');l.new(cap,mix.inputs[0]);l.new(old,mix.inputs[1]);l.new(bs.outputs[0],mix.inputs[2]);l.new(mix.outputs[0],outnode.inputs['Surface'])
copies=[]
for o in [door]+grips:
 c=o.copy();c.data=o.data.copy();s.collection.objects.link(c);c.name='v16 section display / '+o.name;c.hide_render=False;c.hide_viewport=False
 if o==door:c.data.materials[0]=paint
 mod=c.modifiers.new('Editorial horizontal clipping render only','BOOLEAN');mod.operation='INTERSECT';mod.solver='EXACT';mod.object=clip
 o.hide_render=True;copies.append(c)
cam=originalcam.copy();cam.data=originalcam.data.copy();s.collection.objects.link(cam);cam.name='v16 STATE3 section camera';target=Vector((cx,-.2,cz));az=math.radians(36);el=math.radians(48);direction=Vector((math.sin(az)*math.cos(el),-math.cos(az)*math.cos(el),math.sin(el)));cam.location=target+direction*5;cam.rotation_euler=(target-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=2.05;s.camera=cam
assert all(sig(bpy.data.objects[k])==v for k,v in fixed.items())
# The pattern is a material region, not a separate reinforcement component.
# Its nearest X extent is 0.025 beyond receiving pocket: no volumetric intrusion.
qa={'original_meshes_transforms_and_v14_camera_preserved':True,'physical_pocket_count':q['front_opening_connected_components'],'section_world_z':cz,'camera_azimuth_degrees':36,'camera_elevation_degrees':48,'camera_target':list(target),'orthographic_scale':2.05,'support_is_surface_annotation_not_component':True,'support_x_clearance_from_pocket':.025,'support_y_range':[-.17,.17],'no_new_cutout':True,'source_geometry_qa':q}
(D/'geometry-qa.json').write_text(json.dumps(qa,indent=2))
s.render.resolution_x=540;s.render.resolution_y=960;s.render.resolution_percentage=100;s.cycles.samples=32;s.render.filepath=str(out)
s['scope']='STATE3 educational horizontal observation section. Patterned regions mark conditions to verify; not actual core, reinforcement components or DOMUS fitting instructions.'
bpy.ops.wm.save_as_mainfile(filepath=str(D/'pocket-handle-horizontal-section-v16.blend'));bpy.ops.render.render(write_still=True)
