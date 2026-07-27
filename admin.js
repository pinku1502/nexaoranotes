
// ==========================================
// ADMIN AUTHENTICATION CHECK
// ==========================================
const adminToken = localStorage.getItem('auraAdminToken');
if (!adminToken) {
    window.location.href = 'admin-login.html';
}

const authHeaders = {
    'Authorization': 'Bearer ' + adminToken,
    'Content-Type': 'application/json'
};

document.addEventListener('DOMContentLoaded', () => {
  // Authentication Check
  if (localStorage.getItem('auraAdminLoggedIn') !== 'true') {
    alert('Access Denied. You must log in as an administrator.');
    window.location.href = 'login.html';
    return;
  }

  const usersTableBody = document.getElementById('users-table-body');
  const emptyState = document.getElementById('empty-state');
  const totalUsersCount = document.getElementById('total-users-count');

  // Fetch users from API
  function renderUsers(searchTerm = '') {
    usersTableBody.innerHTML = '';
    
    fetch('/api/users', { headers: authHeaders })
      .then(res => res.json())
      .then(users => {
        totalUsersCount.textContent = users.length; // Total users in system

        if (searchTerm) {
          users = users.filter(u => 
            (u.name && u.name.toLowerCase().includes(searchTerm)) || 
            (u.email && u.email.toLowerCase().includes(searchTerm))
          );
        }

        if (users.length === 0) {
          emptyState.style.display = 'block';
          document.querySelector('.admin-table').style.display = 'none';
          return;
        }

        emptyState.style.display = 'none';
        document.querySelector('.admin-table').style.display = 'table';

        users.forEach((user, index) => {
          const tr = document.createElement('tr');
          
          tr.innerHTML = `
            <td>#${user.id}</td>
            <td><strong>${user.name || 'N/A'}</strong></td>
            <td>${user.email || 'N/A'}</td>
            <td class="password-cell">
              <span class="password-hidden" id="pwd-${index}">••••••••</span>
              <button class="toggle-pwd-btn" onclick="togglePassword(${index}, '${user.password}')">
                <i class="fa-regular fa-eye" id="eye-${index}"></i>
              </button>
            </td>
            <td>
              <button class="delete-btn" onclick="deleteUser(${user.id}, '${user.email}')">
                <i class="fa-solid fa-trash"></i> Delete
              </button>
            </td>
          `;
          usersTableBody.appendChild(tr);
        });
      })
      .catch(err => console.error('Error fetching users:', err));
  }

  // Global functions for inline onclick handlers
  window.togglePassword = (index, actualPassword) => {
    const pwdSpan = document.getElementById(`pwd-${index}`);
    const eyeIcon = document.getElementById(`eye-${index}`);
    
    if (pwdSpan.textContent === '••••••••') {
      pwdSpan.textContent = actualPassword;
      pwdSpan.classList.remove('password-hidden');
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
    } else {
      pwdSpan.textContent = '••••••••';
      pwdSpan.classList.add('password-hidden');
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
    }
  };

  window.deleteUser = (id, email) => {
    if (confirm(`Are you sure you want to delete the user with email: ${email}?`)) {
      fetch(`/api/users/${id}`, { method: 'DELETE', headers: authHeaders })
      .then(res => {
          if (res.ok) {
            // If the deleted user is currently logged in, log them out
            const currentUser = JSON.parse(localStorage.getItem('auraCurrentUser') || '{}');
            if (currentUser.email === email) {
              localStorage.removeItem('auraUserLoggedIn');
              localStorage.removeItem('auraCurrentUser');
            }
            renderUsers(document.getElementById('admin-search-input').value.trim().toLowerCase());
          } else {
            alert('Failed to delete user');
          }
      })
      .catch(err => console.error(err));
    }
  };

  // Search input listener
  const searchInput = document.getElementById('admin-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.trim().toLowerCase();
      renderUsers(searchTerm);
    });
  }

  // Initial render
  renderUsers();
  renderFeedbacks();
  renderContacts();
});

