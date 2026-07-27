document.addEventListener('DOMContentLoaded', () => {
  // If already logged in, redirect to dashboard
  if (localStorage.getItem('auraUserLoggedIn') === 'true') {
    window.location.href = 'dashboard.html';
    return;
  }

  // Elements
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginView = document.getElementById('login-view');
  const signupView = document.getElementById('signup-view');
  
  const toSignupBtn = document.getElementById('to-signup');
  const toLoginBtn = document.getElementById('to-login');
  
  const loginMsg = document.getElementById('login-message');
  const signupMsg = document.getElementById('signup-message');

  // Load correct view based on URL param
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('signup') === 'true') {
    showSignup();
  } else {
    showLogin();
  }

  // Toggle View functions
  function showSignup() {
    loginView.style.display = 'none';
    signupView.style.display = 'block';
    if (loginMsg) loginMsg.style.display = 'none';
    history.pushState(null, '', '?signup=true');
  }

  function showLogin() {
    signupView.style.display = 'none';
    loginView.style.display = 'block';
    if (signupMsg) signupMsg.style.display = 'none';
    history.pushState(null, '', 'login.html');
  }

  if (toSignupBtn) toSignupBtn.addEventListener('click', (e) => { e.preventDefault(); showSignup(); });
  if (toLoginBtn) toLoginBtn.addEventListener('click', (e) => { e.preventDefault(); showLogin(); });

  // Removed getUsers and saveUsers functions as we now use backend API

  // Sign Up Submission Handler
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('signup-name').value.trim();
      const email = document.getElementById('signup-email').value.trim().toLowerCase();
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm-password').value;

      signupMsg.className = 'auth-message';
      signupMsg.style.display = 'none';

      // Validations
      if (!name || !email || !password || !confirmPassword) {
        showMsg(signupMsg, 'Please fill in all fields.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showMsg(signupMsg, 'Please enter a valid email address.', 'error');
        return;
      }

      if (password.length < 6) {
        showMsg(signupMsg, 'Password must be at least 6 characters long.', 'error');
        return;
      }

      if (password !== confirmPassword) {
        showMsg(signupMsg, 'Passwords do not match.', 'error');
        return;
      }

      fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
      })
      .then(res => res.json().then(data => ({ status: res.status, body: data })))
      .then(({ status, body }) => {
          if (status === 201) {
              showMsg(signupMsg, 'Registration successful! Redirecting...', 'success');
              localStorage.setItem('auraUserLoggedIn', 'true');
              localStorage.setItem('auraCurrentUser', JSON.stringify({ name: body.name, email: body.email }));
              setTimeout(() => {
                window.location.href = 'index.html';
              }, 1500);
          } else {
              showMsg(signupMsg, body.error || 'Registration failed.', 'error');
          }
      })
      .catch(err => showMsg(signupMsg, 'Network error. Is the server running?', 'error'));
    });
  }

  // Login Submission Handler
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('login-email').value.trim().toLowerCase();
      const password = document.getElementById('login-password').value;

      loginMsg.className = 'auth-message';
      loginMsg.style.display = 'none';

      if (!email || !password) {
        showMsg(loginMsg, 'Please enter email and password.', 'error');
        return;
      }

      fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
      })
      .then(res => res.json().then(data => ({ status: res.status, body: data })))
      .then(({ status, body }) => {
          if (status === 200) {
              showMsg(loginMsg, 'Login successful! Redirecting...', 'success');
              localStorage.setItem('auraUserLoggedIn', 'true');
              localStorage.setItem('auraCurrentUser', JSON.stringify({ name: body.user.name, email: body.user.email }));
              setTimeout(() => {
                window.location.href = 'index.html';
              }, 1200);
          } else {
              showMsg(loginMsg, body.error || 'Invalid credentials.', 'error');
          }
      })
      .catch(err => showMsg(loginMsg, 'Network error. Is the server running?', 'error'));
    });
  }

  // Show Message Helper
  function showMsg(element, text, type) {
    element.textContent = text;
    element.className = `auth-message ${type}`;
    element.style.display = 'block';
  }

  // Password visibility toggle helper
  const setupPasswordToggle = (toggleBtnId, passwordInputId) => {
    const toggleBtn = document.getElementById(toggleBtnId);
    const passwordInput = document.getElementById(passwordInputId);
    
    if (toggleBtn && passwordInput) {
      toggleBtn.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          toggleBtn.className = 'fa-regular fa-eye-slash toggle-password-btn';
        } else {
          passwordInput.type = 'password';
          toggleBtn.className = 'fa-regular fa-eye toggle-password-btn';
        }
      });
    }
  };

  setupPasswordToggle('toggle-login-password', 'login-password');
  setupPasswordToggle('toggle-signup-password', 'signup-password');
  setupPasswordToggle('toggle-signup-confirm-password', 'signup-confirm-password');

});

// Global Mock Google Login Function
window.mockGoogleLogin = () => {
  alert("Google OAuth is currently disabled. Please use email and password to register/login.");
};
