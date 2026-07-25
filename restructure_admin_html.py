with open('admin.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <main class="admin-container"> with the new layout
old_main = '<main class="admin-container">'
new_main = '''<div class="dashboard-layout">
  
  <!-- SIDEBAR -->
  <aside class="dashboard-sidebar glass-card">
    <div style="padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 10px;">
      <h3 style="color: var(--text-white); font-size: 1.1rem;"><i class="fa-solid fa-chart-pie" style="color: var(--accent-purple); margin-right: 8px;"></i> Menu</h3>
    </div>
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li class="sidebar-item active" id="nav-users" onclick="switchTab('users')">
        <i class="fa-solid fa-users"></i> User Database
      </li>
      <li class="sidebar-item" id="nav-feedback" onclick="switchTab('feedback')">
        <i class="fa-solid fa-comments"></i> User Feedback
      </li>
      <li class="sidebar-item" id="nav-contact" onclick="switchTab('contact')">
        <i class="fa-solid fa-envelope-open-text"></i> Contact Messages
      </li>
    </ul>
  </aside>

  <!-- MAIN CONTENT -->
  <main class="admin-container dashboard-main">'''
content = content.replace(old_main, new_main)

# Wrap Users section
content = content.replace('<div class="admin-header">', '<section id="section-users" class="dashboard-section active">\n    <div class="admin-header">', 1)
content = content.replace('<!-- FEEDBACK / REVIEWS SECTION -->', '</section>\n\n    <!-- FEEDBACK / REVIEWS SECTION -->')

# Wrap Feedback section
content = content.replace('<!-- FEEDBACK / REVIEWS SECTION -->\n    <div style="margin-top: 50px;">', '<!-- FEEDBACK / REVIEWS SECTION -->\n    <section id="section-feedback" class="dashboard-section" style="display: none;">')
content = content.replace('<!-- CONTACT MESSAGES SECTION -->', '</section>\n\n    <!-- CONTACT MESSAGES SECTION -->')

# Wrap Contact section
content = content.replace('<!-- CONTACT MESSAGES SECTION -->\n    <div style="margin-top: 50px;">', '<!-- CONTACT MESSAGES SECTION -->\n    <section id="section-contact" class="dashboard-section" style="display: none;">')
content = content.replace('</main>', '</section>\n\n  </main>\n</div>')

with open('admin.html', 'w', encoding='utf-8') as f:
    f.write(content)
    print('Restructured admin.html')