// Render feedbacks from footer form (API Integration)
function renderFeedbacks() {
  const list = document.getElementById('feedback-list');
  const empty = document.getElementById('feedback-empty');
  if (!list) return;

  fetch('/api/feedback', { headers: authHeaders })
    .then(res => res.json())
    .then(feedbacks => {
      if (feedbacks.length === 0) {
        list.style.display = 'none';
        empty.style.display = 'block';
        return;
      }

      list.style.display = 'flex';
      empty.style.display = 'none';
      list.innerHTML = '';

      feedbacks.forEach((fb) => {
        const date = new Date(fb.date).toLocaleString('en-IN', {
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
            <!-- User Info Row -->
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
              <div style="
                width:38px; height:38px; border-radius:50%;
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                display:flex; align-items:center; justify-content:center;
                font-weight:700; color:white; font-size:0.95rem; flex-shrink:0;
              ">${(fb.user_name || 'A')[0].toUpperCase()}</div>
              <div>
                <p style="color:#e2e8f0; font-weight:600; margin:0; font-size:0.95rem;">
                  ${fb.user_name || 'Anonymous'}
                </p>
                <p style="color:#64748b; margin:0; font-size:0.8rem;">
                  <i class="fa-regular fa-envelope" style="margin-right:4px;"></i>${fb.user_email || 'Not logged in'}
                </p>
              </div>
            </div>

            <!-- Feedback Text -->
            <p style="
              color:#cbd5e1; font-size:0.95rem; margin:0 0 10px 0;
              background: rgba(59,130,246,0.06);
              border-left: 3px solid #3b82f6;
              padding: 10px 14px;
              border-radius: 0 8px 8px 0;
              line-height: 1.5;
            ">
              <i class="fa-solid fa-quote-left" style="color:#3b82f6; margin-right:8px; font-size:0.8rem;"></i>${fb.text}
            </p>

            <!-- Time -->
            <small style="color:#475569; font-size:0.78rem;">
              <i class="fa-regular fa-clock" style="margin-right:5px;"></i>${date}
            </small>
          </div>

          <button onclick="deleteFeedback(${fb.id})" title="Delete" style="
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
    .catch(err => console.error('Error loading feedbacks:', err));
}

window.deleteFeedback = (id) => {
  if(confirm('Are you sure you want to delete this feedback?')) {
      fetch(`/api/feedback/${id}`, { method: 'DELETE', headers: authHeaders })
      .then(res => {
          if(res.ok) {
              renderFeedbacks();
              renderContacts();
          } else {
              alert('Failed to delete feedback');
          }
      })
      .catch(err => console.error(err));
  }
};


// Render Contact Messages (API Integration)
function renderContacts() {
  const list = document.getElementById('contact-list');
  const empty = document.getElementById('contact-empty');
  if (!list) return;

  fetch('/api/contact', { headers: authHeaders })
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
                  ${msg.phone ? `<span style="margin-left: 10px;"><i class="fa-solid fa-phone" style="margin-right:4px;"></i>${msg.phone}</span>` : ''}
                </p>
              </div>
            </div>

            <div style="display: flex; gap: 10px; margin-bottom: 10px; flex-wrap: wrap;">
                ${msg.inquiry_type ? `<span style="background: rgba(59,130,246,0.1); color: #3b82f6; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">${msg.inquiry_type}</span>` : ''}
                ${msg.subject ? `<span style="color:#e2e8f0; font-weight:600; font-size:0.9rem; align-self: center;">${msg.subject}</span>` : ''}
            </div>
            
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
      fetch(`/api/contact/${id}`, { method: 'DELETE', headers: authHeaders })
      .then(res => {
          if(res.ok) renderContacts();
          else alert('Failed to delete message');
      })
      .catch(err => console.error(err));
  }
};

// ==========================================
// TAB SWITCHING LOGIC
// ==========================================
window.switchTab = function(tabId) {
    // Hide all sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Remove active class from all sidebar items
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById('section-' + tabId);
    if (targetSection) {
        targetSection.style.display = 'block';
        // Small delay to allow display block to apply before adding active class for animation
        setTimeout(() => targetSection.classList.add('active'), 10);
    }
    
    // Highlight target sidebar item
    const targetNav = document.getElementById('nav-' + tabId);
    if (targetNav) {
        targetNav.classList.add('active');
    }
};

