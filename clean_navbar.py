import glob
import re

html_files = glob.glob('*.html')
for file in html_files:
    # Skip admin files
    if file in ['admin.html', 'admin-login.html']:
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove Notes
    content = re.sub(r'\s*<li><a href="[^"]*#notes".*?</li>', '', content)
    # Remove Challenges
    content = re.sub(r'\s*<li><a href="[^"]*#challenges".*?</li>', '', content)
    # Remove Roadmap
    content = re.sub(r'\s*<li><a href="[^"]*#roadmap".*?</li>', '', content)

    # Note: On other pages the href might not be hash. Wait, let me check other files.
    # In my previous script I updated all links to be `#` something except for index.html?
    # No, I used a regex to find them.
    # Let's just do a generic removal based on the text inside the anchor.
    content = re.sub(r'\s*<li><a[^>]*>\s*Notes\s*</a></li>', '', content)
    content = re.sub(r'\s*<li><a[^>]*>\s*Challenges\s*</a></li>', '', content)
    content = re.sub(r'\s*<li><a[^>]*>\s*Roadmap\s*</a></li>', '', content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print('Removed unnecessary links from navbars in all files.')
