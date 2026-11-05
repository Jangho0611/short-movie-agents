import bpy,json
from pathlib import Path
from mathutils import Matrix
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent
out=R/'public/assets/images/pocket-handle-post-assembly-v9.png';dest=D/'pocket-handle-post-assembly-v9.blend'
assert not out.exists() and not dest.exists()
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v8/pocket-handle-layout-check-v8.blend'))
original={o.name:[list(v) for v in o.matrix_world] for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))}
bpy.ops.wm.open_mainfile(filepath=str(D/'pocket-handle-pre-assembly-v9.blend'))
for name,m in original.items():bpy.data.objects[name].matrix_world=Matrix(m)
bpy.context.view_layer.update()
assert all([list(v) for v in bpy.data.objects[name].matrix_world]==m for name,m in original.items())
s=bpy.context.scene;s['state']='B - illustrative final placement, NOT validated fitting';s.render.filepath=str(out)
bpy.ops.wm.save_as_mainfile(filepath=str(dest));bpy.ops.render.render(write_still=True)
