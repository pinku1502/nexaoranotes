import os
import re

workspace = r"E:\Projects\nexaoranotes"
brain_dir = r"C:\Users\Lenovo\.gemini\antigravity\brain\74e8ccc9-bda8-41c5-8084-fb7c0983ae66"

# 1. Create typescript-course.html
with open(os.path.join(workspace, 'python-course.html'), 'r', encoding='utf-8') as f:
    html_content = f.read()

html_content = html_content.replace('Python Masterclass', 'TypeScript Masterclass')
html_content = html_content.replace('python-course.css', 'typescript-course.css')
html_content = html_content.replace('python-course.js', 'typescript-course.js')
# Replace the python icon with typescript (I'll use a generic TS icon or just text, but fontawesome has JS/node icons. fa-js might work, or we just leave the icon generic). Let's use 'fa-js' for typescript if there's no fa-typescript, or just text.
html_content = html_content.replace('fa-python', 'fa-code') # generic code icon
html_content = html_content.replace('Courses > Python', 'Courses > TypeScript')

with open(os.path.join(workspace, 'typescript-course.html'), 'w', encoding='utf-8') as f:
    f.write(html_content)

# 2. Create typescript-course.css
with open(os.path.join(workspace, 'python-course.css'), 'r', encoding='utf-8') as f:
    css_content = f.read()

with open(os.path.join(workspace, 'typescript-course.css'), 'w', encoding='utf-8') as f:
    f.write(css_content)

# 3. Create typescript-course.js
with open(os.path.join(workspace, 'python-course.js'), 'r', encoding='utf-8') as f:
    js_content = f.read()

dom_logic_match = re.search(r'\];\s*// Build UI.*', js_content, re.DOTALL)
dom_logic = dom_logic_match.group(0).replace('];', '')

md_file = os.path.join(brain_dir, 'typescript_masterclass_notes_detailed.md')
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
    
    # 1. Extract code blocks
    code_blocks = []
    def code_replacer(match):
        code_blocks.append(match.group(1))
        return f"\n\nCODE_BLOCK_{len(code_blocks)-1}\n\n"
    
    # TS code block extraction
    content = re.sub(r'```(?:typescript|tsx|bash)\n(.*?)```', code_replacer, content, flags=re.DOTALL)
    
    # 2. Escape Javascript Template Literal characters
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

with open(os.path.join(workspace, 'typescript-course.js'), 'w', encoding='utf-8') as f:
    f.write(course_data_str)

# 4. Update dashboard.js
with open(os.path.join(workspace, 'dashboard.js'), 'r', encoding='utf-8') as f:
    dash_content = f.read()

# Remove the old typescript object from langData
dash_content = re.sub(r'\s*typescript:\s*\{.*?code:\s*`.*?`\s*\},', '', dash_content, flags=re.DOTALL)

# Add routing
ts_route = """
      if (langKey === 'typescript') {
        window.location.href = 'typescript-course.html';
        return;
      }
"""
dash_content = dash_content.replace("if (langKey === 'python') {", ts_route.lstrip() + "      if (langKey === 'python') {")

# Add to URL params
dash_content = dash_content.replace("if (urlLang === 'python') window.location.href = 'python-course.html';", 
                          "if (urlLang === 'typescript') window.location.href = 'typescript-course.html';\n    else if (urlLang === 'python') window.location.href = 'python-course.html';")

with open(os.path.join(workspace, 'dashboard.js'), 'w', encoding='utf-8') as f:
    f.write(dash_content)

print("TypeScript Masterclass Integration Complete!")
