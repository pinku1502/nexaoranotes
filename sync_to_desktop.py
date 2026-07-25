import shutil
import os
import glob

src_dir = r"E:\Projects\nexaoranotes"
dst_dir = r"c:\Users\Lenovo\Desktop\web"

# Copy all html, js, css, and png files
extensions = ["*.html", "*.js", "*.css", "*.png"]
for ext in extensions:
    for src_path in glob.glob(os.path.join(src_dir, ext)):
        file = os.path.basename(src_path)
        dst_path = os.path.join(dst_dir, file)
        shutil.copy2(src_path, dst_path)
        print(f"Copied {file} to Desktop/web")
