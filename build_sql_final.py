import os
import re

workspace = r"E:\Projects\nexaoranotes"
brain_dir = r"C:\Users\Lenovo\.gemini\antigravity\brain\74e8ccc9-bda8-41c5-8084-fb7c0983ae66"

# 1. Create sql-course.html
with open(os.path.join(workspace, 'mysql-course.html'), 'r', encoding='utf-8') as f:
    html_content = f.read()

# Replace MySQL references with SQL
html_content = html_content.replace('MySQL Masterclass', 'SQL Masterclass')
html_content = html_content.replace('mysql-course.css', 'sql-course.css')
html_content = html_content.replace('mysql-course.js', 'sql-course.js')
html_content = html_content.replace('Courses > MySQL', 'Courses > SQL')
# The icon is fa-database for SQL, not fa-cubes (MySQL)
html_content = html_content.replace('fa-cubes', 'fa-database')

with open(os.path.join(workspace, 'sql-course.html'), 'w', encoding='utf-8') as f:
    f.write(html_content)

# 2. Create sql-course.css
with open(os.path.join(workspace, 'mysql-course.css'), 'r', encoding='utf-8') as f:
    css_content = f.read()

with open(os.path.join(workspace, 'sql-course.css'), 'w', encoding='utf-8') as f:
    f.write(css_content)

# 3. Create sql-course.js
with open(os.path.join(workspace, 'mysql-course.js'), 'r', encoding='utf-8') as f:
    js_content = f.read()

dom_logic_match = re.search(r'\];\s*// Build UI.*', js_content, re.DOTALL)
dom_logic = dom_logic_match.group(0).replace('];', '')

md_file = os.path.join(brain_dir, 'sql_masterclass_notes.md')
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
    
    # Extract code blocks
    code_blocks = []
    def code_replacer(match):
        code_blocks.append(match.group(1))
        return f"\n\nCODE_BLOCK_{len(code_blocks)-1}\n\n"
    
    content = re.sub(r'```(?:sql|bash|javascript)\n(.*?)```', code_replacer, content, flags=re.DOTALL)
    
    # Escape Template Literal characters
    content = content.replace('\\', '\\\\')
    content = content.replace('`', '\\`')
    content = content.replace('$', '\\$')
    
    # Inline formatting
    content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
    content = re.sub(r'\*(.*?)\*', r'<em>\1</em>', content)
    content = re.sub(r'\\`(.*?)\\`', r'<code>\1</code>', content) 
    
    # Headers
    content = re.sub(r'### (.*?)\n', r'<h3>\1</h3>\n', content)
    
    # Lists
    content = re.sub(r'^(\*|\d+\.)\s+(.*?)$', r'<li>\2</li>', content, flags=re.MULTILINE)
    
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

with open(os.path.join(workspace, 'sql-course.js'), 'w', encoding='utf-8') as f:
    f.write(course_data_str)


# 4. Update index.html
with open(os.path.join(workspace, 'index.html'), 'r', encoding='utf-8') as f:
    index_content = f.read()

index_content = re.sub(
    r'<button[^>]*>Learn\s*SQL</button>',
    r'<button class="btn btn-secondary" onclick="window.location.href=\'sql-course.html\'">Learn SQL</button>',
    index_content,
    flags=re.IGNORECASE | re.MULTILINE | re.DOTALL
)

with open(os.path.join(workspace, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(index_content)


# 5. Clean up dashboard.js
dash_path = os.path.join(workspace, 'dashboard.js')
with open(dash_path, 'r', encoding='utf-8') as f:
    dash_content = f.read()

# Remove the old SQL block
dash_content = re.sub(r'\s*sql:\s*\{.*?code:\s*`.*?`\s*\},', '', dash_content, flags=re.DOTALL)

# Inject routing
dash_route = """
      if (langKey === 'sql') {
        window.location.href = 'sql-course.html';
        return;
      }
"""
dash_content = dash_content.replace("if (langKey === 'mysql') {", dash_route.lstrip() + "      if (langKey === 'mysql') {")

dash_url_route = "    else if (urlLang === 'sql') window.location.href = 'sql-course.html';\n"
dash_content = dash_content.replace("else if (urlLang === 'mysql')", dash_url_route + "    else if (urlLang === 'mysql')")

with open(dash_path, 'w', encoding='utf-8') as f:
    f.write(dash_content)


print("Full SQL Integration Complete!")
