import os
import re

workspace = r"E:\Projects\nexaoranotes"

# 1. Update index.html links to have ?v=2
with open(os.path.join(workspace, "index.html"), "r", encoding="utf-8") as f:
    content = f.read()

# Replace links in Featured Notes and Languages section
content = content.replace('href="javascript-course.html"', 'href="javascript-course.html?v=2"')
content = content.replace("href='javascript-course.html'", "href='javascript-course.html?v=2'")
content = content.replace("href=\"javascript-course.html\"", "href=\"javascript-course.html?v=2\"")

content = content.replace('href="python-course.html"', 'href="python-course.html?v=2"')
content = content.replace("href='python-course.html'", "href='python-course.html?v=2'")
content = content.replace("href=\"python-course.html\"", "href=\"python-course.html?v=2\"")

content = content.replace('href="react-course.html"', 'href="react-course.html?v=2"')
content = content.replace("href='react-course.html'", "href='react-course.html?v=2'")
content = content.replace("href=\"react-course.html\"", "href=\"react-course.html?v=2\"")

content = content.replace('href="sql-course.html"', 'href="sql-course.html?v=2"')
content = content.replace("href='sql-course.html'", "href='sql-course.html?v=2'")
content = content.replace("href=\"sql-course.html\"", "href=\"sql-course.html?v=2\"")

# Also update the window.location.href in onclick attributes
content = content.replace("'javascript-course.html'", "'javascript-course.html?v=2'")
content = content.replace("'python-course.html'", "'python-course.html?v=2'")
content = content.replace("'react-course.html'", "'react-course.html?v=2'")
content = content.replace("'sql-course.html'", "'sql-course.html?v=2'")

with open(os.path.join(workspace, "index.html"), "w", encoding="utf-8") as f:
    f.write(content)
print("Updated index.html links with cache buster v=2")

# 2. Update all html course files to point to js?v=5 or js?v=5
html_files = ["javascript-course.html", "python-course.html", "react-course.html", "sql-course.html"]
for html_file in html_files:
    path = os.path.join(workspace, html_file)
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            c = f.read()
        # Find script tag and bump version to ?v=5
        c = re.sub(r'src="([^"]+)\.js(?:\?v=\d+)?"', r'src="\1.js?v=5"', c)
        with open(path, "w", encoding="utf-8") as f:
            f.write(c)
        print(f"Updated script tags in {html_file}")
