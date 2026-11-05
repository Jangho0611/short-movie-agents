import bpy,json,math
from pathlib import Path
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
out=R/'public/assets/images/pocket-handle-horizontal-section-v17.png';assert not out.exists()
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v16/pocket-handle-horizontal-section-v16.blend'))
s=bpy.context.scene;door=bpy.data.objects['v16 section display / v14 restored v12 single-pocket envelope'];cam=s.camera
q=json.loads((R/'blender/concept-v16/geometry-qa.json').read_text());cx,cz=q['source_geometry_qa']['source_pocket_qa']['pocket_axis_xz'];w,h,dep=q['source_geometry_qa']['source_pocket_qa']['pocket_width_height_depth']
def sig(o):return {'matrix':[list(v) for v in o.matrix_world],'verts':[list(v.co) for v in o.data.vertices] if o.type=='MESH' else [],'faces':[list(p.vertices) for p in o.data.polygons] if o.type=='MESH' else []}
protected=[o for o in bpy.data.objects if o.type=='MESH'];before={o.name:sig(o) for o in protected}
mat=bpy.data.materials.new('v17 opaque spatial materials - hypothetical support');mat.use_nodes=True;nt=mat.node_tree;n=nt.nodes;l=nt.links;n.clear();outn=n.new('ShaderNodeOutputMaterial');geo=n.new('ShaderNodeNewGeometry');sep=n.new('ShaderNodeSeparateXYZ');l.new(geo.outputs['Position'],sep.inputs[0])
def m(op,a,b=None):
 t=n.new('ShaderNodeMath');t.operation=op
 for i,v in enumerate([a,b]):
  if v is None:continue
  if isinstance(v,(int,float)):t.inputs[i].default_value=v
  else:l.new(v,t.inputs[i])
 return t.outputs[0]
def inside(v,a,b):return m('MULTIPLY',m('GREATER_THAN',v,a),m('LESS_THAN',v,b))
def shader(color,rough=.7):
 t=n.new('ShaderNodeBsdfPrincipled');t.inputs['Base Color'].default_value=(*color,1);t.inputs['Roughness'].default_value=rough;return t
paint=shader((.72,.69,.62));capmat=shader((.36,.37,.35));cavity=shader((.15,.17,.18));wood=shader((.48,.28,.12),.78)
# Modest 3D grain follows the entire spatial region, including its vertical pocket face.
vec=n.new('ShaderNodeVectorMath');vec.operation='MULTIPLY';vec.inputs[1].default_value=(95,18,4);l.new(geo.outputs['Position'],vec.inputs[0]);noise=n.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=1;noise.inputs['Detail'].default_value=2;l.new(vec.outputs[0],noise.inputs['Vector']);ramp=n.new('ShaderNodeValToRGB');ramp.color_ramp.elements[0].color=(.32,.17,.065,1);ramp.color_ramp.elements[1].color=(.55,.35,.16,1);l.new(noise.outputs['Fac'],ramp.inputs[0]);l.new(ramp.outputs[0],wood.inputs['Base Color']);bump=n.new('ShaderNodeBump');bump.inputs['Strength'].default_value=.12;bump.inputs['Distance'].default_value=.001;l.new(noise.outputs['Fac'],bump.inputs['Height']);l.new(bump.outputs[0],wood.inputs['Normal'])
xabs=m('ABSOLUTE',m('SUBTRACT',sep.outputs['X'],cx));cap=m('LESS_THAN',m('ABSOLUTE',m('SUBTRACT',sep.outputs['Z'],cz)),.00015)
# Skin remains white, cap neutral; the pocket bottom/back remain dark gray.
cav=m('MULTIPLY',inside(xabs,-1,w/2+.002),m('MULTIPLY',inside(sep.outputs['Y'],-.199,-.2+dep+.002),inside(sep.outputs['Z'],cz-h/2-.002,cz+.001)))
# The educational material volume touches the existing pocket sidewall, never enters it.
# 0.001 boundary shading tolerance covers bevel only; no solid or opening is added.
zone=m('MULTIPLY',inside(xabs,w/2-.001,w/2+.14),m('MULTIPLY',inside(sep.outputs['Y'],-.175,.17),inside(sep.outputs['Z'],cz-.43,cz+.001)))
def mix(f,a,b):
 t=n.new('ShaderNodeMixShader');l.new(f,t.inputs[0]);l.new(a,t.inputs[1]);l.new(b,t.inputs[2]);return t.outputs[0]
a=mix(cap,paint.outputs[0],capmat.outputs[0]);a=mix(cav,a,cavity.outputs[0]);a=mix(zone,a,wood.outputs[0]);l.new(a,outn.inputs[0]);door.data.materials.clear();door.data.materials.append(mat)
# Background-only material; keep geometry intact.
bg=bpy.data.objects.get('Background separate from door')
if bg:
 bm=bpy.data.materials.new('v17 neutral contrasting background');bm.use_nodes=True;bs=bm.node_tree.nodes.get('Principled BSDF');bs.inputs['Base Color'].default_value=(.22,.235,.245,1);bs.inputs['Roughness'].default_value=.95;bg.data.materials.clear();bg.data.materials.append(bm)
# Same viewing direction; adjust only orthographic framing analytically.
cam.data.ortho_scale=2.3
cam.location.z-=.12
bpy.context.view_layer.update()
grips=[o for o in bpy.data.objects if o.name.startswith('v16 section display /') and o!=door]
points=[]
for o in grips:
 ev=o.evaluated_get(bpy.context.evaluated_depsgraph_get());me=ev.to_mesh();points += [ev.matrix_world@v.co for v in me.vertices];ev.to_mesh_clear()
points += [Vector((cx+dx,y,z)) for dx in [-w/2-.14,w/2+.14] for y in [-.2,.22] for z in [cz,cz-h/2]]
ps=[world_to_camera_view(s,cam,p) for p in points];xmin,xmax=min(p.x for p in ps),max(p.x for p in ps);ymin,ymax=min(p.y for p in ps),max(p.y for p in ps)
right=cam.matrix_world.to_3x3()@Vector((1,0,0));up=cam.matrix_world.to_3x3()@Vector((0,1,0));cam.location+=right*((xmin+xmax)/2-.5)*cam.data.ortho_scale*540/960+up*((ymin+ymax)/2-.5)*cam.data.ortho_scale
bpy.context.view_layer.update();ps=[world_to_camera_view(s,cam,p) for p in points];assert all(.035<p.x<.965 and .035<p.y<.965 for p in ps),'Framing failure: stop before render'
assert all(sig(bpy.data.objects[k])==v for k,v in before.items())
qa={'original_and_display_meshes_transforms_preserved':True,'section_height':cz,'physical_pockets':1,'support_representation':'3D spatial material domain on existing cap and pocket walls; no separate components','support_solid_intrusion_volume':0,'wood_boundary_shader_tolerance':.001,'camera_rotation_preserved':True,'camera_scale':cam.data.ortho_scale,'camera_location':list(cam.location),'projected_bounds':[min(p.x for p in ps),max(p.x for p in ps),min(p.y for p in ps),max(p.y for p in ps)],'concept_only':True}
(D/'geometry-qa.json').write_text(json.dumps(qa,indent=2));s.render.resolution_x=540;s.render.resolution_y=960;s.render.resolution_percentage=100;s.cycles.samples=32;s.render.filepath=str(out)
bpy.ops.wm.save_as_mainfile(filepath=str(D/'pocket-handle-horizontal-section-v17.blend'));bpy.ops.render.render(write_still=True)
