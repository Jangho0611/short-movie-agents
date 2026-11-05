import bpy,bmesh,json
from pathlib import Path
from mathutils import Vector,Matrix
from bpy_extras.object_utils import world_to_camera_view
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
outs=[R/'public/assets/images'/f'pocket-handle-alignment-{v}-v12.png' for v in ['front','oblique']]
blends=[D/f'pocket-handle-alignment-{v}-v12.blend' for v in ['front','oblique']]
assert not any(p.exists() for p in outs+blends)
# Read exact seated transforms, then use the requested v11 source with old parts disabled.
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v10/pocket-handle-post-assembly-v10.blend'))
seat={o.name:o.matrix_world.copy() for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))}
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v11/pocket-handle-pre-assembly-v11.blend'))
s=bpy.context.scene;cam=s.camera;oblique=cam.matrix_world.copy();ortho=cam.data.ortho_scale
grips=[bpy.data.objects[n] for n in seat]
disabled=[]
for o in bpy.data.objects:
 if o not in grips and o.type not in ['CAMERA','LIGHT'] and o.name!='Background separate from door':o.hide_render=True;o.hide_viewport=True;disabled.append(o.name)
for o in grips:o.matrix_world=seat[o.name]
bpy.context.view_layer.update()
body=[o for o in grips if not o.name.startswith('SH30NI')];flange=bpy.data.objects['SH30NI front visual approximation']
def points(o):
 dg=bpy.context.evaluated_depsgraph_get();ev=o.evaluated_get(dg);me=ev.to_mesh();p=[ev.matrix_world@v.co for v in me.vertices];ev.to_mesh_clear();return p
def bounds(ps):return [[min(p[i] for p in ps) for i in range(3)],[max(p[i] for p in ps) for i in range(3)]]
lo,hi=bounds([p for o in body for p in points(o)]);flo,fhi=bounds(points(flange))
cx=(lo[0]+hi[0])/2;cz=(lo[2]+hi[2])/2;hw=hi[0]-lo[0]+.024;hh=hi[2]-lo[2]+.034;end=hi[1]+.025
paint=bpy.data.materials['Warm painted surface - illustrative finish']
def cube(name,loc,size):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(paint);return o
door=cube('Validation door envelope - NOT actual solid-core construction',(-.275,.01,0),(1.55,.42,6))
tool=cube('Receiving pocket cutter - conceptual dimensions',(cx,(-.30+end)/2,cz),(hw,end+.30,hh))
bpy.context.view_layer.objects.active=door;m=door.modifiers.new('Narrow rectangular blind receiving pocket','BOOLEAN');m.operation='DIFFERENCE';m.solver='EXACT';m.object=tool;bpy.ops.object.modifier_apply(modifier=m.name);bpy.data.objects.remove(tool,do_unlink=True)
# Exact solid intersections of evaluated meshes, before any rendered separated pose.
intersections={}
for o in body:
 dg=bpy.context.evaluated_depsgraph_get();mesh=bpy.data.meshes.new_from_object(o.evaluated_get(dg));temp=bpy.data.objects.new('QA intersection temporary',mesh);s.collection.objects.link(temp);temp.matrix_world=o.matrix_world.copy();bpy.context.view_layer.objects.active=temp
 m=temp.modifiers.new('Actual solid intersection','BOOLEAN');m.operation='INTERSECT';m.solver='EXACT';m.object=door;bpy.ops.object.modifier_apply(modifier=m.name)
 bm=bmesh.new();bm.from_mesh(temp.data);vol=abs(bm.calc_volume(signed=True));bm.free();intersections[o.name]=vol;bpy.data.objects.remove(temp,do_unlink=True)
