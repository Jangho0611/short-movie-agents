import bpy,bmesh,json
from pathlib import Path
from mathutils import Vector
from mathutils.bvhtree import BVHTree
from bpy_extras.object_utils import world_to_camera_view
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
outs=[R/'public/assets/images'/f'pocket-handle-single-cutout-{v}-v14.png' for v in ['pre','post']];blends=[D/f'pocket-handle-single-cutout-{v}-v14.blend' for v in ['pre','post']]
assert not any(p.exists() for p in outs+blends)
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v10/pocket-handle-post-assembly-v10.blend'))
seated={o.name:o.matrix_world.copy() for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))}
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v13/pocket-handle-reinforcement-cutaway-v13.blend'))
s=bpy.context.scene;cam=s.camera;oldcam=cam.matrix_world.copy();grips=[bpy.data.objects[n] for n in seated];disabled=[]
for o in bpy.data.objects:
 if o not in grips and o.type not in ['CAMERA','LIGHT'] and o.name!='Background separate from door':o.hide_render=True;o.hide_viewport=True;disabled.append(o.name)
# Restore exact v12 single-pocket envelope. v13 object remains disabled, not deleted.
name='Validation door envelope - NOT actual solid-core construction'
with bpy.data.libraries.load(str(R/'blender/concept-v12/pocket-handle-alignment-oblique-v12.blend'),link=False) as (src,dst):dst.objects=[name]
door=dst.objects[0];s.collection.objects.link(door);door.name='v14 restored v12 single-pocket envelope';door.hide_render=False;door.hide_viewport=False
for o in grips:o.matrix_world=seated[o.name]
bpy.context.view_layer.update()
q12=json.loads((R/'blender/concept-v12/geometry-qa.json').read_text());cx,cz=q12['pocket_axis_xz'];w,h,depth=q12['pocket_width_height_depth']
def mesh_world(o):
 ev=o.evaluated_get(bpy.context.evaluated_depsgraph_get());me=ev.to_mesh();v=[ev.matrix_world@x.co for x in me.vertices];faces=[list(p.vertices) for p in me.polygons];ev.to_mesh_clear();return v,faces
body=[o for o in grips if not o.name.startswith('SH30NI')];volumes={}
for o in body:
 ev=o.evaluated_get(bpy.context.evaluated_depsgraph_get());me=bpy.data.meshes.new_from_object(ev);t=bpy.data.objects.new('Temporary QA intersection',me);s.collection.objects.link(t);t.matrix_world=o.matrix_world.copy();bpy.context.view_layer.objects.active=t;m=t.modifiers.new('Solid overlap test','BOOLEAN');m.operation='INTERSECT';m.solver='EXACT';m.object=door;bpy.ops.object.modifier_apply(modifier=m.name);bm=bmesh.new();bm.from_mesh(t.data);volumes[o.name]=abs(bm.calc_volume());bm.free();bpy.data.objects.remove(t,do_unlink=True)
assert max(volumes.values())<1e-8
# Count the physical front opening by ray-testing a dense grid into the door's front.
verts,faces=mesh_world(door);tree=BVHTree.FromPolygons(verts,faces)
nx,nz=90,160;holes=set()
for ix in range(nx):
 x=-.70+ix*.012
 for iz in range(nz):
  z=-1+iz*.012
  hit=tree.ray_cast(Vector((x,-.35,z)),Vector((0,1,0)),1)
  if hit[0] and hit[0].y>-.19:holes.add((ix,iz))
remaining=set(holes);components=[]
while remaining:
 stack=[remaining.pop()];count=0
 while stack:
  a,b=stack.pop();count+=1
  for p in [(a-1,b),(a+1,b),(a,b-1),(a,b+1)]:
   if p in remaining:remaining.remove(p);stack.append(p)
 components.append(count)
assert len(components)==1,'Exactly one opening required'
# Analytical pose/framing search only, no trial renders. No lateral handle offset.
outline=[]
for i in range(21):
 t=i/20
 outline.extend([Vector((cx-w/2+w*t,-.201,cz-h/2)),Vector((cx-w/2+w*t,-.201,cz+h/2)),Vector((cx-w/2,-.201,cz-h/2+h*t)),Vector((cx+w/2,-.201,cz-h/2+h*t))])
chosen=None
for sep in [.55,.65,.75,.85]:
 for o in grips:o.matrix_world=seated[o.name].copy();o.location.y-=sep
 bpy.context.view_layer.update();trees=[BVHTree.FromPolygons(*mesh_world(o)) for o in grips];toward=oldcam.to_3x3()@Vector((0,0,1))
 occluded=sum(any(t.ray_cast(p,toward,10)[0] is not None for t in trees) for p in outline)
 if occluded:continue
 for scale in [2.8,3.0,3.2]:
  for shift in [-.15,-.25,-.35]:
   cam.matrix_world=oldcam.copy();cam.location.x+=shift;cam.data.ortho_scale=scale;bpy.context.view_layer.update()
   ps=[world_to_camera_view(s,cam,p) for o in grips for p in mesh_world(o)[0]]
   if all(.04<p.x<.96 and .06<p.y<.94 for p in ps):chosen={'normal_separation':sep,'ortho_scale':scale,'camera_world_x_shift':shift,'outline_samples':len(outline),'occluded_outline_samples':occluded};break
  if chosen:break
 if chosen:break
assert chosen,'No valid unclipped/visible layout: stop'
s.render.resolution_x=540;s.render.resolution_y=960;s.render.resolution_percentage=100;s.cycles.samples=20;s.frame_start=s.frame_end=1
qa={'concept_values_only':True,'source_pocket_qa':q12,'disabled_objects':disabled,'front_opening_connected_components':len(components),'front_opening_grid_component_sizes':components,'seated_solid_intersection_volumes':volumes,'framing':chosen,'same_camera_both_states':True,'receiving_axis_preserved':True,'no_support_visible':True}
s['scope']='v14 single conceptual blind pocket only. All prior support/reveal objects disabled. No manufacturer specs. A/B normal translation only.'
s.render.filepath=str(outs[0]);bpy.ops.wm.save_as_mainfile(filepath=str(blends[0]));bpy.ops.render.render(write_still=True)
for o in grips:o.matrix_world=seated[o.name]
bpy.context.view_layer.update();s.render.filepath=str(outs[1]);bpy.ops.wm.save_as_mainfile(filepath=str(blends[1]));bpy.ops.render.render(write_still=True)
(D/'geometry-qa.json').write_text(json.dumps(qa,indent=2))
