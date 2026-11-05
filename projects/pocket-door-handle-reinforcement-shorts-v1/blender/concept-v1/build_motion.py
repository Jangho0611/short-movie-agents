import bpy, math, sys, json
from pathlib import Path
from mathutils import Vector
R=Path(__file__).resolve().parents[2]; O=R/'public/assets/images/concept-motion-v1'
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
def mat(name,c,metal=0,rough=.55):
 m=bpy.data.materials.new(name);m.use_nodes=True;n=m.node_tree.nodes;n.clear();out=n.new('ShaderNodeOutputMaterial');mix=n.new('ShaderNodeMixShader');tr=n.new('ShaderNodeBsdfTransparent');p=n.new('ShaderNodeBsdfPrincipled');p.inputs['Base Color'].default_value=(*c,1);p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough;m.node_tree.links.new(tr.outputs[0],mix.inputs[1]);m.node_tree.links.new(p.outputs[0],mix.inputs[2]);m.node_tree.links.new(mix.outputs[0],out.inputs[0]);mix.inputs[0].default_value=1;return m,mix.inputs[0]
def alpha(sock,keys):
 for f,a in keys:sock.default_value=a;sock.keyframe_insert('default_value',frame=f)
def cube(name,loc,size,m,bevel=.01):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(m)
 if bevel:b=o.modifiers.new('Soft visible edges','BEVEL');b.width=bevel;b.segments=4;o.modifiers.new('Normals','WEIGHTED_NORMAL')
 return o
skin,sa=mat('Concept door envelope - no core reconstruction',(.78,.75,.69)); metal,ma=mat('SH30NI visual approximation satin',(.48,.46,.41),.65,.4); blue,ba=mat('Recess space concept NOT machining geometry',(.12,.39,.52),.05,.4); amber,aa=mat('Abstract support enquiry NOT reinforcement material',(.72,.48,.13),0,.6)
# All dimensions except handle front ratio are staging units, NOT installation dimensions.
door=cube('Door envelope conceptual thickness', (0,0,0),(2.8,.32,6.2),skin,.025)
# Front frame and shallow grip bowl; no hidden attachment modeled.
x=.72;front=-.198
for name,loc,size in [('Left',(x-.137,front,0),(.096,.025,1.7)),('Right',(x+.137,front,0),(.096,.025,1.7)),('Top',(x,front,.754),(.19,.025,.192)),('Bottom',(x,front,-.677),(.19,.025,.346))]:cube('Grip frame '+name,loc,size,metal,.012)
cube('Visible grip bowl base simplified',(x,-.075,.077),(.195,.018,1.18),metal,.018)
for side in [-1,1]:cube('Visible grip side wall',(x+side*.101,-.133,.077),(.016,.13,1.21),metal,.009)
for z in [-.528,.682]:cube('Visible grip end wall',(x,-.133,z),(.207,.13,.018),metal,.008)
for i in range(12):cube('Grip surface rib simplified %02d'%i,(x-.084+i*.0153,-.089,.077),(.004,.007,1.12),metal,.002)
# Volumes do not cut the door and do not specify drill/mortise shape or support stock.
cube('Blue spatial envelope conceptual only',(x,-.005,.04),(.52,.25,1.96),blue,.11)
bpy.ops.mesh.primitive_uv_sphere_add(segments=48,ring_count=24,location=(1.02,.025,.38));s=bpy.context.object;s.name='Soft abstract support enquiry region - not a block';s.scale=(.45,.13,1.25);s.data.materials.append(amber)
for p in s.data.polygons:p.use_smooth=True
alpha(sa,[(1,1),(43,1),(64,.10),(120,.10)]);alpha(ma,[(1,1),(64,1),(82,.22),(120,.22)]);alpha(ba,[(1,0),(60,0),(77,.28),(120,.28)]);alpha(aa,[(1,0),(80,0),(98,.22),(120,.22)])
scene=bpy.context.scene;scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.83,.80,.74,1);scene.world.node_tree.nodes['Background'].inputs[1].default_value=.7
for loc,power,size in [((-4,-5,6),650,5),((4,-3,1),400,4),((1,4,4),500,4)]:
 bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.data.energy=power;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(Vector((.5,0,0))-o.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add();cam=bpy.context.object;cam.name='Single continuous camera';scene.camera=cam;cam.data.lens=52;cam.data.clip_start=.05;cam.data.clip_end=100
for f,pos,target in [(1,(3,-9,2.8),(.45,0,0)),(12,(3,-9,2.8),(.45,0,0)),(43,(1.9,-4.8,1.1),(.72,0,.05)),(64,(1.9,-4.8,1.1),(.72,0,.05)),(83,(1.7,-4.25,.85),(.8,0,.12)),(120,(1.7,-4.25,.85),(.8,0,.12))]:
 cam.location=pos;cam.rotation_euler=(Vector(target)-cam.location).to_track_quat('-Z','Y').to_euler();cam.keyframe_insert('location',frame=f);cam.keyframe_insert('rotation_euler',frame=f)
# Explicitly set handles via modern layered action API.
for action in bpy.data.actions:
 for layer in action.layers:
  for strip in layer.strips:
   for bag in strip.channelbags:
    for fc in bag.fcurves:
     for k in fc.keyframe_points:k.interpolation='BEZIER';k.handle_left_type='AUTO_CLAMPED';k.handle_right_type='AUTO_CLAMPED'
scene.render.engine='CYCLES';scene.cycles.samples=12;scene.cycles.use_denoising=True;scene.cycles.transparent_max_bounces=16
scene.render.resolution_x=540;scene.render.resolution_y=960;scene.render.resolution_percentage=100;scene.render.fps=24;scene.frame_start=1;scene.frame_end=120;scene.render.image_settings.file_format='PNG';scene.render.image_settings.color_mode='RGB';scene.view_settings.view_transform='AgX'
scene['notice']='Internal structure explanatory concept; product conditions vary. No SH30 machining or fixing geometry. No DSL140.'
scene['overlay_for_later']='내부 구조 설명용 개념도 · 제품별 상이'
blend=R/'blender/concept-v1/pocket-core-motion-v1.blend'
if blend.exists():raise RuntimeError('Refuse existing blend overwrite')
scene.frame_set(1);scene.render.filepath=str(O/'frame-');bpy.ops.wm.save_as_mainfile(filepath=str(blend))
for f in [1,43,64,77,120]:
 scene.frame_set(f);scene.render.filepath=str(O/('state-%03d.png'%f));bpy.ops.render.render(write_still=True)
