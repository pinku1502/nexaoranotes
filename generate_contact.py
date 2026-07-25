with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract head
head_start = content.find('<head>')
head_end = content.find('</head>') + 7
head = content[head_start:head_end]

# Extract navbar
nav_start = content.find('<nav class="navbar"')
nav_end = content.find('</nav>') + 6
nav = content[nav_start:nav_end]
nav = nav.replace('href="#footer"', 'href="contact.html"')

# Extract footer
footer_start = content.find('<footer class="footer"')
footer_end = content.find('</footer>') + 9
footer = content[footer_start:footer_end]

contact_page = f'''<!DOCTYPE html>
<html lang="en">
{head}
<body>
  <!-- Background Particle Canvas & Blobs -->
  <canvas id="particles-canvas"></canvas>
  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>
  <div class="bg-blob blob-3"></div>

  {nav}

  <section class="hero" style="padding-top: 150px; text-align: center; min-height: 80vh;">
    <h1 class="hero-headline">Get in <span class="gradient-text">Touch</span></h1>
    <p class="hero-sub" style="margin-bottom: 40px;">Have a question or want to work together? Leave a message below.</p>
    
    <div style="display: flex; max-width: 900px; margin: 0 auto; gap: 40px; text-align: left; align-items: flex-start; flex-wrap: wrap;">
      <!-- Contact Form -->
      <div class="glass-card" style="flex: 1; padding: 40px; min-width: 300px;">
        <form id="contact-form">
          <div style="margin-bottom: 20px;">
            <label style="display:block; margin-bottom: 8px; color: var(--text-gray); font-weight: 500;">Name</label>
            <input type="text" id="contact-name" required style="width: 100%; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; color: var(--text-white);">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display:block; margin-bottom: 8px; color: var(--text-gray); font-weight: 500;">Email</label>
            <input type="email" id="contact-email" required style="width: 100%; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; color: var(--text-white);">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display:block; margin-bottom: 8px; color: var(--text-gray); font-weight: 500;">Subject</label>
            <input type="text" id="contact-subject" style="width: 100%; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; color: var(--text-white);">
          </div>
          <div style="margin-bottom: 30px;">
            <label style="display:block; margin-bottom: 8px; color: var(--text-gray); font-weight: 500;">Message</label>
            <textarea id="contact-message" rows="5" required style="width: 100%; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; color: var(--text-white); resize: vertical;"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">Send Message</button>
        </form>
        <div id="contact-status" style="margin-top: 15px; text-align: center; display: none; padding: 10px; border-radius: 8px;"></div>
      </div>
      
      <!-- Contact Info -->
      <div style="flex: 0.6; min-width: 300px;">
        <div class="glass-card" style="padding: 30px; margin-bottom: 20px;">
          <h3 style="color: var(--text-white); margin-bottom: 15px;"><i class="fa-solid fa-envelope" style="color: var(--accent-blue); margin-right: 10px;"></i> Email Us</h3>
          <p style="color: var(--text-gray);">hello@nexoracode.com</p>
        </div>
        <div class="glass-card" style="padding: 30px; margin-bottom: 20px;">
          <h3 style="color: var(--text-white); margin-bottom: 15px;"><i class="fa-solid fa-location-dot" style="color: var(--accent-purple); margin-right: 10px;"></i> Location</h3>
          <p style="color: var(--text-gray);">Remote / Worldwide</p>
        </div>
        <div class="glass-card" style="padding: 30px;">
          <h3 style="color: var(--text-white); margin-bottom: 15px;"><i class="fa-solid fa-hashtag" style="color: var(--accent-blue); margin-right: 10px;"></i> Socials</h3>
          <div class="social-icons" style="justify-content: flex-start;">
            <a href="#" class="social-link"><i class="fa-brands fa-github"></i></a>
            <a href="#" class="social-link"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="social-link"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {footer}
  
  <div class="modal-overlay" id="auth-modal">
    <!-- Required to prevent errors if app.js assumes it's there -->
  </div>
  <script src="app.js"></script>
  <script src="search.js"></script>
  <script>
    document.getElementById('contact-form').addEventListener('submit', (e) => {{
      e.preventDefault();
      
      const btn = e.target.querySelector('button');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      
      const payload = {{
        name: document.getElementById('contact-name').value.trim(),
        email: document.getElementById('contact-email').value.trim(),
        subject: document.getElementById('contact-subject').value.trim(),
        message: document.getElementById('contact-message').value.trim()
      }};

      const statusBox = document.getElementById('contact-status');

      fetch('/api/contact', {{
        method: 'POST',
        headers: {{ 'Content-Type': 'application/json' }},
        body: JSON.stringify(payload)
      }})
      .then(res => res.json().then(data => ({{ status: res.status, body: data }})))
      .then(({{ status, body }}) => {{
        statusBox.style.display = 'block';
        if (status === 201) {{
          statusBox.textContent = '✅ Message sent successfully!';
          statusBox.style.background = 'rgba(16, 185, 129, 0.1)';
          statusBox.style.color = '#34d399';
          e.target.reset();
        }} else {{
          statusBox.textContent = '❌ ' + (body.error || 'Failed to send message.');
          statusBox.style.background = 'rgba(239, 68, 68, 0.1)';
          statusBox.style.color = '#f87171';
        }}
        btn.textContent = originalText;
        setTimeout(() => {{ statusBox.style.display = 'none'; }}, 5000);
      }})
      .catch(err => {{
        statusBox.style.display = 'block';
        statusBox.textContent = '❌ Network error. Server might be down.';
        statusBox.style.background = 'rgba(239, 68, 68, 0.1)';
        statusBox.style.color = '#f87171';
        btn.textContent = originalText;
        setTimeout(() => {{ statusBox.style.display = 'none'; }}, 5000);
      }});
    }});
  </script>
</body>
</html>'''

with open('contact.html', 'w', encoding='utf-8') as f:
    f.write(contact_page)
    print('Created contact.html')
