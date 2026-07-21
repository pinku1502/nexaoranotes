document.addEventListener('DOMContentLoaded', () => {
  
  // Dynamic navigation actions based on auth session status
  const navActions = document.querySelector('.nav-actions');
  const userLoggedIn = localStorage.getItem('auraUserLoggedIn') === 'true';
  
  if (userLoggedIn && navActions) {
    const currentUserStr = localStorage.getItem('auraCurrentUser');
    let displayName = 'Developer';
    
    if (currentUserStr) {
      try {
        const currentUser = JSON.parse(currentUserStr);
        if (currentUser && currentUser.name) {
          displayName = currentUser.name;
        }
      } catch (e) {
        console.error("Error parsing current user data:", e);
      }
    }
    
    // Replace Log In / Create Account with Welcome message and Log Out button
    navActions.innerHTML = `
      <span class="user-welcome" style="margin-right: 12px; font-size: 13.5px; font-weight: 500; color: var(--text-gray);">
        Welcome, <span class="gradient-text" style="font-weight: 600;">${displayName}</span>!
      </span>
      <button class="btn btn-secondary" id="home-logout-btn" style="padding: 10px 16px; font-size: 13px;">Log Out</button>
    `;
    
    // Add logout action
    const homeLogoutBtn = document.getElementById('home-logout-btn');
    if (homeLogoutBtn) {
      homeLogoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to log out of your session?')) {
          localStorage.removeItem('auraUserLoggedIn');
          localStorage.removeItem('auraCurrentUser');
          window.location.reload();
        }
      });
    }
  }
  // ==========================================================================
  // 1. PAGE PRELOADER FADEOUT
  // ==========================================================================
  const loaderWrapper = document.getElementById('loader-wrapper');
  
  window.addEventListener('load', () => {
    if (loaderWrapper) {
      setTimeout(() => {
        loaderWrapper.style.opacity = '0';
        loaderWrapper.style.transform = 'scale(1.05)';
        setTimeout(() => {
          loaderWrapper.style.display = 'none';
        }, 500); // Wait for transition to complete
      }, 300); // Small delay for visual satisfaction
    }
  });

  // Fallback in case window load takes too long
  setTimeout(() => {
    if (loaderWrapper && loaderWrapper.style.display !== 'none') {
      loaderWrapper.style.opacity = '0';
      setTimeout(() => {
        loaderWrapper.style.display = 'none';
      }, 500);
    }
  }, 3000);

  // ==========================================================================
  // 2. MOUSE HOVER BACKGROUND PARTICLES (Canvas Engine)
  // ==========================================================================
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  let particles = [];
  const particleCount = 70;

  if (canvas && ctx) {
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.8 + 0.6; // Tiny glowing dots
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = -Math.random() * 0.25 - 0.05; // Soft upward drift
        this.alpha = Math.random() * 0.4 + 0.3;
        this.fadeSpeed = Math.random() * 0.005 + 0.001;
        this.colorType = Math.random() > 0.5 ? 'cyan' : 'blue';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }

        this.alpha -= this.fadeSpeed;
        if (this.alpha <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        const color = this.colorType === 'cyan' 
          ? `rgba(6, 182, 212, ${this.alpha})` 
          : `rgba(59, 130, 246, ${this.alpha})`;
        
        ctx.fillStyle = color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.colorType === 'cyan' ? '#06b6d4' : '#3b82f6';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawParticlesLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(drawParticlesLoop);
    };

    drawParticlesLoop();
  }

  // ==========================================================================
  // 3. MOBILE RESPONSIVE MENU
  // ==========================================================================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = navToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.querySelector('i').className = 'fa-solid fa-bars';
      });
    });
  }

  // ==========================================================================
  // 4. STICKY NAVBAR & SCROLL SPY
  // ==========================================================================
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // ==========================================================================
  // 5. ANIMATED STATISTICS COUNTER
  // ==========================================================================
  const statsSection = document.getElementById('stats');
  const statNumbers = document.querySelectorAll('.stat-number');
  let animationTriggered = false;

  const animateStats = () => {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10);
      const duration = 2000;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeProgress * target);

        stat.textContent = currentCount + (target >= 50 ? '+' : '');

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          stat.textContent = target + '+';
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  if (statsSection && statNumbers.length > 0) {
    const observerOptions = {
      root: null,
      threshold: 0.25
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animationTriggered) {
          animationTriggered = true;
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    statsObserver.observe(statsSection);
  }

  // ==========================================================================
  // 6. FAQ ACCORDION INTERACTION
  // ==========================================================================
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');

      // Close all other FAQ items first
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = '0';
          otherItem.querySelector('.faq-answer').style.paddingTop = '0';
          otherItem.querySelector('.faq-answer').style.paddingBottom = '0';
        }
      });

      // Toggle active class and expand/collapse answer
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = '0';
        answer.style.paddingTop = '0';
        answer.style.paddingBottom = '0';
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 40 + 'px'; // Add padding offset
        answer.style.paddingTop = '10px';
        answer.style.paddingBottom = '24px';
      }
    });
  });

  // ==========================================================================
  // 6b. INTERVIEW TABS FILTER
  // ==========================================================================
  const tabButtons = document.querySelectorAll('.interview-tabs .tab-btn');
  const interviewCards = document.querySelectorAll('.interviews-grid .interview-card');

  if (tabButtons.length > 0 && interviewCards.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Toggle active states on buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        interviewCards.forEach(card => {
          const cardLang = card.getAttribute('data-lang');
          if (filter === 'all' || cardLang === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // ==========================================================================
  // 7. MOCK AUTHENTICATION MODAL LOGIC
  // ==========================================================================
  const authModal = document.getElementById('auth-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const openLoginBtn = document.getElementById('open-login-btn');
  const openSignupBtn = document.getElementById('open-signup-btn');
  const ctaGetStartedBtn = document.getElementById('cta-get-started');
  
  const loginHeader = document.getElementById('login-header');
  const signupHeader = document.getElementById('signup-header');
  const nameGroup = document.getElementById('name-group');
  const authSubmitBtn = document.getElementById('auth-submit-btn');
  const toggleMessage = document.getElementById('toggle-message');
  const modalAlertBox = document.getElementById('modal-alert-box');
  const authForm = document.getElementById('auth-form');

  let isSignupMode = false;

  const showModal = (signupMode = false) => {
    isSignupMode = signupMode;
    modalAlertBox.style.display = 'none';
    authForm.reset();
    
    if (isSignupMode) {
      loginHeader.style.display = 'none';
      signupHeader.style.display = 'block';
      nameGroup.style.display = 'block';
      authSubmitBtn.textContent = 'Create Account';
      toggleMessage.innerHTML = 'Already have an account? <a href="#" id="auth-toggle-link">Log In</a>';
    } else {
      loginHeader.style.display = 'block';
      signupHeader.style.display = 'none';
      nameGroup.style.display = 'none';
      authSubmitBtn.textContent = 'Log In';
      toggleMessage.innerHTML = 'New to NexoraCode? <a href="#" id="auth-toggle-link">Create Account</a>';
    }
    
    const newToggleLink = document.getElementById('auth-toggle-link');
    newToggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      showModal(!isSignupMode);
    });

    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    authModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (openLoginBtn) openLoginBtn.addEventListener('click', () => showModal(false));
  if (openSignupBtn) openSignupBtn.addEventListener('click', () => showModal(true));
  
  if (ctaGetStartedBtn) {
    if (userLoggedIn) {
      ctaGetStartedBtn.innerHTML = 'Go to Dashboard <i class="fa-solid fa-arrow-right"></i>';
      ctaGetStartedBtn.addEventListener('click', () => {
        window.location.href = 'dashboard.html';
      });
    } else {
      ctaGetStartedBtn.addEventListener('click', () => showModal(true));
    }
  }
  
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) closeModal();
    });
  }

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('auth-email').value.trim().toLowerCase();
      const password = document.getElementById('auth-password').value;
      const name = isSignupMode ? document.getElementById('auth-name').value.trim() : '';

      modalAlertBox.textContent = '';
      modalAlertBox.style.display = 'none';

      // Load existing users registry
      const getUsers = () => {
        const users = localStorage.getItem('auraUsersRegistry');
        return users ? JSON.parse(users) : [];
      };

      const saveUsers = (users) => {
        localStorage.setItem('auraUsersRegistry', JSON.stringify(users));
      };

      const users = getUsers();

      if (isSignupMode) {
        if (!name) {
          showAlert('Please enter your developer name.', 'error');
          return;
        }
        if (password.length < 6) {
          showAlert('Password must be at least 6 characters long.', 'error');
          return;
        }

        const userExists = users.some(u => u.email === email);
        if (userExists) {
          showAlert('An account with this email already exists.', 'error');
          return;
        }

        // Register new user
        const newUser = { name, email, password };
        users.push(newUser);
        saveUsers(users);

        showAlert(`Welcome to NexoraCode, ${name}! Redirecting to sandbox...`, 'success');
        localStorage.setItem('auraUserLoggedIn', 'true');
        localStorage.setItem('auraCurrentUser', JSON.stringify({ name, email }));
      } else {
        // Authenticate login (Auto-register for demo purposes if not found)
        let user = users.find(u => u.email === email && u.password === password);
        if (!user) {
          user = { name: email.split('@')[0], email: email, password: password };
          users.push(user);
          saveUsers(users);
        }

        showAlert(`Session authorized! Opening compiler space...`, 'success');
        localStorage.setItem('auraUserLoggedIn', 'true');
        localStorage.setItem('auraCurrentUser', JSON.stringify({ name: user.name, email: user.email }));
      }

      setTimeout(() => {
        closeModal();
        window.location.reload();
      }, 1500);
    });
  }

  const showAlert = (message, type) => {
    modalAlertBox.textContent = message;
    modalAlertBox.style.display = 'block';
    if (type === 'success') {
      modalAlertBox.style.background = 'rgba(16, 185, 129, 0.1)';
      modalAlertBox.style.borderColor = 'rgba(16, 185, 129, 0.3)';
      modalAlertBox.style.color = '#34d399';
    } else {
      modalAlertBox.style.background = 'rgba(239, 68, 68, 0.1)';
      modalAlertBox.style.borderColor = 'rgba(239, 68, 68, 0.3)';
      modalAlertBox.style.color = '#f87171';
    }
  };

  // ==========================================================================
  // 8. FEEDBACK FORM SUBMIT
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('sub-email');
      const email = emailInput.value.trim();
      if (email) {
        // Save to localStorage
        const existingReviews = JSON.parse(localStorage.getItem('auraReviews') || '[]');
        existingReviews.push({
          text: email,
          date: new Date().toISOString()
        });
        localStorage.setItem('auraReviews', JSON.stringify(existingReviews));

        alert('Thank you for your feedback! We appreciate you taking the time to share your review: "' + email + '"');
        newsletterForm.reset();
      }
    });
  }

  // ==========================================================================
  // 9. DASHBOARD BUTTONS REDIRECT INTERCEPTOR
  // ==========================================================================
  // Clicking anywhere on a language card redirects to the dashboard
  document.querySelectorAll('.lang-card').forEach(card => {
    card.addEventListener('click', () => {
      const langNameEl = card.querySelector('.lang-name');
      if (langNameEl) {
        let langKey = langNameEl.textContent.toLowerCase().trim();
        // Map display names to dashboard database keys
        if (langKey === 'js') langKey = 'javascript';
        else if (langKey === 'ts') langKey = 'typescript';
        else if (langKey === 'c++') langKey = 'cpp';
        else if (langKey === 'react js' || langKey === 'react') langKey = 'react';
        else if (langKey === 'sql') langKey = 'sql';
        else if (langKey === 'nodejs') langKey = 'javascript';
        
        window.location.href = 'dashboard.html?lang=' + langKey;
      } else {
        window.location.href = 'dashboard.html';
      }
    });
  });

  // Other redirect buttons
  document.querySelectorAll('.challenge-card .btn, .note-card .btn-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = 'dashboard.html';
    });
  });

  // Password visibility toggle
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

  setupPasswordToggle('toggle-auth-password', 'auth-password');
  
});

  // ==========================================================================
  // 9. CAROUSEL CONTROLLERS
  // ==========================================================================
  const setupCarousel = (trackId, prevBtnId, nextBtnId) => {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    
    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    
    const updateCarousel = () => {
      const items = Array.from(track.children);
      if (items.length === 0) return;
      
      // Calculate how many items fit in the container
      const trackContainer = track.parentElement;
      const containerWidth = trackContainer.clientWidth;
      
      // Calculate item width including gap
      const itemStyles = window.getComputedStyle(items[0]);
      const itemWidth = items[0].getBoundingClientRect().width;
      const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
      
      const step = itemWidth + gap;
      const maxIndex = items.length - Math.floor(containerWidth / step);
      
      // Bound checking
      if (currentIndex > maxIndex) currentIndex = Math.max(0, maxIndex);
      if (currentIndex < 0) currentIndex = 0;
      
      track.style.transform = 'translateX(-' + (currentIndex * step) + 'px)';
      
      // Update button states
      prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
      prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
      
      nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
      nextBtn.style.cursor = currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
    };

    nextBtn.addEventListener('click', () => {
      const items = Array.from(track.children);
      const trackContainer = track.parentElement;
      const containerWidth = trackContainer.clientWidth;
      const itemWidth = items[0].getBoundingClientRect().width;
      const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
      const step = itemWidth + gap;
      const maxIndex = items.length - Math.floor(containerWidth / step);
      
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    window.addEventListener('resize', updateCarousel);
    
    // Initial setup (timeout to ensure CSS is applied and elements have dimensions)
    setTimeout(updateCarousel, 100);
  };

  setupCarousel('roadmap-track', 'roadmap-prev', 'roadmap-next');
  setupCarousel('faq-track', 'faq-prev', 'faq-next');
