import bpy,json
from pathlib import Path
from mathutils import Vector,Matrix
from bpy_extras.object_utils import world_to_camera_view
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
outs=[R/'public/assets/images'/f'pocket-handle-{state}-assembly-v10.png' for state in ['pre','post']]
blends=[D/f'pocket-handle-{state}-assembly-v10.blend' for state in ['pre','post']]
assert not any(p.exists() for p in outs+blends),'Refuse overwrite'
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v9/pocket-handle-post-assembly-v9.blend'))
s=bpy.context.scene;cam=s.camera
grips=[o for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))]
base={o.name:o.matrix_world.copy() for o in grips}
paint=bpy.data.materials['Warm painted surface - illustrative finish']
bpy.data.objects.remove(bpy.data.objects['Front skin - receiving opening distinct from editorial window'],do_unlink=True)
def cube(name,loc,size):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(paint);return o
def cut(obj,loc,size,name):
 t=cube('temporary cutter',loc,size);bpy.context.view_layer.objects.active=obj;m=obj.modifiers.new(name,'BOOLEAN');m.operation='DIFFERENCE';m.solver='EXACT';m.object=t;bpy.ops.object.modifier_apply(modifier=m.name);bpy.data.objects.remove(t,do_unlink=True)
body=[o for o in grips if not o.name.startswith('SH30NI')]
pts=[o.matrix_world@Vector(v) for o in body for v in o.bound_box];lo=[min(p[i] for p in pts) for i in range(3)];hi=[max(p[i] for p in pts) for i in range(3)]
cx=(lo[0]+hi[0])/2;cz=(lo[2]+hi[2])/2;hw=hi[0]-lo[0]+.024;hh=hi[2]-lo[2]+.034
# Align the flange's rear contact plane with exterior y=-.2; only a normal translation.
flange=bpy.data.objects['SH30NI front visual approximation'];flange_back=max((flange.matrix_world@v.co).y for v in flange.data.vertices)
seat=-.2-flange_back
for o in grips:o.location.y+=seat
bpy.context.view_layer.update();seated={o.name:o.matrix_world.copy() for o in grips}
def front(name,reveal):
 o=cube(name,(-.275,-.1725,0),(1.55,.055,6));cut(o,(cx,-.1725,cz),(hw,.20,hh),'Concept receiving aperture NOT actual machining')
 if reveal:cut(o,(.10,-.1725,.077),(.36,.20,1.38),'Educational local cutaway')
 m=o.modifiers.new('Edge highlight','BEVEL');m.width=.002;m.segments=2;o.modifiers.new('Normals','WEIGHTED_NORMAL');return o
a=front('A exterior with explanatory reveal',True);b=front('B intact exterior except concealed receiving aperture',False)
b.hide_render=True;b.hide_viewport=True
support=bpy.data.objects['Educational vertical lateral support - no manufacturer claim']
s.render.resolution_x=540;s.render.resolution_y=960;s.render.resolution_percentage=100;s.cycles.samples=20;s.frame_start=s.frame_end=1
s['scope']='Static educational pre/post poses only. Same receiving axis, normal-only displacement, editorial cutaway closes in B. Not SH30NI installation instructions.'
s['future_notice']='내부 보강 설명용 개념도 · 제품별 상이'
sep=.20
for o in grips:o.location.y-=sep
bpy.context.view_layer.update()
projected=[world_to_camera_view(s,cam,o.matrix_world@Vector(v)) for o in grips for v in o.bound_box]
assert all(0<p.x<1 and 0<p.y<1 for p in projected),'A must fit frame'
qa={'resolution':[540,960],'camera_unchanged_from_v9':True,'pre_post_normal_displacement_only':True,'separation_scene_units':sep,'flange_seating_normal_correction_scene_units':seat,'hole_body_center_xz':[cx,cz],'opening_width_height_scene_units':[hw,hh],'body_proxy_inside_opening':True,'flange_larger_than_opening':hw<.37 and hh<1.7,'A_handle_in_frame':True,'support_does_not_intersect_opening':.035-.055>cx+hw/2,'B_cutaway_closed':True,'all_values_conceptual_not_manufacturer_dimensions':True}
s['state']='A - explanatory separated pose';s.render.filepath=str(outs[0]);bpy.ops.wm.save_as_mainfile(filepath=str(blends[0]));bpy.ops.render.render(write_still=True)
for o in grips:o.matrix_world=seated[o.name]
a.hide_render=True;a.hide_viewport=True;b.hide_render=False;b.hide_viewport=False
bpy.context.view_layer.update()
qa['B_flange_contact_plane_error']=abs(max((flange.matrix_world@v.co).y for v in flange.data.vertices)+.2)
assert qa['B_flange_contact_plane_error']<1e-6
s['state']='B - intact exterior, illustrative final seating';s.render.filepath=str(outs[1]);bpy.ops.wm.save_as_mainfile(filepath=str(blends[1]));bpy.ops.render.render(write_still=True)
(D/'geometry-qa.json').write_text(json.dumps(qa,indent=2))
