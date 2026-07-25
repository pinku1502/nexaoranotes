with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract head
head_start = content.find('<head>')
head_end = content.find('</head>') + 7
head = content[head_start:head_end]

admin_login_page = f'''<!DOCTYPE html>
<html lang="en">
{head}
<body style="display: flex; align-items: center; justify-content: center; min-height: 100vh; background: var(--bg-dark); margin: 0;">
  <!-- Background Particle Canvas & Blobs -->
  <canvas id="particles-canvas"></canvas>
  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>

  <div class="glass-card" style="width: 100%; max-width: 400px; padding: 40px; text-align: center; position: relative; z-index: 10;">
    <div style="margin-bottom: 30px;">
      <i class="fa-solid fa-shield-halved gradient-text" style="font-size: 3rem; margin-bottom: 15px;"></i>
      <h2 style="color: var(--text-white); margin-bottom: 5px;">Admin Portal</h2>
      <p style="color: var(--text-gray); font-size: 0.9rem;">Restricted access.</p>
    </div>

    <form id="admin-login-form" style="text-align: left;">
      <div style="margin-bottom: 20px;">
        <label style="display:block; margin-bottom: 8px; color: var(--text-gray); font-weight: 500;">Admin Email</label>
        <input type="email" id="admin-email" required style="width: 100%; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; color: var(--text-white);">
      </div>
      <div style="margin-bottom: 30px;">
        <label style="display:block; margin-bottom: 8px; color: var(--text-gray); font-weight: 500;">Password</label>
        <input type="password" id="admin-password" required style="width: 100%; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; color: var(--text-white);">
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">Authenticate</button>
    </form>
    
    <div id="admin-error" style="display: none; color: #f87171; background: rgba(239, 68, 68, 0.1); padding: 10px; border-radius: 8px; margin-top: 15px; font-size: 0.9rem;"></div>
    <a href="index.html" style="display: inline-block; margin-top: 25px; color: var(--text-gray); text-decoration: none; font-size: 0.9rem;"><i class="fa-solid fa-arrow-left"></i> Back to Public Site</a>
  </div>

  <script>
    document.getElementById('admin-login-form').addEventListener('submit', (e) => {{
      e.preventDefault();
      
      const email = document.getElementById('admin-email').value.trim();
      const password = document.getElementById('admin-password').value;
      const errorBox = document.getElementById('admin-error');
      const btn = e.target.querySelector('button');
      
      btn.textContent = 'Authenticating...';
      
      fetch('/api/admin/login', {{
        method: 'POST',
        headers: {{ 'Content-Type': 'application/json' }},
        body: JSON.stringify({{ email, password }})
      }})
      .then(res => res.json().then(data => ({{ status: res.status, body: data }})))
      .then(({{ status, body }}) => {{
        if (status === 200 && body.token) {{
          localStorage.setItem('auraAdminToken', body.token);
          window.location.href = 'admin.html';
        }} else {{
          errorBox.style.display = 'block';
          errorBox.textContent = body.error || 'Authentication failed';
          btn.textContent = 'Authenticate';
        }}
      }})
      .catch(err => {{
        errorBox.style.display = 'block';
        errorBox.textContent = 'Network error. Please check server.';
        btn.textContent = 'Authenticate';
      }});
    }});
  </script>
</body>
</html>'''

with open('admin-login.html', 'w', encoding='utf-8') as f:
    f.write(admin_login_page)
    print('Created admin-login.html')
