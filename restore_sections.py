import subprocess
import re

# Get pristine index.html from git
result = subprocess.run(['git', 'show', 'HEAD:index.html'], capture_output=True, text=True, encoding='utf-8')
content = result.stdout

# 1. Navbar: Remove Notes and Challenges
content = re.sub(r'\s*<li><a href="#notes" class="nav-link">Notes</a></li>', '', content)
content = re.sub(r'\s*<li><a href="#challenges" class="nav-link">Challenges</a></li>', '', content)
# They want Roadmap to stay, so don't remove Roadmap link.

# 2. Page Sections: Remove Notes and Challenges
content = re.sub(r'<section class="notes" id="notes">.*?</section>', '', content, flags=re.DOTALL)
content = re.sub(r'<section class="challenges" id="challenges">.*?</section>', '', content, flags=re.DOTALL)

# 3. Footer: Remove Coding Challenges, Cheat Sheets, Downloads from Resources column
content = re.sub(r'\s*<li><a href="#challenges" class="footer-link">Coding Challenges</a></li>', '', content)
content = re.sub(r'\s*<li><a href="#notes" class="footer-link">Cheat Sheets</a></li>', '', content)
content = re.sub(r'\s*<li><a href="#notes" class="footer-link">Downloads</a></li>', '', content)

# 4. Hide the Admin Portal for now since they didn't explicitly ask for it again, but I should probably leave it hidden to avoid making them angry again. Wait, I will just leave the footer original without the Admin Portal link!
# The original HEAD version of index.html doesn't have the Admin Portal Link anyway. 

# Clean up excessive newlines
content = re.sub(r'\n{4,}', '\n\n', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Restored Roadmap and Interviews. Removed Notes and Challenges.')
