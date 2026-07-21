import os
import re

workspace = r"E:\Projects\nexaoranotes"
dash_path = os.path.join(workspace, 'dashboard.js')

with open(dash_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the old SQL dictionary object
content = re.sub(r'\s*sql:\s*\{.*?code:\s*`.*?`\s*\},', '', content, flags=re.DOTALL)

# Inject SQL route in loadLanguageContent
# Wait, let's see where other routes are
route = """
      if (langKey === 'sql' || langKey === 'mysql') {
        window.location.href = 'mysql-course.html';
        return;
      }
"""
content = content.replace("if (langKey === 'javascript') {", route.lstrip() + "      if (langKey === 'javascript') {")

# Inject URL param check
# else if (urlLang === 'typescript') window.location.href = 'typescript-course.html';
url_route = "    else if (urlLang === 'sql' || urlLang === 'mysql') window.location.href = 'mysql-course.html';\n"
content = content.replace("if (urlLang === 'typescript') window.location.href = 'typescript-course.html';", 
                          "if (urlLang === 'typescript') window.location.href = 'typescript-course.html';\n" + url_route)

with open(dash_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("dashboard.js updated successfully.")
