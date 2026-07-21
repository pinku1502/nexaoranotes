import os
import re

workspace = r"E:\Projects\nexaoranotes"
brain_dir = r"C:\Users\Lenovo\.gemini\antigravity\brain\74e8ccc9-bda8-41c5-8084-fb7c0983ae66"

# 1. Create mysql-course.html
with open(os.path.join(workspace, 'python-course.html'), 'r', encoding='utf-8') as f:
    html_content = f.read()

html_content = html_content.replace('Python Masterclass', 'MySQL Masterclass')
html_content = html_content.replace('python-course.css', 'mysql-course.css')
html_content = html_content.replace('python-course.js', 'mysql-course.js')
html_content = html_content.replace('fa-python', 'fa-database')
html_content = html_content.replace('Courses > Python', 'Courses > MySQL')

with open(os.path.join(workspace, 'mysql-course.html'), 'w', encoding='utf-8') as f:
    f.write(html_content)

# 2. Create mysql-course.css
with open(os.path.join(workspace, 'python-course.css'), 'r', encoding='utf-8') as f:
    css_content = f.read()

with open(os.path.join(workspace, 'mysql-course.css'), 'w', encoding='utf-8') as f:
    f.write(css_content)

# 3. Create mysql-course.js
with open(os.path.join(workspace, 'python-course.js'), 'r', encoding='utf-8') as f:
    js_content = f.read()

dom_logic_match = re.search(r'\];\s*// Build UI.*', js_content, re.DOTALL)
dom_logic = dom_logic_match.group(0).replace('];', '')

md_file = os.path.join(brain_dir, 'mysql_masterclass_notes.md')
with open(md_file, 'r', encoding='utf-8') as f:
    md_content = f.read()

modules_raw = md_content.split('## ')
modules_raw = modules_raw[1:]

course_data_str = "document.addEventListener('DOMContentLoaded', () => {\n    const courseData = [\n"

for i, mod_raw in enumerate(modules_raw):
    parts = mod_raw.split('\n', 1)
    title = parts[0].strip()
    title = title.replace("'", "\\'").replace('"', '\\"')
    
    content = parts[1].strip()
    
    # 1. Extract code blocks
    code_blocks = []
    def code_replacer(match):
        code_blocks.append(match.group(1))
        return f"\n\nCODE_BLOCK_{len(code_blocks)-1}\n\n"
    
    content = re.sub(r'```(?:sql|bash|javascript)\n(.*?)```', code_replacer, content, flags=re.DOTALL)
    
    # 2. Escape Template Literal characters
    content = content.replace('\\', '\\\\')
    content = content.replace('`', '\\`')
    content = content.replace('$', '\\$')
    
    # 3. Inline formatting
    content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
    content = re.sub(r'\*(.*?)\*', r'<em>\1</em>', content)
    content = re.sub(r'\\`(.*?)\\`', r'<code>\1</code>', content) 
    
    # 4. Headers
    content = re.sub(r'### (.*?)\n', r'<h3>\1</h3>\n', content)
    
    # 5. Lists
    content = re.sub(r'^(\*|\d+\.)\s+(.*?)$', r'<li>\2</li>', content, flags=re.MULTILINE)
    
    # Now wrap consecutive elements
    blocks = content.split('\n\n')
    formatted_blocks = []
    
    for block in blocks:
        block = block.strip()
        if not block:
            continue
            
        if block.startswith('CODE_BLOCK_'):
            idx = int(block.replace('CODE_BLOCK_', ''))
            code = code_blocks[idx]
            code = code.replace('\\', '\\\\')
            code = code.replace('`', '\\`')
            code = code.replace('$', '\\$')
            formatted_blocks.append(f'<pre><code>{code}</code></pre>')
        elif block.startswith('<li>'):
            formatted_blocks.append(f'<ul>\n{block}\n</ul>')
        elif block.startswith('<h3>'):
            formatted_blocks.append(block)
        else:
            block = block.replace('\n', '<br>')
            formatted_blocks.append(f'<p>{block}</p>')
            
    content = '\n\n'.join(formatted_blocks)
    
    course_data_str += f"""        {{
            id: 'ch{i+1}',
            title: '{title}',
            content: `\\n{content}\\n`
        }},
"""

course_data_str = course_data_str.rstrip(',\n') + "\n    ];\n"
course_data_str += dom_logic

with open(os.path.join(workspace, 'mysql-course.js'), 'w', encoding='utf-8') as f:
    f.write(course_data_str)

# 4. Update index.html
with open(os.path.join(workspace, 'index.html'), 'r', encoding='utf-8') as f:
    index_content = f.read()

# The button under MySQL says: <button class="btn btn-secondary" onclick="window.location.href='dashboard.html?lang=sql'">Learn \nMySQL</button>
index_content = re.sub(
    r'<button[^>]*>Learn\s*MySQL</button>',
    r'<button class="btn btn-secondary" onclick="window.location.href=\'mysql-course.html\'">Learn MySQL</button>',
    index_content,
    flags=re.IGNORECASE | re.MULTILINE | re.DOTALL
)

with open(os.path.join(workspace, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(index_content)

print("MySQL UI Built and Integrated Successfully!")