assert max(intersections.values())<1e-8,'Body / door collision: stop before rendering'
m=door.modifiers.new('Subtle exterior edge','BEVEL');m.width=.001;m.segments=2;door.modifiers.new('Normals','WEIGHTED_NORMAL')
margins=[cx-hw/2-flo[0],fhi[0]-(cx+hw/2),cz-hh/2-flo[2],fhi[2]-(cz+hh/2)]
assert min(margins)>0
assert abs(fhi[1]+.2)<1e-6
qa={'units':'arbitrary Blender concept values, NOT installation dimensions','body_evaluated_bounds_seated':[lo,hi],'body_axis_xz':[cx,cz],'pocket_axis_xz':[cx,cz],'axis_direction':'X width / Z height / Y surface normal','body_extent':[hi[i]-lo[i] for i in range(3)],'pocket_width_height_depth':[hw,hh,end+.2],'pocket_depth_range':[-.2,end],'flange_bounds':[flo,fhi],'flange_cover_margins_left_right_bottom_top':margins,'flange_surface_contact_error':abs(fhi[1]+.2),'solid_intersection_volumes':intersections,'max_body_door_intersection_volume':max(intersections.values()),'disabled_not_deleted':disabled,'front_oblique_same_geometry_and_pose':True,'separation_normal_only':.28}
# Same separated geometry in both images. Normal translation does not change X/Z axes.
for o in grips:o.location.y-=.28
bpy.context.view_layer.update()
pose={o.name:[list(v) for v in o.matrix_world] for o in grips}
def em(name,col):
 m=bpy.data.materials.new(name);m.use_nodes=True;n=m.node_tree.nodes;n.clear();out=n.new('ShaderNodeOutputMaterial');e=n.new('ShaderNodeEmission');e.inputs[0].default_value=(*col,1);m.node_tree.links.new(e.outputs[0],out.inputs[0]);return m
cyan=em('QA cyan pocket projected outline',(.05,.32,.5));orange=em('QA amber body projected outline',(.6,.24,.035));grey=em('QA alignment axis',(.18,.20,.19))
qa_lines=[]
def line(name,pts,mat,r=.002):
 c=bpy.data.curves.new(name,'CURVE');c.dimensions='3D';c.bevel_depth=r;c.bevel_resolution=2;p=c.splines.new('POLY');p.points.add(len(pts)-1)
 for v,co in zip(p.points,pts):v.co=(*co,1)
 o=bpy.data.objects.new(name,c);s.collection.objects.link(o);o.data.materials.append(mat);qa_lines.append(o)
def outline(name,x0,x1,z0,z1,mat):line(name,[(x0,-.55,z0),(x1,-.55,z0),(x1,-.55,z1),(x0,-.55,z1),(x0,-.55,z0)],mat)
outline('QA projected pocket',cx-hw/2,cx+hw/2,cz-hh/2,cz+hh/2,cyan)
outline('QA projected conceptual body',lo[0],hi[0],lo[2],hi[2],orange)
line('QA common vertical centerline',[(cx,-.552,cz-.80),(cx,-.552,cz+.80)],grey,.001)
s.render.resolution_x=540;s.render.resolution_y=960;s.render.resolution_percentage=100;s.cycles.samples=20;s.frame_start=s.frame_end=1
s['scope']='Alignment QA only: proxy body/pocket, no actual installation specifications. Cyan pocket outline, amber body outline, grey common axis are front-only projected QA overlays.'
cam.location=(cx,-6,cz);cam.rotation_euler=(Vector((cx,0,cz))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=ortho
s.render.filepath=str(outs[0]);bpy.ops.wm.save_as_mainfile(filepath=str(blends[0]));bpy.ops.render.render(write_still=True)
for o in qa_lines:o.hide_render=True;o.hide_viewport=True
cam.matrix_world=oblique;bpy.context.view_layer.update()
assert pose=={o.name:[list(v) for v in o.matrix_world] for o in grips}
proj=[world_to_camera_view(s,cam,p) for o in grips for p in points(o)]
qa['oblique_handle_inside_frame']=all(0<p.x<1 and 0<p.y<1 for p in proj);assert qa['oblique_handle_inside_frame']
s.render.filepath=str(outs[1]);bpy.ops.wm.save_as_mainfile(filepath=str(blends[1]));bpy.ops.render.render(write_still=True)
(D/'geometry-qa.json').write_text(json.dumps(qa,indent=2))
