import bpy,json,math
from pathlib import Path
from mathutils import Vector
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
out=R/'public/assets/images/pocket-handle-layout-check-v8.png';dest=D/'pocket-handle-layout-check-v8.blend'
assert not out.exists() and not dest.exists(),'Refuse overwrite'
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v7/pocket-handle-reinforced-assembly-v7.blend'))
def sig(o):return {'v':[list(v.co) for v in o.data.vertices],'matrix':[list(v) for v in o.matrix_world],'materials':[m.name for m in o.data.materials]}
grips=[o for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))];before={o.name:sig(o) for o in grips}
for o in list(bpy.data.objects):
 if o not in grips and o.type not in ['CAMERA','LIGHT']:bpy.data.objects.remove(o,do_unlink=True)
paint=bpy.data.materials['Warm painted surface - illustrative finish'];wood=bpy.data.materials['Educational support example - wood appearance NOT specified material']
def cube(name,loc,size,mat):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(mat);return o
def bevel(o):
 m=o.modifiers.new('Basic edge highlights','BEVEL');m.width=.003;m.segments=2;o.modifiers.new('Normals','WEIGHTED_NORMAL')
front=cube('Finite front skin with local editorial cutaway',(-.275,-.1725,0),(1.55,.055,6),paint)
rear=cube('Finite rear skin - unseen interior omitted',(-.275,.2025,0),(1.55,.035,6),paint)
edge=cube('Visible exterior door edge NOT core specification',(.485,.01,0),(.03,.385,6),paint)
def cut(o,loc,size,name):
 t=cube('temporary cutter',loc,size,paint);bpy.context.view_layer.objects.active=o;m=o.modifiers.new(name,'BOOLEAN');m.operation='DIFFERENCE';m.solver='EXACT';m.object=t;bpy.ops.object.modifier_apply(modifier=m.name);bpy.data.objects.remove(t,do_unlink=True)
cut(front,(-.245,-.17,.077),(.225,.2,1.26),'Clearance centered on handle NOT machining dimensions')
cut(front,(.12,-.17,-.22),(.40,.2,1.20),'Local side reveal for spatial reading only')
# A short lower support example runs beneath the flange into the unrevealed skin.
# Its upper face is below the grip clearance, leaving the recess open above it.
support=cube('EDUCATIONAL lower support example NOT manufacturer arrangement',(-.225,.02,-.665),(.75,.33,.20),wood)
for o in [front,rear,edge,support]:bevel(o)
bg=bpy.data.materials.new('Warm neutral presentation background');bg.diffuse_color=(.58,.56,.52,1)
cube('Background separate from door',(0,1.5,0),(200,.05,200),bg)
s=bpy.context.scene;cam=s.camera;target=Vector((-.11,.0,.015));cam.location=(4.25,-6,1.65);cam.rotation_euler=(target-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=2.6
s.render.resolution_x=540;s.render.resolution_y=960;s.render.resolution_percentage=100;s.render.image_settings.file_format='PNG';s.render.image_settings.color_mode='RGB';s.render.filepath=str(out);s.cycles.samples=20;s.frame_start=s.frame_end=1
s['scope']='One low-res layout check. Conceptual finite door envelope, visible side thickness, local reveal, one lower support EXAMPLE. No actual door core or SH30NI installation specification.'
s['future_notice']='내부 보강 설명용 개념도 · 제품별 상이'
assert before=={o.name:sig(o) for o in grips}
clearance_bottom=.077-1.26/2;support_top=-.665+.20/2
assert support_top<clearance_bottom
q={'resolution':[540,960],'single_still_only':True,'handle_identical_to_v7':True,'camera_horizontal_angle_degrees':math.degrees(math.atan2(cam.location.x-target.x,abs(cam.location.y-target.y))),'support_within_front_rear_envelope':-.145-1e-8<=.02-.165 and .02+.165<=.185+1e-8,'support_clear_of_grip_space':support_top<clearance_bottom,'support_clearance_scene_units':clearance_bottom-support_top,'dimensions_are_not_construction_specs':True,'no_fasteners':True}
(D/'geometry-qa.json').write_text(json.dumps(q,indent=2))
bpy.ops.wm.save_as_mainfile(filepath=str(dest));bpy.ops.render.render(write_still=True)
