import os
import zipfile

def zipdir(path, ziph):
    for root, dirs, files in os.walk(path):
        # Exclude node_modules, .git, and __pycache__
        dirs[:] = [d for d in dirs if d not in ('node_modules', '.git', '__pycache__')]
        for file in files:
            if not file.endswith('.zip') and not file.endswith('.pyc'):
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, start=path)
                ziph.write(file_path, arcname)

output_zip = r'C:\Users\Lenovo\Desktop\nexaoranotes_final.zip'

try:
    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        zipdir(r'E:\Projects\nexaoranotes', zipf)
    print("Zip file created successfully at:", output_zip)
except Exception as e:
    print("Error creating zip file:", e)
