import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

tabs_html = '''    <div class="interview-tabs">
      <button class="interview-tab-btn active" data-target="javascript" onclick="filterInterviews('javascript')">JavaScript</button>
      <button class="interview-tab-btn" data-target="python" onclick="filterInterviews('python')">Python</button>
      <button class="interview-tab-btn" data-target="java" onclick="filterInterviews('java')">Java</button>
      <button class="interview-tab-btn" data-target="cpp" onclick="filterInterviews('cpp')">C++</button>
      <button class="interview-tab-btn" data-target="system-design" onclick="filterInterviews('system-design')">System Design</button>
    </div>
    <div class="interviews-grid" id="interviews-grid">'''

html = re.sub(r'<div class="interviews-grid" id="interviews-grid">', tabs_html, html)

# Add inline script for filtering at the end of the interviews section
script_html = '''
  <script>
    function filterInterviews(lang) {
      // Update active button
      document.querySelectorAll('.interview-tab-btn').forEach(btn => {
        if(btn.dataset.target === lang) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      // Filter cards
      document.querySelectorAll('.interview-card').forEach(card => {
        if (card.dataset.lang === lang) {
          card.style.display = 'flex'; // Assuming they use flex for internal layout, or block. Let's use empty to revert to stylesheet default.
          card.classList.remove('hidden');
        } else {
          card.style.display = 'none';
          card.classList.add('hidden');
        }
      });
    }
    // Initialize on load
    document.addEventListener('DOMContentLoaded', () => {
      filterInterviews('javascript');
    });
  </script>
  </section>'''

html = re.sub(r'</div>\s*</section>', '</div>' + script_html, html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 2. Update styles.css
with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

if '.interview-tabs' not in css:
    tabs_css = '''
/* Interview Tabs */
.interview-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.interview-tab-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-color);
  padding: 10px 24px;
  border-radius: 30px;
  cursor: pointer;
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.interview-tab-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.interview-tab-btn.active {
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(116, 123, 255, 0.3);
}

.interview-card.hidden {
  display: none !important;
}
'''
    css += tabs_css
    with open('styles.css', 'w', encoding='utf-8') as f:
        f.write(css)

print("Added tabs UI successfully.")
