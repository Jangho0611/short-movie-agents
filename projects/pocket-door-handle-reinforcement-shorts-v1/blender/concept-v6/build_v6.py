import bpy,json
from pathlib import Path
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
out=R/'public/assets/images/pocket-handle-cutaway-v6.png';dest=D/'pocket-handle-cutaway-v6.blend'
assert not out.exists() and not dest.exists(), 'Refuse overwrite'
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v4/pocket-handle-cutaway-v4.blend'))
def signature(o):
 return {'vertices':[list(v.co) for v in o.data.vertices], 'matrix':[list(x) for x in o.matrix_world], 'materials':[m.name for m in o.data.materials]}
grips=[o for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))]
before={o.name:signature(o) for o in grips}
for o in list(bpy.data.objects):
 if o not in grips and o.type not in ['CAMERA','LIGHT']:bpy.data.objects.remove(o,do_unlink=True)
white=bpy.data.materials['Neutral exterior']
def box(name,loc,size):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(white);return o
slab=box('Neutral door envelope - section convention NOT actual core',(0,.07,0),(5,.5,7))
def cut(name,loc,size):
 t=box(name,loc,size)
 bpy.context.view_layer.objects.active=slab
 m=slab.modifiers.new(name,'BOOLEAN');m.operation='DIFFERENCE';m.solver='EXACT';m.object=t;bpy.ops.object.modifier_apply(modifier=m.name);bpy.data.objects.remove(t,do_unlink=True)
# Non-dimensional editorial staging. Main recess is hidden by the retained flange.
cut('Hidden conceptual clearance NOT installation template',(-.245,-.12,.077),(.225,.36,1.26))
# Only a local side opening reveals depth. No support stock, attachment or material specification.
cut('Local explanatory reveal NOT machining',(-.015,-.12,.04),(.285,.36,.72))
m=slab.modifiers.new('Small section highlights','BEVEL');m.width=.006;m.segments=3
slab.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
s=bpy.context.scene;cam=s.camera
# Preserve viewing angle, shift framing slightly to center the local subject.
cam.location.x-=.13
cam.data.ortho_scale=2.75
s.render.filepath=str(out);s.render.resolution_x=1080;s.render.resolution_y=1920;s.render.resolution_percentage=100
s.frame_start=s.frame_end=1;s.cycles.samples=48
s['scope']='v6 illustrative local reveal only; no reinforcement, fasteners or actual panel core. All reveal dimensions are staging values, not machining dimensions.'
s['notice']='내부 구조 설명용 개념도 · 제품별 상이'
assert before=={o.name:signature(o) for o in grips}
bpy.context.view_layer.update()
pts={}
for name,p in {'check':(.127,0,.05),'edge_top':(.127,-.18,.38),'edge_bottom':(.127,-.18,-.29)}.items():
 v=world_to_camera_view(s,cam,Vector(p));pts[name]=[round(v.x*1080,2),round((1-v.y)*1920,2)]
(D/'geometry-qa.json').write_text(json.dumps({'handle_mesh_transform_materials_identical_to_v4':True,'no_support_components':True,'projected_points':pts,'objects':[o.name for o in s.objects]},indent=2))
bpy.ops.wm.save_as_mainfile(filepath=str(dest))
bpy.ops.render.render(write_still=True)
