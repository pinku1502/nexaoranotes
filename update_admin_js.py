with open('admin.js', 'r', encoding='utf-8') as f:
    content = f.read()

contacts_js = '''
// Render Contact Messages (API Integration)
function renderContacts() {
  const list = document.getElementById('contact-list');
  const empty = document.getElementById('contact-empty');
  if (!list) return;

  fetch('/api/contact')
    .then(res => res.json())
    .then(contacts => {
      if (contacts.length === 0) {
        list.style.display = 'none';
        empty.style.display = 'block';
        return;
      }

      list.style.display = 'flex';
      empty.style.display = 'none';
      list.innerHTML = '';

      contacts.forEach((msg) => {
        const date = new Date(msg.date).toLocaleString('en-IN', {
          day: '2-digit', month: 'short', year: 'numeric',
          hour: '2-digit', minute: '2-digit'
        });

        const card = document.createElement('div');
        card.style.cssText = `
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        `;
        card.innerHTML = `
          <div style="flex:1;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
              <div style="
                width:38px; height:38px; border-radius:50%;
                background: linear-gradient(135deg, #10b981, #3b82f6);
                display:flex; align-items:center; justify-content:center;
                font-weight:700; color:white; font-size:0.95rem; flex-shrink:0;
              ">${(msg.name || 'A')[0].toUpperCase()}</div>
              <div>
                <p style="color:#e2e8f0; font-weight:600; margin:0; font-size:0.95rem;">
                  ${msg.name}
                </p>
                <p style="color:#64748b; margin:0; font-size:0.8rem;">
                  <i class="fa-regular fa-envelope" style="margin-right:4px;"></i>${msg.email}
                </p>
              </div>
            </div>

            ${msg.subject ? `<p style="color:#e2e8f0; font-weight:600; margin:0 0 5px 0; font-size:0.95rem;">Subject: ${msg.subject}</p>` : ''}
            
            <p style="
              color:#cbd5e1; font-size:0.95rem; margin:0 0 10px 0;
              background: rgba(16,185,129,0.06);
              border-left: 3px solid #10b981;
              padding: 10px 14px;
              border-radius: 0 8px 8px 0;
              line-height: 1.5;
            ">
              ${msg.message}
            </p>

            <small style="color:#475569; font-size:0.78rem;">
              <i class="fa-regular fa-clock" style="margin-right:5px;"></i>${date}
            </small>
          </div>

          <button onclick="deleteContact(${msg.id})" title="Delete" style="
            background: rgba(220,53,69,0.1);
            color: #ff4d4d;
            border: 1px solid rgba(220,53,69,0.3);
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.85rem;
            white-space: nowrap;
            transition: all 0.2s;
            flex-shrink: 0;
          " onmouseover="this.style.background='#ff4d4d';this.style.color='white'" 
             onmouseout="this.style.background='rgba(220,53,69,0.1)';this.style.color='#ff4d4d'">
            <i class="fa-solid fa-trash"></i>
          </button>
        `;
        list.appendChild(card);
      });
    })
    .catch(err => console.error('Error loading contacts:', err));
}

window.deleteContact = (id) => {
  if(confirm('Are you sure you want to delete this contact message?')) {
      fetch(`/api/contact/${id}`, { method: 'DELETE' })
      .then(res => {
          if(res.ok) renderContacts();
          else alert('Failed to delete message');
      })
      .catch(err => console.error(err));
  }
};
'''

if 'renderContacts' not in content:
    content += '\n' + contacts_js
    content = content.replace('renderFeedbacks();', 'renderFeedbacks();\n  renderContacts();')
    with open('admin.js', 'w', encoding='utf-8') as f:
        f.write(content)
        print('Added Contacts logic to admin.js')
