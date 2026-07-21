import re

# 1. Restore dashboard.html
with open('dashboard.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('<button class="btn btn-primary" id="run-code-btn" style="display: none;">', '<button class="btn btn-primary" id="run-code-btn">')
html = html.replace('<div class="editor-tabs" style="display: none;">', '<div class="editor-tabs">')
html = html.replace('<textarea id="code-textarea" spellcheck="false" style="display: none;"></textarea>', '<textarea id="code-textarea" spellcheck="false"></textarea>')
html = html.replace('<textarea id="notes-textarea" placeholder="Write your custom notes here..." spellcheck="false" style="display: block; width: 100%;"></textarea>', '<textarea id="notes-textarea" placeholder="Write your custom notes here..." spellcheck="false" style="display: none;"></textarea>')
html = html.replace('<div class="terminal-panel" id="terminal-panel" style="display: none;">', '<div class="terminal-panel" id="terminal-panel">')
html = html.replace('<i class="fa-regular fa-floppy-disk"></i> Save Notes', '<i class="fa-regular fa-floppy-disk"></i> Save Workspace')

with open('dashboard.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('dashboard.html restored')

# 2. Redirect javascript in dashboard.js
with open('dashboard.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Add javascript to the redirect logic inside loadLanguageContent
redirect_logic = """
    const loadLanguageContent = (langKey) => {
      if (langKey === 'javascript') {
        window.location.href = 'javascript-masterclass.html';
        return;
      }"""
      
js = js.replace('const loadLanguageContent = (langKey) => {', redirect_logic)

# Also handle the sidebar clicks if they aren't using loadLanguageContent directly for redirection
sidebar_redirect_logic = """
        // Redirect to the dedicated HTML, CSS, C, or C++ notes page if clicked
        if (langKey === 'javascript') {
          window.location.href = 'javascript-masterclass.html';
          return;
        }"""
        
js = js.replace('// Redirect to the dedicated HTML, CSS, C, or C++ notes page if clicked', sidebar_redirect_logic)

with open('dashboard.js', 'w', encoding='utf-8') as f:
    f.write(js)
print('dashboard.js updated to redirect JS')

# 3. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    idx = f.read()
    
idx = idx.replace("window.location.href='dashboard.html?lang=javascript'", "window.location.href='javascript-masterclass.html'")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(idx)
print('index.html updated to redirect JS')
