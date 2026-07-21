import os
import re

workspace = r"E:\Projects\nexaoranotes"
brain_dir = r"C:\Users\Lenovo\.gemini\antigravity\brain\74e8ccc9-bda8-41c5-8084-fb7c0983ae66"

with open(os.path.join(workspace, 'java-course.js'), 'r', encoding='utf-8') as f:
    js_content = f.read()

dom_logic_match = re.search(r'\];\s*// Build UI.*', js_content, re.DOTALL)
dom_logic = dom_logic_match.group(0).replace('];', '')

md_file = os.path.join(brain_dir, 'python_masterclass_notes_detailed.md')
with open(md_file, 'r', encoding='utf-8') as f:
    md_content = f.read()

modules_raw = md_content.split('## Module')
modules_raw = modules_raw[1:]

course_data_str = "document.addEventListener('DOMContentLoaded', () => {\n    const courseData = [\n"

for i, mod_raw in enumerate(modules_raw):
    parts = mod_raw.split('\n', 1)
    title = f"Module{parts[0].strip()}"
    title = title.replace("'", "\\'").replace('"', '\\"')
    
    content = parts[1].strip()
    
    # 1. Escape backslashes FIRST! (So \ becomes \\)
    content = content.replace('\\', '\\\\')
    
    # 2. Escape backticks
    content = content.replace('`', '\\`')
    
    # 3. Escape dollar signs to prevent JS template literal interpolation
    content = content.replace('$', '\\$')
    
    # Basic markdown to HTML
    content = re.sub(r'### (.*?)\n', r'<h3>\1</h3>\n', content)
    content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
    content = re.sub(r'\*(.*?)\*', r'<em>\1</em>', content)
    
    # Code blocks need to restore their literal formatting if they were broken by escaping?
    # No, the HTML just renders them. We just wrap in <pre><code>
    content = re.sub(r'\\`\\`\\`python\n(.*?)\\`\\`\\`', r'<pre><code>\1</code></pre>', content, flags=re.DOTALL)
    
    # Convert lists roughly
    content = re.sub(r'\n\\* (.*?)\n', r'\n<li>\1</li>\n', content)
    
    course_data_str += f"""        {{
            id: 'ch{i+1}',
            title: '{title}',
            content: `\\n{content}\\n`
        }},
"""

course_data_str = course_data_str.rstrip(',\n') + "\n    ];\n"
course_data_str += dom_logic

with open(os.path.join(workspace, 'python-course.js'), 'w', encoding='utf-8') as f:
    f.write(course_data_str)

print("Fixed python-course.js generation!")
