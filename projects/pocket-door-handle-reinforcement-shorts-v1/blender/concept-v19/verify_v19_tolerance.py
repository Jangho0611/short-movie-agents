import bpy,json,hashlib
from pathlib import Path
from collections import Counter
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
prefix=('SH30NI','Visible grip','Simplified surface')
def geometry(o):return hashlib.sha256(repr(([tuple(v.co) for v in o.data.vertices],[tuple(p.vertices) for p in o.data.polygons])).encode()).hexdigest()
def records(scene,offset):
 bpy.context.window.scene=scene;bpy.context.view_layer.update();result=[]
 for o in scene.objects:
  if o.name.startswith(prefix):
   mat=o.matrix_world.copy();mat.translation.y+=offset;result.append((geometry(o),tuple(round(v,6) for row in mat for v in row)))
 return Counter(result)
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v14/pocket-handle-single-cutout-post-v14.blend'));original=bpy.context.scene;expected=records(original,0);originalcamera=[list(r) for r in original.camera.matrix_world];origscale=original.camera.data.ortho_scale
bpy.ops.wm.open_mainfile(filepath=str(D/'scene03-assembly-motion-v19-checked.blend'));ext=bpy.data.scenes['v19 original exterior'];actual=records(ext,.55)
assert expected==actual
camera_error=max(abs(ext.camera.matrix_world[i][j]-originalcamera[i][j]) for i in range(4) for j in range(4))
assert camera_error<1e-6 and ext.camera.data.ortho_scale==origscale
(D/'independent-geometry-qa.json').write_text(json.dumps({'mesh_and_seated_transform_multiset_exact':True,'handle_parts':sum(expected.values()),'original_v14_exterior_camera_max_abs_error':camera_error,'scale_exact':True,'motion_y_only':True,'model_units_not_installation_specs':True},indent=2))
print('VERIFIED',sum(expected.values()))
