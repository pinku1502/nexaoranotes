import re

with open('dashboard.html', 'r', encoding='utf-8') as f:
    html = f.read()

# We need to find where to inject the main content block
# It broke right after:
# <span class="user-status"><i class="fa-solid fa-circle status-green"></i> Session Active</span>
#         </div>

# Let's find the closing tag for sidebar-footer
sidebar_end_idx = html.find('        </div>\n          </div>')
if sidebar_end_idx == -1:
    sidebar_end_idx = html.find('        </div>\n        <button class="logout-btn"')

# But wait, looking at the broken HTML, it actually looks like this:
"""
      <!-- Sidebar User Footer -->
      <div class="sidebar-footer">
        <div class="user-avatar">DV</div>
        <div class="user-info">
          <span class="user-name">Guest Developer</span>
          <span class="user-status"><i class="fa-solid fa-circle status-green"></i> Session Active</span>
        </div>
          </div>

        </div>

      </div>

      <!-- Admin Panel Grid -->
"""

# So the logout button is gone, the aside closing tag is gone.
# Let's find the exact string to replace.
search_str = '''      <!-- Sidebar User Footer -->
      <div class="sidebar-footer">
        <div class="user-avatar">DV</div>
        <div class="user-info">
          <span class="user-name">Guest Developer</span>
          <span class="user-status"><i class="fa-solid fa-circle status-green"></i> Session Active</span>
        </div>
          </div>

        </div>

      </div>

      <!-- Admin Panel Grid -->'''

replacement_str = '''      <!-- Sidebar User Footer -->
      <div class="sidebar-footer">
        <div class="user-avatar">DV</div>
        <div class="user-info">
          <span class="user-name">Guest Developer</span>
          <span class="user-status"><i class="fa-solid fa-circle status-green"></i> Session Active</span>
        </div>
        <button class="logout-btn" id="logout-btn" title="Sign Out">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </aside>

    <!-- MAIN DASHBOARD CONTENT -->
    <main class="dash-main">
      <header class="dash-header">
        <div class="header-left">
          <h1 id="active-lang-title">JavaScript Notes</h1>
          <span class="badge" id="active-lang-badge">Advanced</span>
        </div>
        <div class="header-actions">
          <button class="btn btn-primary" id="run-code-btn" style="display: none;"><i class="fa-solid fa-play"></i> Run Code</button>
        </div>
      </header>

      <!-- Main Panel Grid -->
      <div class="dash-grid" id="dash-grid-workspace">
        
        <div class="card-column">
          
          <div class="editor-header">
            <div class="editor-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            
            <div class="editor-tabs" style="display: none;">
              <button class="tab-btn active" id="tab-code-btn">
                <i class="fa-solid fa-code" style="margin-right: 6px;"></i> <span id="editor-tab-name">script.js</span>
              </button>
              <button class="tab-btn" id="tab-notes-btn">
                <i class="fa-regular fa-file-lines" style="margin-right: 6px;"></i> Notes
              </button>
            </div>

            <button class="btn btn-secondary btn-save-workspace" id="save-note-btn" title="Save Notes">
              <i class="fa-regular fa-floppy-disk"></i> Save Notes
            </button>
          </div>

          <div class="workspace-split" id="workspace-split">
            <!-- Left Panel: Notes Workspace -->
            <div class="code-panel" id="code-panel" style="width: 100%;">
              <div class="code-workspace">
                <textarea id="code-textarea" spellcheck="false" style="display: none;"></textarea>
                <textarea id="notes-textarea" placeholder="Write your custom notes here..." spellcheck="false" style="display: block; width: 100%;"></textarea>
              </div>
            </div>

            <!-- Right Panel: Terminal Output Simulator -->
            <div class="terminal-panel" id="terminal-panel" style="display: none;">
              <div class="terminal-container">
                <div class="terminal-header">
                  <span><i class="fa-solid fa-terminal" style="margin-right: 6px;"></i> Terminal Output</span>
                  <div style="display: flex; align-items: center;">
                    <button class="clear-terminal" id="clear-terminal" style="margin-right: 16px;"><i class="fa-solid fa-trash-can"></i> Clear</button>
                    <button class="close-terminal" id="close-terminal" style="background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 14px;"><i class="fa-solid fa-xmark"></i></button>
                  </div>
                </div>
                <div class="terminal-body" id="terminal-body">
                  <span class="terminal-prompt">nexoracode-sandbox ~ $</span> <span class="terminal-log-default">Click "Run Code" to compile snippet.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Admin Panel Grid -->'''

if search_str in html:
    html = html.replace(search_str, replacement_str)
    with open('dashboard.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Success")
else:
    print("Failed to find search_str. Printing search_str and some html context")
    print(repr(search_str))
    print(repr(html[html.find('<!-- Sidebar User Footer -->'):html.find('<!-- Admin Panel Grid -->')+25]))
