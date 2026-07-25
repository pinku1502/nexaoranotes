import glob
import re

html_files = glob.glob('*.html')
for file in html_files:
    if file == 'contact.html': continue
    
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace anything that looks like href="#footer" or href="index.html#footer" for the Contact link
    new_content = re.sub(r'href="[^"]*#footer"\s*class="nav-link">Contact', 'href="contact.html" class="nav-link">Contact', content)
    
    if content != new_content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {file}')
