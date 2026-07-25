import os
import re

workspace = r"E:\Projects\nexaoranotes"

html_files = [f for f in os.listdir(workspace) if f.endswith('.html')]

print("--- Link and Asset Testing ---")

def is_valid_link(link, current_file):
    if link.startswith('http') or link.startswith('mailto:'):
        return True
    if link.startswith('#'):
        return True
    
    # Strip query parameters for file check
    file_path = link.split('?')[0]
    
    if os.path.exists(os.path.join(workspace, file_path)):
        return True
    return False

missing_assets = []
broken_links = []

for file in html_files:
    with open(os.path.join(workspace, file), 'r', encoding='utf-8') as f:
        content = f.read()
        
        # Check hrefs
        links = re.findall(r'href="([^"]+)"', content)
        for link in links:
            if not is_valid_link(link, file):
                broken_links.append((file, link))
                
        # Check srcs (scripts, images)
        srcs = re.findall(r'src="([^"]+)"', content)
        for src in srcs:
            if not is_valid_link(src, file):
                missing_assets.append((file, src))

print(f"Found {len(broken_links)} broken links:")
for file, link in broken_links:
    print(f"  {file} -> {link}")
    
print(f"Found {len(missing_assets)} missing assets:")
for file, src in missing_assets:
    print(f"  {file} -> {src}")

# Check JS syntax
print("\n--- Checking JS Syntax ---")
js_files = [f for f in os.listdir(workspace) if f.endswith('.js')]
import subprocess
for js in js_files:
    try:
        # run node syntax check
        res = subprocess.run(['node', '-c', os.path.join(workspace, js)], capture_output=True, text=True)
        if res.returncode != 0:
            print(f"Syntax Error in {js}: {res.stderr.strip()}")
    except Exception as e:
        print("Node not found or error running syntax check:", e)
        break
