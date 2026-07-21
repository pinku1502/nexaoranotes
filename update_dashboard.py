import re

with open('dashboard.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the old python object from langData
content = re.sub(r'\s*python:\s*\{.*?code:\s*`.*?`\s*\},', '', content, flags=re.DOTALL)

# 2. Add python to loadLanguageContent routing
# We find: if (langKey === 'java') { ... }
# And insert python right before it
python_route = """
      if (langKey === 'python') {
        window.location.href = 'python-course.html';
        return;
      }
"""
content = content.replace("if (langKey === 'java') {", python_route.lstrip() + "      if (langKey === 'java') {")

# 3. Add to the URL params check
content = content.replace("if (urlLang === 'java') window.location.href = 'java-course.html';", 
                          "if (urlLang === 'python') window.location.href = 'python-course.html';\n    else if (urlLang === 'java') window.location.href = 'java-course.html';")

with open('dashboard.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated dashboard.js")
