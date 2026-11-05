import bpy,json
from pathlib import Path
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
out=R/'public/assets/images/pocket-handle-pre-assembly-v11.png';dest=D/'pocket-handle-pre-assembly-v11.blend'
assert not out.exists() and not dest.exists()
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v10/pocket-handle-post-assembly-v10.blend'))
s=bpy.context.scene;cam=s.camera;camera=([list(v) for v in cam.matrix_world],cam.data.ortho_scale)
grips=[o for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))]
baseline={o.name:[list(v) for v in o.matrix_world] for o in grips}
paint=bpy.data.materials['Warm painted surface - illustrative finish'];wood=bpy.data.materials['Educational support example - wood appearance NOT specified material']
for name in ['A exterior with explanatory reveal','B intact exterior except concealed receiving aperture','Educational vertical lateral support - no manufacturer claim']:
 bpy.data.objects.remove(bpy.data.objects[name],do_unlink=True)
def cube(name,loc,size,mat):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(mat);return o
front=cube('A single connected editorial reveal',(-.275,-.1725,0),(1.55,.055,6),paint)
def cut(loc,size,name):
 t=cube('temporary cutter',loc,size,paint);bpy.context.view_layer.objects.active=front;m=front.modifiers.new(name,'BOOLEAN');m.operation='DIFFERENCE';m.solver='EXACT';m.object=t;bpy.ops.object.modifier_apply(modifier=m.name);bpy.data.objects.remove(t,do_unlink=True)
# The receiving aperture retains its v10 proxy center/extent. A short connected lateral
# reveal explains the surrounding interior, and is explicitly NOT part of machining.
cut((-.245,-.1725,.077),(.242,.2,1.262),'Concept receiving aperture')
cut((.032,-.1725,.22),(.324,.2,.52),'Connected local editorial access')
# Narrow vertical example continues under intact skin; only its upper end/side is exposed.
support=cube('Educational embedded upright example - no standard claim',(.055,.02,-.05),(.13,.33,.72),wood)
for o in [front,support]:
 m=o.modifiers.new('Small edge highlights','BEVEL');m.width=.002;m.segments=2;o.modifiers.new('Normals','WEIGHTED_NORMAL')
sep=.40
for o in grips:o.location.y-=sep
bpy.context.view_layer.update()
proj=[world_to_camera_view(s,cam,o.matrix_world@Vector(v)) for o in grips for v in o.bound_box]
assert all(0<p.x<1 and 0<p.y<1 for p in proj)
assert camera==([list(v) for v in cam.matrix_world],cam.data.ortho_scale)
assert .055-.065>-.245+.242/2
qa={'camera_same_as_v10_B':True,'scale_same':True,'handle_in_frame':True,'normal_only_displacement':sep,'axis_xz_retained':True,'receiving_width_height_scene_units':[.242,1.262],'support_clear_of_receiving_space':True,'editorial_extension_connected_to_receiving_aperture':True,'support_top_exposed_below_window_top':True,'A_handle_screen_bounds':[min(p.x for p in proj),max(p.x for p in proj),min(p.y for p in proj),max(p.y for p in proj)],'existing_B_not_modified_or_rendered':True,'not_manufacturer_dimensions':True}
(D/'geometry-qa.json').write_text(json.dumps(qa,indent=2))
s.render.resolution_x=540;s.render.resolution_y=960;s.render.resolution_percentage=100;s.render.filepath=str(out);s.cycles.samples=20;s.frame_start=s.frame_end=1
s['scope']='v11 A only: one connected editorial reveal, embedded support example. Normal-only explanatory pose, not actual installation. Use unchanged v10 B as endpoint.'
s['future_notice']='내부 보강 설명용 개념도 · 제품별 상이'
bpy.ops.wm.save_as_mainfile(filepath=str(dest));bpy.ops.render.render(write_still=True)
