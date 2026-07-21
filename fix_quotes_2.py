import os

file_path = r"E:\Projects\nexaoranotes\index.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace literal backslash followed by a single quote
content = content.replace("\\'", "'")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed broken quotes in index.html globally.")
