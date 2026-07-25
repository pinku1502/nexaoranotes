import os
import re

workspace = r"E:\Projects\nexaoranotes"
brain_file = r"C:\Users\Lenovo\.gemini\antigravity\brain\b8e9a94d-1499-4c1e-85a7-1081ada2518f\express_masterclass_notes_detailed.md"

# 1. Create express-course.html matching python-course.html EXACTLY with user-profile-section
html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ultimate Express.js Course | NexoraCode</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="express-course.css">
</head>
<body>

    <!-- Print Header (Only visible when downloading PDF) -->
    <div class="print-header">
        <h1>NexoraCode: The Ultimate Express.js Developer Course</h1>
        <p>Premium Developer Education Sandbox</p>
    </div>

    <!-- Main App Container -->
    <div class="app-container">
        
        <!-- Sidebar Navigation -->
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <i class="fa-solid fa-server" style="color: #8c93a0; font-size: 1.5rem;"></i>
                    <span>Express.js Course</span>
                </div>
                <button class="mobile-close" id="mobile-close"><i class="fa-solid fa-xmark"></i></button>
            </div>
            
            <div class="sidebar-menu">
                <div class="menu-title">COURSE MODULES</div>
                <ul id="table-of-contents" class="nav-links">
                    <!-- Links injected via JS -->
                </ul>
            </div>
            
            <div class="sidebar-footer">
                <a href="index.html#languages" class="back-link"><i class="fa-solid fa-arrow-left"></i> Back to Home</a>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="main-content">
            <!-- Top Navbar -->
            <header class="top-nav">
                <div class="nav-left">
                    <button class="mobile-toggle" id="mobile-toggle"><i class="fa-solid fa-bars"></i></button>
                    <div class="breadcrumbs">
                        <span>Courses</span> <i class="fa-solid fa-chevron-right"></i> <span class="active">Express.js</span>
                    </div>
                </div>
                <div class="nav-right" id="user-profile-section" style="display: flex; align-items: center;">
                    <!-- Will be dynamically populated by JS -->
                </div>
            </header>

            <!-- Notes Content -->
            <div class="notes-container" id="notes-container">
                <!-- Content injected via JS -->
            </div>
            
            <!-- Footer -->
            <footer class="course-footer">
                <p>Created with <i class="fa-solid fa-heart" style="color: #ef4444;"></i> by NexoraCode</p>
            </footer>
        </main>
    </div>

    <script src="express-course.js?v=5"></script>
