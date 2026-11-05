import bpy,json
from pathlib import Path
from mathutils import Vector
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
out=R/'public/assets/images/pocket-handle-reinforced-assembly-v7.png';dest=D/'pocket-handle-reinforced-assembly-v7.blend'
assert not out.exists() and not dest.exists(),'Refuse overwrite'
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v4/pocket-handle-cutaway-v4.blend'))
def sig(o):return {'v':[list(v.co) for v in o.data.vertices],'matrix':[list(v) for v in o.matrix_world],'materials':[m.name for m in o.data.materials]}
grips=[o for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))];before={o.name:sig(o) for o in grips}
for o in list(bpy.data.objects):
 if o not in grips and o.type not in ['CAMERA','LIGHT']:bpy.data.objects.remove(o,do_unlink=True)
def material(name,color,rough=.6):
 m=bpy.data.materials.new(name);m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=rough;return m
paint=material('Warm painted surface - illustrative finish',(.76,.735,.68),.55)
n=paint.node_tree.nodes;l=paint.node_tree.links;noise=n.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=190;noise.inputs['Detail'].default_value=2;b=n.new('ShaderNodeBump');b.inputs['Strength'].default_value=.12;b.inputs['Distance'].default_value=.001;l.new(noise.outputs['Fac'],b.inputs['Height']);l.new(b.outputs['Normal'],n.get('Principled BSDF').inputs['Normal'])
wood=material('Educational support example - wood appearance NOT specified material',(.39,.28,.17))
n=wood.node_tree.nodes;l=wood.node_tree.links;tex=n.new('ShaderNodeTexCoord');mapping=n.new('ShaderNodeVectorMath');mapping.operation='MULTIPLY';mapping.inputs[1].default_value=(9,9,.35);l.new(tex.outputs['Generated'],mapping.inputs[0]);noise=n.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=5;noise.inputs['Detail'].default_value=2;l.new(mapping.outputs[0],noise.inputs['Vector']);ramp=n.new('ShaderNodeValToRGB');ramp.color_ramp.elements[0].position=.20;ramp.color_ramp.elements[0].color=(.26,.19,.12,1);ramp.color_ramp.elements[1].position=.8;ramp.color_ramp.elements[1].color=(.51,.40,.27,1);l.new(noise.outputs['Fac'],ramp.inputs[0]);l.new(ramp.outputs['Color'],n.get('Principled BSDF').inputs['Base Color']);b=n.new('ShaderNodeBump');b.inputs['Strength'].default_value=.16;b.inputs['Distance'].default_value=.0012;l.new(noise.outputs['Fac'],b.inputs['Height']);l.new(b.outputs['Normal'],n.get('Principled BSDF').inputs['Normal'])
def cube(name,loc,size,mat):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(mat);return o
front=cube('Front skin conceptual envelope',(0,-.1825,0),(5,.035,7),paint)
rear=cube('Rear skin conceptual envelope - other interior omitted',(0,.2025,0),(5,.035,7),paint)
def cut(o,loc,size,name):
 t=cube('temporary explanatory cutter',loc,size,paint);bpy.context.view_layer.objects.active=o;m=o.modifiers.new(name,'BOOLEAN');m.operation='DIFFERENCE';m.solver='EXACT';m.object=t;bpy.ops.object.modifier_apply(modifier=m.name);bpy.data.objects.remove(t,do_unlink=True)
# Clearance hidden beneath flange; all values below are artistic scene units, not cutting specs.
cut(front,(-.245,-.18,.077),(.225,.15,1.26),'Conceptual concealed clearance')
cut(front,(.085,-.18,.06),(.32,.15,1.16),'Local explanatory skin removal NOT machining')
# One simple lateral support example, not a continuous ring and not a manufacturer layout.
support=cube('EDUCATIONAL lateral support example - no fixing claim',(-.015,.01,.065),(.20,.35,1.51),wood)
for o in [front,rear,support]:
 m=o.modifiers.new('Restrained edge highlight','BEVEL');m.width=.0025;m.segments=3;o.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
s=bpy.context.scene;cam=s.camera;cam.location=(2.4,-7,1.25);cam.rotation_euler=(Vector((-.045,0,.04))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=2.65
s.render.resolution_x=1080;s.render.resolution_y=1920;s.render.resolution_percentage=100;s.render.image_settings.file_format='PNG';s.render.image_settings.color_mode='RGB';s.render.filepath=str(out);s.cycles.samples=64;s.frame_start=s.frame_end=1
s['scope']='Educational final assembly visualization. Support shape/count/wood appearance/location arbitrary explanation only, NOT actual SH30NI installation or door specifications. No fasteners. All other internal components omitted.'
s['future_notice']='내부 보강 설명용 개념도 · 제품별 상이'
assert before=={o.name:sig(o) for o in grips}
# Geometric separation only; not installation suitability or strength.
clearance_xmax=-.245+.225/2;support_xmin=-.015-.20/2
assert support_xmin>clearance_xmax
(D/'geometry-qa.json').write_text(json.dumps({'handle_identical_to_v4':True,'handle_front_ratio':'37:170','support_does_not_intersect_conceptual_grip_clearance':True,'gap_scene_units':support_xmin-clearance_xmax,'support_example_count':1,'support_is_not_manufacturer_spec':True,'fasteners':0,'objects':[o.name for o in s.objects]},indent=2))
bpy.ops.wm.save_as_mainfile(filepath=str(dest));bpy.ops.render.render(write_still=True)
