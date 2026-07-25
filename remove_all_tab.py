import os
import re

workspace = r"E:\Projects\nexaoranotes"

with open(os.path.join(workspace, "index.html"), "r", encoding="utf-8") as f:
    content = f.read()

# Replace tab buttons
old_tabs = """    <div class="interview-tabs" style="display: flex; justify-content: center; gap: 12px; margin-bottom: 40px; flex-wrap: wrap;">
      <button class="tab-btn active" data-filter="all">All</button>
      <button class="tab-btn" data-filter="javascript">JavaScript</button>"""

new_tabs = """    <div class="interview-tabs" style="display: flex; justify-content: center; gap: 12px; margin-bottom: 40px; flex-wrap: wrap;">
      <button class="tab-btn active" data-filter="javascript">JavaScript</button>"""

content = content.replace(old_tabs, new_tabs)

# Regex to find interview cards and hide the non-javascript ones on load
def hide_cards(match):
    card_html = match.group(0)
    if 'data-lang="javascript"' in card_html:
        return card_html
    # Add hidden to class
    if 'class="interview-card glass-card"' in card_html:
        return card_html.replace('class="interview-card glass-card"', 'class="interview-card glass-card hidden"')
    return card_html

content = re.sub(r'<div class="interview-card glass-card"[^>]*>.*?</div>', hide_cards, content, flags=re.DOTALL)

with open(os.path.join(workspace, "index.html"), "w", encoding="utf-8") as f:
    f.write(content)

print("Updated index.html: Removed 'All' tab and hid non-JS cards by default.")
