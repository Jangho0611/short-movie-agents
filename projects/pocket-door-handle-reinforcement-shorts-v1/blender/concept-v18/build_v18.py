import bpy,json,math,sys
from pathlib import Path
from mathutils import Vector
from mathutils.bvhtree import BVHTree
from bpy_extras.object_utils import world_to_camera_view
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
out=R/'public/assets/images/pocket-handle-horizontal-section-v18.png';assert not out.exists()
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v17/pocket-handle-horizontal-section-v17.blend'))
s=bpy.context.scene;cam=s.camera;oldcam=cam.matrix_world.copy();oldscale=cam.data.ortho_scale
q=json.loads((R/'blender/concept-v14/geometry-qa.json').read_text());cx,cz=q['source_pocket_qa']['pocket_axis_xz'];w,h,depth=q['source_pocket_qa']['pocket_width_height_depth']
def sig(o):return {'matrix':[list(v) for v in o.matrix_world],'verts':[list(v.co) for v in o.data.vertices] if o.type=='MESH' else [],'polys':[list(p.vertices) for p in o.data.polygons] if o.type=='MESH' else []}
fixed={o.name:sig(o) for o in bpy.data.objects if o!=cam}
def worldmesh(o):
 ev=o.evaluated_get(bpy.context.evaluated_depsgraph_get());me=ev.to_mesh();vs=[ev.matrix_world@v.co for v in me.vertices];fs=[list(p.vertices) for p in me.polygons];ev.to_mesh_clear();return vs,fs
objs=[o for o in bpy.data.objects if o.name.startswith('v16 section display /')];grips=[o for o in objs if 'envelope' not in o.name];trees=[BVHTree.FromPolygons(*worldmesh(o)) for o in objs]
points=[p for o in grips for p in worldmesh(o)[0]]+[Vector((cx+x,y,z)) for x in [-w/2-.14,w/2+.14] for y in [-.2,.22] for z in [cz,cz-h/2]]
# Orthographic opposite sidewall normals cannot both face one camera.
def visible_samples(side,direction):
 normal=Vector((1,0,0)) if side=='left' else Vector((-1,0,0))
 if normal.dot(direction)<=0:return 0
 x=cx+(-w/2 if side=='left' else w/2)
 count=0
 for y in [-.15,-.12,-.09,-.06]:
  for z in [cz-.08,cz-.18,cz-.28,cz-.38]:
   p=Vector((x,y,z))+normal*.003
   if not any(t.ray_cast(p,direction,20)[0] is not None for t in trees):count+=1
 return count
handlecenter=Vector((cx,-.75,cz));holecenter=Vector((cx,-.2,cz))
def distance():
 a=world_to_camera_view(s,cam,handlecenter);b=world_to_camera_view(s,cam,holecenter);return math.hypot((a.x-b.x)*540,(a.y-b.y)*960)
baseline=distance();candidates=[]
for az in [-12,-18,-24]:
 for el in [30,36,42]:
  a=math.radians(az);e=math.radians(el);direction=Vector((math.sin(a)*math.cos(e),-math.cos(a)*math.cos(e),math.sin(e)));target=Vector((cx,-.2,cz));cam.location=target+direction*5;cam.rotation_euler=(target-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=2.3;bpy.context.view_layer.update()
  ps=[world_to_camera_view(s,cam,p) for p in points];xmin,xmax=min(p.x for p in ps),max(p.x for p in ps);ymin,ymax=min(p.y for p in ps),max(p.y for p in ps)
  right=cam.matrix_world.to_3x3()@Vector((1,0,0));up=cam.matrix_world.to_3x3()@Vector((0,1,0));cam.location+=right*((xmin+xmax)/2-.5)*cam.data.ortho_scale*540/960+up*((ymin+ymax)/2-.5)*cam.data.ortho_scale;bpy.context.view_layer.update()
  ps=[world_to_camera_view(s,cam,p) for p in points];bounds=[min(p.x for p in ps),max(p.x for p in ps),min(p.y for p in ps),max(p.y for p in ps)];vis=visible_samples('right',direction)
  if bounds[0]>.04 and bounds[1]<.96 and bounds[2]>.04 and bounds[3]<.96:candidates.append({'azimuth':az,'elevation':el,'matrix':[list(v) for v in cam.matrix_world],'bounds':bounds,'right_visible_samples':vis,'left_visible_samples':visible_samples('left',direction),'separation_pixels':distance()})
assert candidates
# Favor visible right-side depth, then reduce separation. No trial images.
chosen=sorted(candidates,key=lambda c:(-c['right_visible_samples'],c['separation_pixels']))[0]
from mathutils import Matrix
cam.matrix_world=Matrix(chosen['matrix']);bpy.context.view_layer.update()
assert all(sig(bpy.data.objects[k])==v for k,v in fixed.items())
qa={'all_non_state3_camera_geometry_transforms_unchanged':True,'materials_lights_unchanged':True,'single_pocket':1,'section_height':cz,'support_volume_added':False,'baseline_separation_pixels':baseline,'candidates':candidates,'selected':chosen,'opposite_planar_sidewalls_simultaneous_visibility':'Impossible in single orthographic view; right depth prioritized, left remains top-visible','visual_QA_pending':True}
(D/'geometry-qa.json').write_text(json.dumps(qa,indent=2));print('PREFLIGHT',json.dumps({'baseline':baseline,'selected':chosen}))
if '--render' not in sys.argv:sys.exit(0)
s.render.resolution_x=540;s.render.resolution_y=960;s.render.resolution_percentage=100;s.cycles.samples=32;s.render.filepath=str(out)
bpy.ops.wm.save_as_mainfile(filepath=str(D/'pocket-handle-horizontal-section-v18.blend'));bpy.ops.render.render(write_still=True)
