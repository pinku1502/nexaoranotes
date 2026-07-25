import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove Notes Section
content = re.sub(r'<section class="notes" id="notes">.*?</section>', '', content, flags=re.DOTALL)

# Remove Challenges Section
content = re.sub(r'<section class="challenges" id="challenges">.*?</section>', '', content, flags=re.DOTALL)

# Remove Interviews Section
content = re.sub(r'<section class="interviews" id="interviews">.*?</section>', '', content, flags=re.DOTALL)

# Remove Roadmap Section
content = re.sub(r'<section class="roadmap" id="roadmap">.*?</section>', '', content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Removed notes, challenges, interviews, and roadmap sections.")