</body>
</html>
"""

with open(os.path.join(workspace, 'express-course.html'), 'w', encoding='utf-8') as f:
    f.write(html_content)

# 2. Copy CSS
with open(os.path.join(workspace, 'python-course.css'), 'r', encoding='utf-8') as f:
    css_content = f.read()
with open(os.path.join(workspace, 'express-course.css'), 'w', encoding='utf-8') as f:
    f.write(css_content)

# 3. Read and parse markdown to js courseData
with open(brain_file, 'r', encoding='utf-8') as f:
    md_content = f.read()

# Split strictly by headers starting with ## and containing "Module "
# Using a capturing group so we keep the headers
parts = re.split(r'\n##\s*(.*?Module\s+\d+:\s*.*?)\n', md_content)

course_data_str = "const courseData = [\n"

# The split will return: [intro_text, module1_header, module1_content, module2_header, module2_content, ...]
modules = []
for i in range(1, len(parts), 2):
    title = parts[i].strip()
    content = parts[i+1].strip() if i+1 < len(parts) else ""
    
    # Remove emoji from title if any
    title = re.sub(r'[^\w\s\d::.-]', '', title).strip()
    
    content_html = ""
    in_code = False
    code_lang = ""
    code_lines = []
    
    lines = content.split('\n')
    for line in lines:
        if line.startswith('```'):
            if not in_code:
                in_code = True
                code_lang = line.replace('```', '').strip()
            else:
                in_code = False
                code_html = '\n'.join(code_lines).replace('<', '&lt;').replace('>', '&gt;')
                content_html += f"<pre><code>{code_html}</code></pre>\n"
                code_lines = []
            continue
            
        if in_code:
            code_lines.append(line)
            continue
            
        if line.startswith('### '):
            content_html += f"<h3>{line[4:]}</h3>\n"
        elif line.startswith('## '):
            content_html += f"<h2>{line[3:]}</h2>\n"
        elif line.startswith('* '):
            item = line[2:]
            item = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', item)
            item = re.sub(r'`(.*?)`', r'<code>\1</code>', item)
            content_html += f"<ul><li>{item}</li></ul>\n"
        elif line.startswith('> [!'):
            alert_type = line[4:line.find(']')].lower()
            content_html += f"<div class='alert alert-{alert_type}'><div class='alert-content'>"
        elif line.startswith('> '):
            content_html += f"<p>{line[2:]}</p></div></div>"
        elif line.startswith('---'):
            content_html += "<hr>\n"
        elif line.strip() == '':
            pass
        else:
            formatted = line
            formatted = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', formatted)
            formatted = re.sub(r'`(.*?)`', r'<code>\1</code>', formatted)
            content_html += f"<p>{formatted}</p>\n"
            
    content_html = content_html.replace('</ul>\n<ul>', '')
    escaped_html = content_html.replace('`', '\\`').replace('$', '\\$')
    
    modules.append((title, escaped_html))

for i, (title, escaped_html) in enumerate(modules):
    course_data_str += f"""    {{
        id: 'mod{i+1}',
        title: '{title}',
        content: `{escaped_html}`
    }}"""
    if i < len(modules) - 1:
        course_data_str += ",\n"
    else:
        course_data_str += "\n"

course_data_str += "];\n\n"

# Standard JS rendering code with login display logic
logic_code = """
document.addEventListener('DOMContentLoaded', () => {
    // Render profile header if logged in
    const userLoggedIn = localStorage.getItem('auraUserLoggedIn') === 'true';
    const profileSection = document.getElementById('user-profile-section');
    if (userLoggedIn && profileSection) {
        const currentUserStr = localStorage.getItem('auraCurrentUser');
        let displayName = 'Developer';
        if (currentUserStr) {
            try {
                const currentUser = JSON.parse(currentUserStr);
                if (currentUser && currentUser.name) {
                    displayName = currentUser.name;
                }
            } catch (e) {
                console.error(e);
            }
        }
        profileSection.innerHTML = `
            <span class="user-welcome" style="margin-right: 12px; font-size: 13.5px; font-weight: 500; color: #64748b;">
                Welcome, <span style="font-weight: 600; color: #3b82f6;">${displayName}</span>!
            </span>
            <button class="btn btn-secondary" id="logout-btn" style="padding: 6px 12px; font-size: 12px; background: transparent; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer; color: #334155; font-family: inherit;">Log Out</button>
        `;
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to log out of your session?')) {
                    localStorage.removeItem('auraUserLoggedIn');
                    localStorage.removeItem('auraCurrentUser');
                    window.location.reload();
                }
            });
        }
    }

    // Build UI
    const navLinksList = document.getElementById('table-of-contents');
    const notesContainer = document.getElementById('notes-container');

    let navHtml = '';
    let contentHtml = '';

    courseData.forEach((ch, index) => {
        navHtml += `<li><a href="#${ch.id}" class="${index === 0 ? 'active' : ''}">${ch.title}</a></li>`;
        
        contentHtml += `
            <section class="course-section" id="${ch.id}">
                <h2>${ch.title}</h2>
                ${ch.content}
            </section>
        `;
    });

    navLinksList.innerHTML = navHtml;
    notesContainer.innerHTML = contentHtml;

    // Scroll Spy & Active Nav with Auto-Scroll Sidebar
    const sections = document.querySelectorAll('.course-section');
    const navItems = document.querySelectorAll('.nav-links a');
    let lastActive = '';

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        if (current !== lastActive) {
            lastActive = current;
            navItems.forEach(a => {
                a.classList.remove('active');
                if (current && a.getAttribute('href').includes(current)) {
                    a.classList.add('active');
                    a.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        }
    });

    // Mobile Sidebar Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    const sidebar = document.getElementById('sidebar');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }

    if (mobileClose) {
        mobileClose.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
});
"""

course_data_str += logic_code

with open(os.path.join(workspace, 'express-course.js'), 'w', encoding='utf-8') as f:
    f.write(course_data_str)

print("Express course pages created!")
print(f"Total modules parsed: {len(modules)}")
