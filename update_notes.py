import re

with open(r'C:\Users\Lenovo\.gemini\antigravity\brain\74e8ccc9-bda8-41c5-8084-fb7c0983ae66\javascript_masterclass_notes.md', 'r', encoding='utf-8') as f:
    notes = f.read()

# Safely escape for JS template literals
escaped_notes = notes.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$')

with open('dashboard.js', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'(javascript:\s*\{.*?note:\s*`)(.*?)(`,\s*code:)', re.DOTALL)
match = pattern.search(content)

if match:
    new_content = content[:match.start(2)] + escaped_notes + content[match.end(2):]
    with open('dashboard.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Successfully updated dashboard.js with escaped notes.')
else:
    print('Could not find the javascript note block in dashboard.js.')
