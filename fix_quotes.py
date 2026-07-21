import os

file_path = r"E:\Projects\nexaoranotes\index.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the broken backslashes
content = content.replace(r"onclick=\"window.location.href=\'sql-course.html\'\"", r"onclick=\"window.location.href='sql-course.html'\"")
content = content.replace(r"onclick=\"window.location.href=\'react-course.html\'\"", r"onclick=\"window.location.href='react-course.html'\"")
content = content.replace(r"onclick=\"window.location.href=\'mysql-course.html\'\"", r"onclick=\"window.location.href='mysql-course.html'\"")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed broken quotes in index.html")
