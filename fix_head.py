with open('admin.html', 'r', encoding='utf-8') as f:
    content = f.read()

import re
content = re.sub(
    r'<!DOCTYPE html>\s*<html lang="en">\s*<title>Admin Dashboard \| NexoraCode</title>\s*<link rel="stylesheet" href="styles\.css\?v=6">',
    '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard | NexoraCode</title>
  <link rel="stylesheet" href="styles.css?v=6">''',
    content
)

with open('admin.html', 'w', encoding='utf-8') as f:
    f.write(content)
