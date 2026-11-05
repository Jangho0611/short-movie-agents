import bpy,json
from pathlib import Path
from mathutils import Vector
from mathutils.bvhtree import BVHTree
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
out=R/'public/assets/images/pocket-handle-reinforcement-cutaway-v13.png';dest=D/'pocket-handle-reinforcement-cutaway-v13.blend'
assert not out.exists() and not dest.exists()
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v12/pocket-handle-alignment-oblique-v12.blend'))
s=bpy.context.scene;cam=s.camera;cam_before=([list(v) for v in cam.matrix_world],cam.data.ortho_scale)
grips=[o for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))]
def sig(o):return {'v':[list(v.co) for v in o.data.vertices],'matrix':[list(v) for v in o.matrix_world],'materials':[m.name for m in o.data.materials]}
before={o.name:sig(o) for o in grips}
door=bpy.data.objects['Validation door envelope - NOT actual solid-core construction']
paint=bpy.data.materials['Warm painted surface - illustrative finish'];wood=bpy.data.materials['Educational support example - wood appearance NOT specified material']
def probe():
 bpy.context.view_layer.update();tree=BVHTree.FromObject(door,bpy.context.evaluated_depsgraph_get());origin=door.matrix_world.inverted()@Vector((-.245,-.12,.077));return [tree.ray_cast(origin,Vector(v))[3] for v in [(1,0,0),(-1,0,0),(0,1,0),(0,0,1),(0,0,-1)]]
prior=probe()
def cube(name,loc,size,mat):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(mat);return o
# Disjoint from the receiving pocket. Only an editorial volume beside it is exposed.
tool=cube('temporary editorial exposure',(.095,-.025,.08),(.37,.39,.85),paint)
bpy.context.view_layer.objects.active=door;m=door.modifiers.new('Local editorial volume - receiving pocket untouched','BOOLEAN');m.operation='DIFFERENCE';m.solver='EXACT';m.object=tool;bpy.ops.object.modifier_apply(modifier=m.name);bpy.data.objects.remove(tool,do_unlink=True)
after=probe();assert all(abs(a-b)<1e-6 for a,b in zip(prior,after))
skin=paint.copy();skin.name='Editorial partial transparent skin NOT glass material'
n=skin.node_tree.nodes;l=skin.node_tree.links;outnode=n.get('Material Output');old=n.get('Principled BSDF');trans=n.new('ShaderNodeBsdfTransparent');mix=n.new('ShaderNodeMixShader');mix.inputs[0].default_value=.22;l.new(trans.outputs[0],mix.inputs[1]);l.new(old.outputs[0],mix.inputs[2]);l.new(mix.outputs[0],outnode.inputs['Surface'])
panel=cube('Local front skin editorial transparency',(.095,-.1925,.08),(.37,.015,.85),skin)
# Short upright, visually recessed and continuing below the revealed area, not a ring/panel/shelf.
support=cube('Educational recessed upright example - no manufacturer specification',(.025,.025,-.09),(.12,.20,.60),wood)
m=support.modifiers.new('Soft support edges','BEVEL');m.width=.005;m.segments=2;support.modifiers.new('Normals','WEIGHTED_NORMAL')
q0=json.loads((R/'blender/concept-v12/geometry-qa.json').read_text());cx,cz=q0['pocket_axis_xz'];hw,hh,dep=q0['pocket_width_height_depth']
support_left=.025-.12/2;aperture_right=cx+hw/2
assert support_left>aperture_right
assert before=={o.name:sig(o) for o in grips}
assert cam_before==([list(v) for v in cam.matrix_world],cam.data.ortho_scale)
q={'handle_mesh_transforms_materials_unchanged':True,'camera_unchanged':True,'receiving_pocket_ray_distances_before':prior,'receiving_pocket_ray_distances_after':after,'receiving_pocket_original_size':q0['pocket_width_height_depth'],'receiving_axis':q0['pocket_axis_xz'],'support_vs_pocket_x_clearance':support_left-aperture_right,'support_front_y':-.075,'door_front_y':-.2,'support_recessed_behind_surface':True,'support_no_pocket_intersection':True,'no_new_fasteners':True,'scope':'All support geometry, material and exposure are educational, not actual installation specifications'}
(D/'geometry-qa.json').write_text(json.dumps(q,indent=2))
s.render.resolution_x=540;s.render.resolution_y=960;s.render.resolution_percentage=100;s.render.filepath=str(out);s.cycles.samples=24;s.frame_start=s.frame_end=1
s['scope']='v13 A only. v12 handle, receiving pocket and camera unchanged. Small separate editorial translucent region reveals a recessed support example. Not actual core/support specification.'
s['future_notice']='내부 보강 설명용 개념도 · 제품별 상이'
bpy.ops.wm.save_as_mainfile(filepath=str(dest));bpy.ops.render.render(write_still=True)
