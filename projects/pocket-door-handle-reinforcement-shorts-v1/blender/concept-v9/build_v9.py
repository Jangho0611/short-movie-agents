import bpy,json
from pathlib import Path
from mathutils import Vector,Matrix
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
outs=[R/'public/assets/images'/f'pocket-handle-{state}-assembly-v9.png' for state in ['pre','post']]
blends=[D/f'pocket-handle-{state}-assembly-v9.blend' for state in ['pre','post']]
assert not any(p.exists() for p in outs+blends),'Refuse overwrite'
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v8/pocket-handle-layout-check-v8.blend'))
s=bpy.context.scene;cam=s.camera
camera_before=([list(v) for v in cam.matrix_world],cam.data.ortho_scale)
grips=[o for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))]
def sig(o):return {'v':[list(v.co) for v in o.data.vertices],'matrix':[list(v) for v in o.matrix_world],'materials':[m.name for m in o.data.materials]}
baseline={o.name:sig(o) for o in grips}
for name in ['Finite front skin with local editorial cutaway','EDUCATIONAL lower support example NOT manufacturer arrangement']:
 bpy.data.objects.remove(bpy.data.objects[name],do_unlink=True)
paint=bpy.data.materials['Warm painted surface - illustrative finish'];wood=bpy.data.materials['Educational support example - wood appearance NOT specified material']
def cube(name,loc,size,mat):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(mat);return o
def bevel(o):
 m=o.modifiers.new('Edge highlight','BEVEL');m.width=.002;m.segments=2;o.modifiers.new('Normals','WEIGHTED_NORMAL')
front=cube('Front skin - receiving opening distinct from editorial window',(-.275,-.1725,0),(1.55,.055,6),paint)
# Bounds are from the existing visible bowl proxy, not manufacturer hidden-body data.
body=[o for o in grips if not o.name.startswith('SH30NI')]
pts=[o.matrix_world@Vector(v) for o in body for v in o.bound_box]
lo=[min(v[i] for v in pts) for i in range(3)];hi=[max(v[i] for v in pts) for i in range(3)]
cx=(lo[0]+hi[0])/2;cz=(lo[2]+hi[2])/2
hw=(hi[0]-lo[0])+.024;hh=(hi[2]-lo[2])+.034
def cut(loc,size,name):
 t=cube('Temporary cutter',loc,size,paint);bpy.context.view_layer.objects.active=front;m=front.modifiers.new(name,'BOOLEAN');m.operation='DIFFERENCE';m.object=t;m.solver='EXACT';bpy.ops.object.modifier_apply(modifier=m.name);bpy.data.objects.remove(t,do_unlink=True)
cut((cx,-.1725,cz),(hw,.20,hh),'Body-aligned conceptual receiving opening NOT actual machining')
cut((.10,-.1725,.077),(.36,.20,1.38),'Separate editorial support reveal NOT machining')
support=cube('Educational vertical lateral support - no manufacturer claim',(.035,.02,.077),(.11,.33,1.70),wood)
bevel(front);bevel(support)
s.render.resolution_x=540;s.render.resolution_y=960;s.render.resolution_percentage=100;s.cycles.samples=20;s.frame_start=s.frame_end=1
s['scope']='Two static educational coupling states, not an actual installation procedure. Existing bowl is a visible-form proxy; no new hidden fixings. Support arrangement and opening dimensions are illustrative only.'
s['future_notice']='내부 보강 설명용 개념도 · 제품별 상이'
assert hw<.37 and hh<1.70
assert .035-.055>cx+hw/2
q={'body_proxy_bounds_scene_units':[lo,hi],'opening_center_xz':[cx,cz],'opening_width_height_scene_units':[hw,hh],'body_proxy_fits_opening':True,'opening_smaller_than_front_flange':True,'support_clear_of_receiving_space':True,'support_inside_front_rear_skin':True,'handle_mesh_materials_unchanged':True,'camera_same_as_v8':True,'A_B_difference':'handle translated only along door normal by -0.8 scene units in A','all_dimensions_illustrative_not_product_specs':True,'no_fasteners':True}
(D/'geometry-qa.json').write_text(json.dumps(q,indent=2))
fixed={o.name:sig(o) if o.type=='MESH' else None for o in s.objects if o not in grips}
for o in grips:o.location.y-=.8
bpy.context.view_layer.update()
s['state']='A - explanatory separated pose, NOT mounting direction validation';s.render.filepath=str(outs[0]);bpy.ops.wm.save_as_mainfile(filepath=str(blends[0]));bpy.ops.render.render(write_still=True)
for o in grips:o.matrix_world=Matrix(baseline[o.name]['matrix'])
bpy.context.view_layer.update()
assert baseline=={o.name:sig(o) for o in grips}
assert fixed=={o.name:sig(o) if o.type=='MESH' else None for o in s.objects if o not in grips}
assert camera_before==([list(v) for v in cam.matrix_world],cam.data.ortho_scale)
s['state']='B - illustrative final placement, NOT validated fitting';s.render.filepath=str(outs[1]);bpy.ops.wm.save_as_mainfile(filepath=str(blends[1]));bpy.ops.render.render(write_still=True)
