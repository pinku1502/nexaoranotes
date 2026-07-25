import os
import glob

workspace = r"E:\Projects\nexaoranotes"

html_files = glob.glob(os.path.join(workspace, "*.html"))

profile_html = """                <div class="nav-right" id="user-profile-section" style="display: flex; align-items: center;">
                    <!-- Will be dynamically populated by JS -->
                </div>
            </header>"""

js_logic = """document.addEventListener('DOMContentLoaded', () => {
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
"""

for html_path in html_files:
    filename = os.path.basename(html_path)
    if filename in ["index.html", "dashboard.html", "login.html"]:
        continue
        
    with open(html_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Check if top-nav exists and doesn't have user-profile-section
    if '<header class="top-nav">' in content and 'user-profile-section' not in content:
        # Insert user-profile-section before closing </header>
        new_content = content.replace("</header>", profile_html, 1)
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated HTML: {filename}")
        
        # Now find the corresponding JS file
        js_filename = filename.replace(".html", ".js")
        js_path = os.path.join(workspace, js_filename)
        if os.path.exists(js_path):
            with open(js_path, "r", encoding="utf-8") as js_f:
                js_content = js_f.read()
                
            if "user-profile-section" not in js_content:
                new_js_content = js_content.replace("document.addEventListener('DOMContentLoaded', () => {", js_logic, 1)
                with open(js_path, "w", encoding="utf-8") as js_f:
                    js_f.write(new_js_content)
                print(f"Updated JS: {js_filename}")
