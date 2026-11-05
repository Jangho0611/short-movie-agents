import bpy, math, json, hashlib
from pathlib import Path
from mathutils import Vector
R=Path(__file__).resolve().parents[2];D=R/'blender/concept-v2';out=R/'public/assets/images/pocket-handle-macro-cutaway-v2.png';blend=D/'pocket-handle-macro-cutaway-v2.blend'
if out.exists() or blend.exists():raise RuntimeError('Refuse overwrite')
# Preserve all pre-existing project assets, including the complete v1.
before={str(p.relative_to(R)):hashlib.sha256(p.read_bytes()).hexdigest() for folder in ['public','src','docs','blender/concept-v1'] for p in (R/folder).rglob('*') if p.is_file()}
(D/'preservation-before.json').write_text(json.dumps(before))
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def mat(name,color,metal=0,rough=.5):
 m=bpy.data.materials.new(name);m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough;return m
white=mat('Neutral exterior',(.79,.76,.70));cut=mat('Cut face display convention NOT actual core',(.40,.43,.42));interior=mat('Empty space rear boundary display convention',(.17,.23,.25));silver=mat('Satin nickel visual approximation',(.48,.46,.42),.76,.36);mark=mat('Support conditions enquiry GRAPHIC not a component',(.13,.36,.42),0,.55)
# Fine anisotropic bump: visual finish, not manufacturer material specification.
p=silver.node_tree.nodes.get('Principled BSDF');n=silver.node_tree.nodes;links=silver.node_tree.links;t=n.new('ShaderNodeTexNoise');t.inputs['Scale'].default_value=850;t.inputs['Roughness'].default_value=.65;b=n.new('ShaderNodeBump');b.inputs['Strength'].default_value=.12;b.inputs['Distance'].default_value=.0005;links.new(t.outputs['Fac'],b.inputs['Height']);links.new(b.outputs['Normal'],p.inputs['Normal'])
def cube(name,loc,size,m,bev=0):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(m)
 if bev:q=o.modifiers.new('Soft edges','BEVEL');q.width=bev;q.segments=4;o.modifiers.new('Normals','WEIGHTED_NORMAL')
 return o
# Local illustrative section. Dimensions of door and cutaway are staging values only.
slab=cube('Door local envelope NOT material/core reconstruction',(0,.07,0),(5,.5,7),white)
slab.data.materials.append(cut)
tool=cube('Editorial reveal window NOT machining',(0.26,-.15,.02),(1.10,.72,2.18),cut,.07)
bpy.context.view_layer.objects.active=tool
for mod in list(tool.modifiers):bpy.ops.object.modifier_apply(modifier=mod.name)
bpy.context.view_layer.objects.active=slab;q=slab.modifiers.new('Illustrative sectional reveal','BOOLEAN');q.operation='DIFFERENCE';q.object=tool;q.solver='EXACT';bpy.ops.object.modifier_apply(modifier=q.name);bpy.data.objects.remove(tool,do_unlink=True)
be=slab.modifiers.new('Section edge highlights','BEVEL');be.width=.008;be.segments=3;slab.modifiers.new('Normals','WEIGHTED_NORMAL')
# No wood, no reinforcement block: only a neutral rear boundary for depth cues.
cube('Rear envelope convention',(0.26,.235,.02),(1.10,.025,2.18),interior,.025)
x=-.245;front=-.205
outer=[(-.185,-.85),(.185,-.85),(.185,.85),(-.185,.85)];inner=[(-.10,-.53),(.10,-.53),(.10,.68),(-.10,.68)]
verts=[(x+xx,yy,zz) for yy in [front-.0125,front+.0125] for loop in [outer,inner] for xx,zz in loop];faces=[]
for i in range(4):
 j=(i+1)%4;faces.extend([(i,j,4+j,4+i),(8+i,12+i,12+j,8+j),(i,8+i,8+j,j),(4+i,4+j,12+j,12+i)])
me=bpy.data.meshes.new('Front ratio 37 to 170');me.from_pydata(verts,[],faces);me.update();ob=bpy.data.objects.new('SH30NI front visual approximation',me);bpy.context.collection.objects.link(ob);ob.data.materials.append(silver);be=ob.modifiers.new('Rounded edges','BEVEL');be.width=.008;be.segments=4;ob.modifiers.new('Normals','WEIGHTED_NORMAL')
# Bowl geometry is a visible-form approximation, no concealed attachment modeled.
cube('Visible grip bowl',(x,-.075,.077),(.195,.018,1.18),silver,.015)
for side in [-1,1]:cube('Visible grip wall',(x+side*.101,-.133,.077),(.016,.13,1.21),silver,.007)
for z in [-.528,.682]:cube('Visible grip end',(x,-.133,z),(.207,.13,.018),silver,.007)
for i in range(12):cube('Simplified surface rib',(x-.084+i*.0153,-.089,.077),(.004,.007,1.12),silver,.002)
# 3D editorial strokes trace where conditions must be checked; NOT support objects.
def stroke(name,pts):
 c=bpy.data.curves.new(name,'CURVE');c.dimensions='3D';c.bevel_depth=.0035;c.bevel_resolution=3;s=c.splines.new('POLY');s.points.add(len(pts)-1)
 for v,pt in zip(s.points,pts):v.co=(*pt,1)
 o=bpy.data.objects.new(name,c);bpy.context.collection.objects.link(o);o.data.materials.append(mark)
for z in [-.69,0,.69]:
 stroke('Editorial check bracket NOT fixing point',[(.765,-.165,z-.08),(.765,-.165,z),(.765,.13,z),(.65,.20,z)])
scene=bpy.context.scene;scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.83,.80,.75,1);scene.world.node_tree.nodes['Background'].inputs[1].default_value=.38
for name,loc,power,size in [('Large soft key',(-3,-4,4),420,3),('Soft fill',(3,-4,.5),160,3),('Cut face grazing light',(2,0,3),180,2)]:
 bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.name=name;o.data.energy=power;o.data.size=size;o.rotation_euler=(Vector((0,0,0))-o.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(2.6,-7,1.6));cam=bpy.context.object;cam.name='Macro cutaway camera';cam.rotation_euler=(Vector((.10,0,.04))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=2.75;scene.camera=cam
scene.render.engine='CYCLES';scene.cycles.samples=48;scene.cycles.use_denoising=True;scene.render.resolution_x=1080;scene.render.resolution_y=1920;scene.render.resolution_percentage=100;scene.render.image_settings.file_format='PNG';scene.render.image_settings.color_mode='RGB';scene.view_settings.view_transform='AgX';scene.render.filepath=str(out)
scene['scope']='Single static macro concept. Cutaway window NOT machining template; rear/cut faces NOT actual core. Cyan strokes are editorial enquiry marks NOT fixing parts.';scene['future_notice']='내부 구조 설명용 개념도 · 제품별 상이';scene['handle_front_ratio']='37:170';scene.frame_start=1;scene.frame_end=1
bpy.ops.wm.save_as_mainfile(filepath=str(blend));bpy.ops.render.render(write_still=True)
