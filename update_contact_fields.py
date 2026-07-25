with open('contact.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the contact form fields section
form_start = content.find('<form id="contact-form">')
form_end = content.find('<div id="contact-status"')
form_old = content[form_start:form_end]

form_new = '''<form id="contact-form">
          <div style="display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 120px;">
              <label style="display:block; margin-bottom: 8px; color: var(--text-gray); font-weight: 500;">First Name</label>
              <input type="text" id="contact-fname" required style="width: 100%; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; color: var(--text-white);">
            </div>
            <div style="flex: 1; min-width: 120px;">
              <label style="display:block; margin-bottom: 8px; color: var(--text-gray); font-weight: 500;">Last Name</label>
              <input type="text" id="contact-lname" style="width: 100%; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; color: var(--text-white);">
            </div>
          </div>
          <div style="display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 120px;">
              <label style="display:block; margin-bottom: 8px; color: var(--text-gray); font-weight: 500;">Email Address</label>
              <input type="email" id="contact-email" required style="width: 100%; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; color: var(--text-white);">
            </div>
            <div style="flex: 1; min-width: 120px;">
              <label style="display:block; margin-bottom: 8px; color: var(--text-gray); font-weight: 500;">Phone Number</label>
              <input type="tel" id="contact-phone" style="width: 100%; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; color: var(--text-white);">
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display:block; margin-bottom: 8px; color: var(--text-gray); font-weight: 500;">Inquiry Type</label>
            <select id="contact-inquiry" required style="width: 100%; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; color: var(--text-white); appearance: none;">
              <option value="" disabled selected style="color: black;">Select an option...</option>
              <option value="Course Support" style="color: black;">Course Support</option>
              <option value="Technical Issue" style="color: black;">Technical Issue</option>
              <option value="Business Partnership" style="color: black;">Business Partnership</option>
              <option value="General Inquiry" style="color: black;">General Inquiry</option>
            </select>
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
        '''

content = content.replace(form_old, form_new)

# Update contact info blocks
info_old = '''<div class="glass-card" style="padding: 30px; margin-bottom: 20px;">
          <h3 style="color: var(--text-white); margin-bottom: 15px;"><i class="fa-solid fa-envelope" style="color: var(--accent-blue); margin-right: 10px;"></i> Email Us</h3>
          <p style="color: var(--text-gray);">hello@nexoracode.com</p>
        </div>
        <div class="glass-card" style="padding: 30px; margin-bottom: 20px;">
          <h3 style="color: var(--text-white); margin-bottom: 15px;"><i class="fa-solid fa-location-dot" style="color: var(--accent-purple); margin-right: 10px;"></i> Location</h3>
          <p style="color: var(--text-gray);">Remote / Worldwide</p>
        </div>'''

info_new = '''<div class="glass-card" style="padding: 30px; margin-bottom: 20px;">
          <h3 style="color: var(--text-white); margin-bottom: 15px;"><i class="fa-solid fa-envelope" style="color: var(--accent-blue); margin-right: 10px;"></i> Contact Info</h3>
          <p style="color: var(--text-gray); margin-bottom: 10px;"><strong>Email:</strong> support@nexoracode.com</p>
          <p style="color: var(--text-gray);"><strong>Phone:</strong> +91 98765 43210</p>
        </div>
        <div class="glass-card" style="padding: 30px; margin-bottom: 20px;">
          <h3 style="color: var(--text-white); margin-bottom: 15px;"><i class="fa-solid fa-location-dot" style="color: var(--accent-purple); margin-right: 10px;"></i> Corporate Office</h3>
          <p style="color: var(--text-gray); line-height: 1.6;">NexoraCode Tech Hub<br>Cyber City, Sector 24<br>Gurugram, Haryana, India<br>122002</p>
        </div>'''

content = content.replace(info_old, info_new)

# Update payload parsing
js_old = '''const payload = {
        name: document.getElementById('contact-name').value.trim(),
        email: document.getElementById('contact-email').value.trim(),
        subject: document.getElementById('contact-subject').value.trim(),
        message: document.getElementById('contact-message').value.trim()
      };'''
      
js_new = '''const fname = document.getElementById('contact-fname').value.trim();
      const lname = document.getElementById('contact-lname').value.trim();
      
      const payload = {
        name: fname + (lname ? ' ' + lname : ''),
        email: document.getElementById('contact-email').value.trim(),
        phone: document.getElementById('contact-phone').value.trim(),
        inquiry_type: document.getElementById('contact-inquiry').value,
        subject: document.getElementById('contact-subject').value.trim(),
        message: document.getElementById('contact-message').value.trim()
      };'''

content = content.replace(js_old, js_new)

with open('contact.html', 'w', encoding='utf-8') as f:
    f.write(content)
    print('Updated contact.html fields')
