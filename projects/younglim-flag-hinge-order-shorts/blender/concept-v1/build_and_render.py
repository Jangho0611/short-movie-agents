import bpy,math,sys
from pathlib import Path
from mathutils import Vector
ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'public/assets/images/blender-concept-v1'
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def mat(name,color,metal,rough):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True;n=m.node_tree.nodes.get('Principled BSDF');n.inputs['Base Color'].default_value=(*color,1);n.inputs['Metallic'].default_value=metal;n.inputs['Roughness'].default_value=rough;return m
silver=mat('Concept satin silver',(.56,.59,.62),.72,.28)
def finish(o,name):
 o.name=name;o.data.materials.append(silver)
 for p in o.data.polygons:p.use_smooth=True
 return o
def cylinder(name,r,depth,z):
 bpy.ops.mesh.primitive_cylinder_add(vertices=64,radius=r,depth=depth,location=(0,0,z));o=finish(bpy.context.object,name)
 b=o.modifiers.new('Soft edges','BEVEL');b.width=.06;b.segments=3;o.modifiers.new('Normals','WEIGHTED_NORMAL');return o
core=cylinder('Fixed central spindle - conceptual',1.12,17.2,0)
pivots=[]
for side in [1,-1]:
 pivot=bpy.data.objects.new('Upper pivot' if side==1 else 'Lower pivot',None);bpy.context.collection.objects.link(pivot);pivots.append(pivot)
 bpy.ops.mesh.primitive_cube_add(size=1,location=(side*2.9,0,side*4.225));plate=bpy.context.object;plate.dimensions=(4,.3,7.65);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
 bevel=plate.modifiers.new('Rounded plate corners','BEVEL');bevel.width=.14;bevel.segments=5;bpy.context.view_layer.objects.active=plate;bpy.ops.object.modifier_apply(modifier=bevel.name)
 for j in range(5):
  x=side*(3.9 if j%2==0 else 2.5);z=side*(6.9-j*1.45)
  bpy.ops.mesh.primitive_cylinder_add(vertices=48,radius=.31,depth=2,location=(x,0,z),rotation=(math.pi/2,0,0));tool=bpy.context.object
  bpy.context.view_layer.objects.active=plate;mod=plate.modifiers.new('Through hole '+str(j+1),'BOOLEAN');mod.operation='DIFFERENCE';mod.object=tool;bpy.ops.object.modifier_apply(modifier=mod.name);bpy.data.objects.remove(tool,do_unlink=True)
 finish(plate,'Upper leaf 5 holes' if side==1 else 'Lower leaf 5 holes');plate.parent=pivot
 edge=plate.modifiers.new('Hole edge softness','BEVEL');edge.width=.035;edge.segments=3;plate.modifiers.new('Surface normals','WEIGHTED_NORMAL')
 sleeve=cylinder('Concept sleeve '+str(side),1.2,8.35,side*4.275);sleeve.parent=pivot
 for frame,angle in [(1,0),(7,0),(28,-side*90),(34,-side*90),(58,-side*180),(76,-side*180)]:
  pivot.rotation_euler[2]=math.radians(angle);pivot.keyframe_insert(data_path='rotation_euler',frame=frame)
 # Bezier easing with clamped handles, avoiding overshoot.
 if pivot.animation_data and pivot.animation_data.action:
  try:
   for fc in pivot.animation_data.action.fcurves:
    for k in fc.keyframe_points:k.handle_left_type='AUTO_CLAMPED';k.handle_right_type='AUTO_CLAMPED'
  except AttributeError:pass
scene=bpy.context.scene
scene.world.color=(.6,.6,.6);scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.72,.75,.8,1);scene.world.node_tree.nodes['Background'].inputs[1].default_value=.5
for name,loc,power,size in [('Key',(-10,-14,17),2300,10),('Fill',(12,-8,5),1800,9),('Rim',(3,8,13),2600,8)]:
 bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.name=name;o.data.energy=power;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(Vector((0,0,0))-o.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(7,-35,7));cam=bpy.context.object;cam.rotation_euler=(Vector((0,0,0))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=21.5;scene.camera=cam
scene.render.engine='CYCLES';scene.cycles.samples=24;scene.cycles.use_denoising=True
scene.render.resolution_x=720;scene.render.resolution_y=1000;scene.render.resolution_percentage=100;scene.render.film_transparent=True
scene.render.image_settings.file_format='PNG';scene.render.image_settings.color_mode='RGBA';scene.render.fps=30;scene.frame_start=1;scene.frame_end=76
scene.view_settings.view_transform='AgX';scene.render.filepath=str(OUT/'frame-')
scene['notice']='Concept visualization only. Not verified Younglim operation, handedness or internal construction.'
bpy.ops.wm.save_as_mainfile(filepath=str(ROOT/'blender/concept-v1/hinge-concept-v1.blend'))
if '--stills' in sys.argv:
 for f in [1,28,34,58,76]:
  scene.frame_set(f);scene.render.filepath=str(OUT/f'qa-{f:03}.png');bpy.ops.render.render(write_still=True)
else:bpy.ops.render.render(animation=True)
