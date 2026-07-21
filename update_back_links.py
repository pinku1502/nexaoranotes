import os
import glob

workspace = r"E:\Projects\nexaoranotes"
html_files = glob.glob(os.path.join(workspace, "*-course.html"))
html_files.append(os.path.join(workspace, "javascript-masterclass.html"))

for file_path in html_files:
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace href="index.html" specifically for the back-link
    new_content = content.replace('href="index.html" class="back-link"', 'href="index.html#languages" class="back-link"')
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(file_path)}")

print("All Back to Home links updated to point to #languages section.")
