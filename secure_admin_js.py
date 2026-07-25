with open('admin.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add auth check at the very top
auth_check = '''
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

'''

content = auth_check + content

# 2. Update fetch calls to include headers
content = content.replace("fetch('/api/users')", "fetch('/api/users', { headers: authHeaders })")
content = content.replace("fetch(`/api/users/${id}`, { method: 'DELETE' })", "fetch(`/api/users/${id}`, { method: 'DELETE', headers: authHeaders })")

content = content.replace("fetch('/api/feedback')", "fetch('/api/feedback', { headers: authHeaders })")
content = content.replace("fetch(`/api/feedback/${id}`, { method: 'DELETE' })", "fetch(`/api/feedback/${id}`, { method: 'DELETE', headers: authHeaders })")

content = content.replace("fetch('/api/contact')", "fetch('/api/contact', { headers: authHeaders })")
content = content.replace("fetch(`/api/contact/${id}`, { method: 'DELETE' })", "fetch(`/api/contact/${id}`, { method: 'DELETE', headers: authHeaders })")

with open('admin.js', 'w', encoding='utf-8') as f:
    f.write(content)
    print('Updated admin.js with security checks')
