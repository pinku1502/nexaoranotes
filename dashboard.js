document.addEventListener('DOMContentLoaded', () => {
  
  // Verify user is logged in
  if (localStorage.getItem('auraUserLoggedIn') !== 'true') {
    window.location.href = 'login.html';
    return;
  }

  // Load and display current user details in the sidebar footer
  const currentUserStr = localStorage.getItem('auraCurrentUser');
  if (currentUserStr) {
    try {
      const currentUser = JSON.parse(currentUserStr);
      if (currentUser && currentUser.name) {
        // Update user name in sidebar
        const userNameEl = document.querySelector('.user-name');
        if (userNameEl) {
          userNameEl.textContent = currentUser.name;
        }
        
        // Generate initials for avatar
        const userAvatarEl = document.querySelector('.user-avatar');
        if (userAvatarEl) {
          const names = currentUser.name.split(' ');
          const initials = names.map(n => n.charAt(0)).join('').toUpperCase().slice(0, 2);
          userAvatarEl.textContent = initials || 'DV';
        }
      }
    } catch (e) {
      console.error("Error parsing current user data:", e);
    }
  }
  // ==========================================================================
  // 1. BACKGROUND PARTICLES CANVAS
  // ==========================================================================
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  let particles = [];
  const particleCount = 40; // Fewer particles for lighter dashboard load

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
        this.size = Math.random() * 1.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.1;
        this.vy = -Math.random() * 0.2 - 0.05;
        this.alpha = Math.random() * 0.4 + 0.3;
        this.fadeSpeed = Math.random() * 0.003 + 0.001;
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
        ctx.fill();
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
  // 2. CORE DATABASE OF LANGUAGES (Notes Templates & Simulated Compiles)
  // ==========================================================================
  const langData = {
    javascript: {
      title: "JavaScript Notes",
      badge: "Advanced",
      file: "app_server.js",
      note: `# 🚀 The Ultimate JavaScript Masterclass: Expanded Edition

> [!TIP]
> **Welcome to your Upgraded Notes!** I have completely rewritten these notes to explain everything *much more clearly* using real-world analogies. I've also added several **brand new advanced topics** (like Closures, The Event Loop, and Event Bubbling) that are absolute must-knows for senior interviews. 

---

## 🟢 PART 1: THE FOUNDATIONS

### Module 1: Introduction to JavaScript (The Brains of the Web)
Think of a webpage like a human body:
*   **HTML** is the skeleton (it gives structure).
*   **CSS** is the skin and clothes (it makes it look good).
*   **JavaScript** is the brain and muscles (it makes it move, think, and react).

JavaScript is what makes a website interactive. Without it, a webpage is just a static poster. With it, you can build full applications like Netflix, Twitter, or Google Docs.

> [!IMPORTANT]  
> **Strict Mode (\`"use strict";\`)**: Always put this at the very top of your JS files. It acts like a spell-checker for your code, preventing you from making silent, silly mistakes.

### Module 2: Variables & Data Types (Storing Information)
Variables are simply labeled boxes where you store information.
*   \`const\`: A box super-glued shut. Once you put something in, you **cannot** replace it. (Use this 90% of the time!).
*   \`let\`: A regular box. You can take things out and put new things in. (Use this for things that change, like a score counter).
*   \`var\`: The old, leaky box from 1995. **Never use this anymore.** It causes unpredictable bugs.

**Data Types** are the *types* of things you can put in the boxes:
*   **String**: Text (e.g., \`"Hello"\`)
*   **Number**: Math (e.g., \`42\`)
*   **Boolean**: True or False (e.g., \`isLoggedIn = true\`)
*   **Null**: An intentionally empty box.
*   **Undefined**: A box that was created but never filled.

### Module 3: Control Flow (Making Decisions)
Control flow is how your code makes decisions.
*   **If/Else**: Like a crossroads. "If the user is logged in, go left (show dashboard). Else, go right (show login page)."
*   **Loops (For/While)**: Like a robot. "Print this 100 times." It saves you from writing the same code 100 times.

---

## 🟡 PART 2: CORE BUILDING BLOCKS

### Module 4: Functions (Reusable Recipes)
A function is like a recipe for baking a cake. You write the recipe *once*, and then you can bake (call) it a hundred times!

\`\`\`javascript
// The Recipe (Declaration)
function bakeCake(flavor) {
    return "Here is a " + flavor + " cake!";
}

// Baking the cake (Calling)
console.log(bakeCake("Chocolate")); // Output: Here is a Chocolate cake!
\`\`\`
**Arrow Functions (\`=>\`)**: A modern, shorter way to write functions introduced in ES6. 
\`\`\`javascript
const bakeCake = (flavor) => "Here is a " + flavor + " cake!";
\`\`\`

### Module 5: Objects & Arrays (Organizing Data)
*   **Objects (\`{}\`):** Think of a real-world object. A \`Car\` has properties (color: red, wheels: 4) and methods (drive, brake).
*   **Arrays (\`[]\`):** Think of a bookshelf. It is a list of items kept in a very specific order (Item 0, Item 1, Item 2...).

> [!TIP]
> **The Holy Trinity of Arrays:** You must master these three array methods:
> 1. \`map()\`: Transforms every item in a list.
> 2. \`filter()\`: Keeps only the items that pass a test.
> 3. \`reduce()\`: Shrinks a massive list down to a single value (like calculating a total price).

### 🌟 NEW: Module 6: Scope and Hoisting
*   **Scope:** Where can a variable be seen?
    *   *Global Scope*: Shouting in a town square. Every part of your code can see it.
    *   *Local Scope*: Whispering in a closed room. Only the code inside that specific function can see it.
*   **Hoisting:** JavaScript has a weird habit of "lifting" variable declarations to the top of the file before running. This is why \`var\` is dangerous, and why \`let\` and \`const\` were invented to fix it!

### 🌟 NEW: Module 7: Closures (The Interview Favorite!)
A closure is a function that "remembers" the variables around it, even after the outer function has finished running.
*   *Analogy*: Imagine a function packing a backpack. When a function is created, it packs a backpack of all the variables it needs from its surroundings, and it carries that backpack forever!

\`\`\`javascript
function createCounter() {
    let count = 0; // The backpack variable
    return function() {
        count++; // It remembers count!
        console.log(count);
    }
}
const counter = createCounter();
counter(); // 1
counter(); // 2
\`\`\`

---

## 🟠 PART 3: THE BROWSER AND THE WEB

### Module 8: The DOM (Document Object Model)
The DOM is how JavaScript talks to HTML. JavaScript treats the entire HTML page as a massive family tree of objects. You can use JS to select an HTML element (like a button) and change its color, text, or hide it entirely.

### 🌟 NEW: Module 9: Event Bubbling & Delegation
*   **Event Bubbling:** If you have a Button inside a \`<div>\` inside the \`<body>\`, and you click the Button... you *also* clicked the \`<div>\` and the \`<body>\`! The click "bubbles" up to the top.
*   **Event Delegation:** Instead of putting 100 event listeners on 100 list items (which slows down the computer), you put **ONE** event listener on the parent \`<ul>\`. When a child is clicked, the bubble goes up to the parent, and the parent handles it. This is a massive performance boost!

### Module 10: Browser APIs (LocalStorage)
The browser gives JavaScript superpowers. \`localStorage\` allows you to save data (like Dark Mode preference) directly to the user's hard drive so that when they refresh the page, the data is still there!

---

## 🔴 PART 4: ADVANCED JAVASCRIPT

### Module 11: Asynchronous JavaScript (Promises & Async/Await)
*   *Analogy*: You are at a restaurant. You order food. You don't freeze in place and stare at the kitchen door until the food arrives! You sit down, talk to your friends, and drink water. When the food is ready, the waiter brings it to you.
*   That is Async JS! Fetching data from a database takes time. Async JS allows your website to keep running and stay interactive while it waits for the data to arrive in the background.

\`\`\`javascript
async function getUser() {
    // Wait for the data to arrive, but don't freeze the website!
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    console.log(data);
}
\`\`\`

### 🌟 NEW: Module 12: The Event Loop & Call Stack (Under the Hood)
JavaScript is **Single-Threaded**. This means it can literally only do one single thing at a time. So how does it handle multiple things at once (like a timer ticking while fetching data)?
*   **The Call Stack**: Where the current executing code goes.
*   **Web APIs**: The browser handles background tasks (timers, internet requests) outside of JavaScript.
*   **The Event Loop**: A traffic cop that constantly checks: "Is the Call Stack empty? If yes, take the finished background task and push it into the Call Stack!"

### Module 13: Error Handling (try...catch)
Prepare for the worst. If the internet goes down while fetching data, your app will crash. By wrapping risky code inside a \`try...catch\` block, you can catch the explosion and show the user a friendly "Please check your internet connection" message instead of a blank white screen.

---

## 🟣 PART 5: MASTERY

### Module 14: Object-Oriented JS (Classes)
Classes are blueprints for creating objects. If you are building a game, you don't write 100 enemies manually. You create one \`Enemy\` Class (blueprint), and then use it to instantly stamp out 100 enemies!

### Module 15: Modern ES6+ Features
*   **Destructuring**: A shortcut to extract values from objects instantly.
*   **Spread Operator (\`...\`)**: Easily copy arrays or objects without mutating the original data. 
*   **Optional Chaining (\`?.\`)**: Safely checking if nested data exists without crashing the app. (e.g., \`user?.profile?.avatar\`)
`,
      code: `// JS Code Sandbox Compiler
const user = { name: "Nexa Coder", score: 98 };
const getStatus = (u) => u.score > 90 ? "Premium Elite" : "Standard Dev";

console.log("-------------------------------");
console.log(\`Developer: \${user.name}\`);
console.log(\`Access Tier: \${getStatus(user)}\`);
console.log("-------------------------------");`,
      output: `-------------------------------
Developer: Nexa Coder
Access Tier: Premium Elite
-------------------------------`
    },
    java: {
      title: "Java Notes",
      badge: "Hard",
      file: "Main.java",
      note: `// Java JVM Backend Notes
- Java runs inside the JVM virtual environment, providing high compiler portability.
- The Garbage Collector (GC) tracks objects reference chains and cleans up unreferenced heaps automatically.
- Declare abstract interfaces or extends class inheritance signatures.`,
      code: `// Java simulation program
public class Main {
    public static void main(String[] args) {
        System.out.println("JVM Session Initialized.");
        System.out.println("Garbage Collector Status: Idle.");
    }
}`,
      output: `JVM Session Initialized.
Garbage Collector Status: Idle.`
    },
    cpp: {
      title: "C++ Notes",
      badge: "Hard",
      file: "main.cpp",
      note: `// C++ Memory Allocation Notes
- Pointers store raw virtual addresses and must be cleaned up using delete keyword.
- References act as const aliases to target variables, reducing pointer dereference errors.
- Declare virtual methods with virtual signatures to support late method binding tables.`,
      code: `// C++ compilation mockup
#include <iostream>

int main() {
    int points = 100;
    int& ref = points;
    std::cout << "C++ Pointer Reference Value: " << ref << std::endl;
    return 0;
}`,
      output: `C++ Pointer Reference Value: 100`
    },
    c: {
      title: "C Notes",
      badge: "Medium",
      file: "main.c",
      note: `// C Core Programming Notes
- Pointers store memory addresses directly. Always initialize pointers to NULL or a valid address.
- Memory management is manual: allocate heaps using malloc() or calloc(), and always clean up using free().
- Structs allow you to group related variables together under a single custom type.`,
      code: `// C Sandbox Compiler simulation
#include <stdio.h>

int main() {
    printf("-------------------------------\\n");
    printf("C compiler initialized.\\n");
    printf("Pointers and memory structures: OK\\n");
    printf("-------------------------------\\n");
    return 0;
}`,
      output: `-------------------------------
C compiler initialized.
Pointers and memory structures: OK
-------------------------------`
    },
    html: {
      title: "HTML Notes",
      badge: "Masterclass",
      file: "index.html",
      note: `<!-- HTML Structural Semantics -->
- Semantic layout tags (<main>, <section>, <article>) group elements and improve accessibility.
- Label tag connections, required markers, and form control links support screen readers.

<div style="margin-top: 20px; padding: 15px; background: rgba(59, 130, 246, 0.1); border-left: 4px solid var(--primary-color); border-radius: 4px;">
  <h4 style="color: white; margin-bottom: 10px;">🌟 The Ultimate HTML Course is Live!</h4>
  <p style="margin-bottom: 15px; font-size: 0.9rem;">We've created a comprehensive 19-chapter masterclass with downloadable PDF notes.</p>
  <a href="html-course.html" target="_blank" style="display: inline-block; padding: 8px 16px; background: var(--primary-color); color: white; border-radius: 4px; font-weight: 600; text-decoration: none;"><i class="fa-solid fa-book"></i> Open Full Course</a>
</div>`,
      code: `<!-- HTML Output Simulation -->
<div class="code-box">
    <h1>NexoraCode Student Workspace</h1>
    <p>HTML document nodes parsed successfully.</p>
</div>`,
      output: `Parsed HTML node tree:
[Node 1] <div> Container
[Node 2]   ├── <h1> Heading: NexoraCode Student Workspace
[Node 3]   └── <p> Paragraph: HTML document nodes parsed successfully.`
    },
    css: {
      title: "CSS Notes",
      badge: "Easy",
      file: "styles.css",
      note: `/* CSS Layout & Styling Design System */
- CSS Flexbox: Arranges child elements on single dimensional horizontal/vertical axes.
- CSS Grid: Builds flexible multi-dimensional columns and rows templates.
- Custom Properties (Variables): Declares responsive tokens globally using :root targets.`,
      code: `/* CSS Sandbox Simulation */
:root {
    --primary-color: #3b82f6;
}

.box {
    background-color: var(--primary-color);
    border-radius: 8px;
    display: flex;
}`,
      output: `Parsing styles.css stylesheet...
Parsed :root variables.
Parsed .box layout classes.
Layout rendering: Successful [0 warnings]`
    }
  };

  // ==========================================================================
  // 3. UI REGISTRY VARIABLES & LOADING VALUES
  // ==========================================================================
  let activeLang = 'javascript';
  const notesTextarea = document.getElementById('notes-textarea');
  const codeTextarea = document.getElementById('code-textarea');
  
  const activeLangTitle = document.getElementById('active-lang-title');
  const activeLangBadge = document.getElementById('active-lang-badge');
  const editorTabName = document.getElementById('editor-tab-name');
  
  const terminalBody = document.getElementById('terminal-body');
  const clearTerminalBtn = document.getElementById('clear-terminal');
  const closeTerminalBtn = document.getElementById('close-terminal');
  const terminalPanel = document.getElementById('terminal-panel');
  const runCodeBtn = document.getElementById('run-code-btn');
  const saveNoteBtn = document.getElementById('save-note-btn');
  const noteStatusSaved = document.getElementById('note-status-saved');
  const logoutBtn = document.getElementById('logout-btn');

  const dashGridWorkspace = document.getElementById('dash-grid-workspace');
  const dashGridAdmin = document.getElementById('dash-grid-admin');
  const adminReviewsList = document.getElementById('admin-reviews-list');

  // Load language workspace content
  
    const loadLanguageContent = (langKey) => {
      if (langKey === 'react') {
        window.location.href = 'react-course.html';
        return;
      }
      if (langKey === 'sql') {
        window.location.href = 'sql-course.html';
        return;
      }
      if (langKey === 'mysql') {
        window.location.href = 'mysql-course.html';
        return;
      }
      if (langKey === 'javascript') {
        window.location.href = 'javascript-masterclass.html';
        return;
      }
    if (langKey === 'html') {
      window.location.href = 'html-course.html';
      return;
    }
    if (langKey === 'css') {
      window.location.href = 'css-course.html';
      return;
    }
    if (langKey === 'c') {
      window.location.href = 'c-course.html';
      return;
    }
    if (langKey === 'cpp') {
      window.location.href = 'cpp-course.html';
      return;
    }
    
    activeLang = langKey;
    
    // Handle Admin Tab
    if (langKey === 'admin') {
      if (dashGridWorkspace) dashGridWorkspace.style.display = 'none';
      if (dashGridAdmin) dashGridAdmin.style.display = 'grid';
      
      const reviews = JSON.parse(localStorage.getItem('auraReviews') || '[]');
      if (reviews.length === 0) {
        adminReviewsList.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px 0;">No reviews yet.</div>`;
      } else {
        let html = '';
        reviews.forEach((r, idx) => {
          const dateStr = new Date(r.date).toLocaleString();
          html += `<div style="background: var(--surface-color); padding: 15px; border-radius: 8px; border: 1px solid var(--border-color);">
                     <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 5px;"><i class="fa-regular fa-clock"></i> ${dateStr}</div>
                     <div style="font-size: 1rem; color: var(--text-white);">${r.text}</div>
                   </div>`;
        });
        adminReviewsList.innerHTML = html;
      }
      return;
    }

    // Show workspace for normal languages
    if (dashGridWorkspace) dashGridWorkspace.style.display = 'grid';
    if (dashGridAdmin) dashGridAdmin.style.display = 'none';

    const data = langData[langKey];
    
    if (!data) return;

    // Load active settings text UI
    activeLangTitle.textContent = data.title;
    activeLangBadge.textContent = data.badge;
    
    // Icon match for active file tab
    let iconClass = 'fa-brands fa-js';
    let iconColor = '#f7df1e';

    if (langKey === 'typescript') {
        window.location.href = 'typescript-course.html';
        return;
      }
      if (langKey === 'python') { iconClass = 'fa-brands fa-python'; iconColor = '#3776ab'; }
    else if (langKey === 'react') { iconClass = 'fa-brands fa-react'; iconColor = '#61dafb'; }
    else if (langKey === 'react') {
        window.location.href = 'react-course.html';
        return;
      }
      if (langKey === 'sql') { iconClass = 'fa-solid fa-database'; iconColor = '#00758f'; }
    else if (langKey === 'typescript') {
        window.location.href = 'typescript-course.html';
        return;
      }
      if (langKey === 'python') {
        window.location.href = 'python-course.html';
        return;
      }
      if (langKey === 'java') { iconClass = 'fa-brands fa-java'; iconColor = '#ea2d2e'; }
    else if (langKey === 'cpp') { iconClass = 'fa-solid fa-copyright'; iconColor = '#00599c'; }
    else if (langKey === 'c') { iconClass = 'fa-solid fa-c'; iconColor = '#659ad2'; }
    else if (langKey === 'typescript') { iconClass = 'fa-solid fa-shield-halved'; iconColor = '#3178c6'; }
    else if (langKey === 'html') { iconClass = 'fa-brands fa-html5'; iconColor = '#e34f26'; }
    else if (langKey === 'css') { iconClass = 'fa-brands fa-css3-alt'; iconColor = '#1572b6'; }

    const editorTabName = document.getElementById('tab-code-btn');
    if (editorTabName) {
      editorTabName.innerHTML = `<i class="${iconClass}" style="color: ${iconColor}; margin-right: 6px;"></i> <span id="editor-tab-name">${data.file}</span>`;
    }

    // LocalStorage loading logic
    const savedNote = localStorage.getItem(`nexoracode_note_${langKey}`);
    const savedCode = localStorage.getItem(`nexoracode_code_${langKey}`);

    if (langKey === 'react') {
        window.location.href = 'react-course.html';
        return;
      }
      if (langKey === 'sql') {
        window.location.href = 'sql-course.html';
        return;
      }
      if (langKey === 'mysql') {
        window.location.href = 'mysql-course.html';
        return;
      }
      if (langKey === 'javascript') {
      notesTextarea.value = data.note;
    } else {
      notesTextarea.value = savedNote !== null ? savedNote : data.note;
    }
    codeTextarea.value = savedCode !== null ? savedCode : data.code;

    // Reset terminal display
    terminalBody.innerHTML = `<span class="terminal-prompt">nexoracode-sandbox ~ $</span> <span class="terminal-log-default">Click "Run Code" to compile snippet.</span>`;
  };

  // ==========================================================================
  // 4. SIDEBAR NAVIGATION CLICK HANDLING
  // ==========================================================================
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const langKey = item.getAttribute('data-lang');
      if (!langKey) return; // Prevent setting activeLang to null when clicking 'Saved Files'

      
              if (langKey === 'node' || langKey === 'nodejs' || langKey === 'node.js') {
        window.location.href = 'nodejs-course.html';
        return;
      }
// Redirect to the dedicated HTML, CSS, C, or C++ notes page if clicked
        if (langKey === 'react') {
        window.location.href = 'react-course.html';
        return;
      }
      if (langKey === 'sql') {
        window.location.href = 'sql-course.html';
        return;
      }
      if (langKey === 'mysql') {
        window.location.href = 'mysql-course.html';
        return;
      }
      if (langKey === 'javascript') {
          window.location.href = 'javascript-masterclass.html';
          return;
        }
      if (langKey === 'typescript') {
        window.location.href = 'typescript-course.html';
        return;
      }
      if (langKey === 'python') {
        window.location.href = 'python-course.html';
        return;
      }
      if (langKey === 'java') {
        window.location.href = 'java-course.html';
        return;
      }
      if (langKey === 'html') {
        window.location.href = 'html-course.html';
        return;
      }
      if (langKey === 'css') {
        window.location.href = 'css-course.html';
        return;
      }
      if (langKey === 'c') {
        window.location.href = 'c-course.html';
        return;
      }
      if (langKey === 'cpp') {
        window.location.href = 'cpp-course.html';
        return;
      }

      navItems.forEach(nav => {
        if (nav.getAttribute('data-lang')) {
          nav.classList.remove('active');
        }
      });
      item.classList.add('active');

      loadLanguageContent(langKey);
    });
  });

  // Initialize workspace - Check URL query parameter to load correct language on startup
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  
      else if (urlLang === 'nodejs' || urlLang === 'node.js') window.location.href = 'nodejs-course.html';
if (urlLang === 'typescript') window.location.href = 'typescript-course.html';
            else if (urlLang === 'react') window.location.href = 'react-course.html';
    else if (urlLang === 'sql') window.location.href = 'sql-course.html';
    else if (urlLang === 'mysql') window.location.href = 'mysql-course.html';

    else if (urlLang === 'python') window.location.href = 'python-course.html';
    else if (urlLang === 'java') window.location.href = 'java-course.html';
  else if (urlLang === 'html') window.location.href = 'html-course.html';
  else if (urlLang === 'css') window.location.href = 'css-course.html';
  else if (urlLang === 'c') window.location.href = 'c-course.html';
  else if (urlLang === 'cpp') window.location.href = 'cpp-course.html';
  else if (urlLang && langData[urlLang]) {
    loadLanguageContent(urlLang);
    // Highlight the active nav item in the sidebar
    navItems.forEach(nav => {
      nav.classList.remove('active');
      if (nav.getAttribute('data-lang') === urlLang) {
        nav.classList.add('active');
      }
    });
  } else {
    // Default to JavaScript
    loadLanguageContent('javascript');
  }

  // ==========================================================================
  // 5. LOCAL STORAGE SAVE LOGIC & TAB SWITCHING
  // ==========================================================================
  const tabCodeBtn = document.getElementById('tab-code-btn');
  const tabNotesBtn = document.getElementById('tab-notes-btn');

  if (tabCodeBtn && tabNotesBtn) {
    tabCodeBtn.addEventListener('click', () => {
      tabCodeBtn.classList.add('active');
      tabNotesBtn.classList.remove('active');
      codeTextarea.style.display = 'block';
      notesTextarea.style.display = 'none';
    });

    tabNotesBtn.addEventListener('click', () => {
      tabNotesBtn.classList.add('active');
      tabCodeBtn.classList.remove('active');
      notesTextarea.style.display = 'block';
      codeTextarea.style.display = 'none';
    });
  }

  if (saveNoteBtn) {
    saveNoteBtn.addEventListener('click', () => {
      const noteText = notesTextarea.value;
      const codeText = codeTextarea.value;

      localStorage.setItem(`nexoracode_note_${activeLang}`, noteText);
      localStorage.setItem(`nexoracode_code_${activeLang}`, codeText);

      // Save to Virtual File Manager
      let savedFiles = JSON.parse(localStorage.getItem('nexoracode_saved_files') || '[]');
      const data = langData[activeLang];
      const fileName = data ? data.file : 'workspace.txt';
      
      const existingIndex = savedFiles.findIndex(f => f.lang === activeLang);
      const fileData = {
        id: Date.now().toString(),
        lang: activeLang,
        name: fileName,
        code: codeText,
        notes: noteText,
        date: new Date().toLocaleString()
      };
      
      if (existingIndex >= 0) {
        savedFiles[existingIndex] = fileData;
      } else {
        savedFiles.push(fileData);
      }
      
      localStorage.setItem('nexoracode_saved_files', JSON.stringify(savedFiles));

      // Trigger Saved indicator animation on the button itself
      const originalHtml = saveNoteBtn.innerHTML;
      saveNoteBtn.innerHTML = '<i class="fa-solid fa-check"></i> Saved!';
      saveNoteBtn.style.background = 'var(--accent-green)';
      saveNoteBtn.style.color = 'white';
      
      setTimeout(() => {
        saveNoteBtn.innerHTML = originalHtml;
        saveNoteBtn.style.background = '';
        saveNoteBtn.style.color = '';
      }, 2000);
    });
  }

  // ==========================================================================
  // 6. TERMINAL RUN & CLEAR SANDBOX COMPILER
  // ==========================================================================
  if (runCodeBtn) {
    runCodeBtn.addEventListener('click', () => {
      const data = langData[activeLang];
      if (!data) return;

      if (terminalPanel) {
        terminalPanel.style.display = 'flex';
      }

      terminalBody.innerHTML = `<span class="terminal-prompt">nexoracode-sandbox ~ $</span> <span style="color: var(--text-gray);">compiling code module...</span>`;

      setTimeout(() => {
        if (activeLang === 'javascript' || activeLang === 'react') {
          // Real-time JavaScript code execution in browser
          const codeToRun = codeTextarea.value;
          let outputLogs = [];
          
          // Intercept console.log
          const originalLog = console.log;
          console.log = (...args) => {
            outputLogs.push(args.map(arg => {
              if (typeof arg === 'object') {
                try { return JSON.stringify(arg); } catch(e) { return arg; }
              }
              return arg;
            }).join(' '));
          };

          try {
            // Run the user's code using Function constructor
            const execFunction = new Function(codeToRun);
            execFunction();
            
            // Restore console.log
            console.log = originalLog;
            
            terminalBody.innerHTML = `
              <span class="terminal-prompt">nexoracode-sandbox ~ $</span> <span style="color: var(--success); font-size: 11px;">javascript execution successful</span><br>
              <span style="color: var(--text-white); font-weight: 500;">Output logs:</span><br>
              ${outputLogs.length > 0 ? outputLogs.join('<br>') : '<span style="color: var(--text-muted);">Program compiled successfully with no outputs.</span>'}
            `;
          } catch (err) {
            console.log = originalLog; // Restore console.log if error occurs
            terminalBody.innerHTML = `
              <span class="terminal-prompt">nexoracode-sandbox ~ $</span> <span style="color: var(--danger); font-size: 11px;">runtime compilation error</span><br>
              <span style="color: #f87171; font-weight: 600;">Error:</span><br>
              <span style="color: #f87171; font-family: var(--font-code); font-size: 13px;">${err.message}</span>
            `;
          }
        } else {
          // Simulated compiler logs for backend languages
          let friendlyLangName = activeLang.toUpperCase();
          if (activeLang === 'cpp') friendlyLangName = 'C++';
          else if (activeLang === 'java') friendlyLangName = 'Java';
          else if (activeLang === 'python') friendlyLangName = 'Python';
          else if (activeLang === 'sql') friendlyLangName = 'SQL Database';

          terminalBody.innerHTML = `
            <span class="terminal-prompt">nexoracode-sandbox ~ $</span> <span style="color: var(--text-muted); font-size: 11px;">simulated ${friendlyLangName} sandbox env</span><br>
            <span style="color: var(--text-white); font-weight: 500;">Output logs:</span><br>
            ${data.output.replace(/\n/g, '<br>')}
            <br><span style="color: var(--warning); font-size: 12px; margin-top: 8px; display: inline-block;">⚠️ Note: Executing ${friendlyLangName} directly in the browser requires a backend server. Showing default code logs.</span>
          `;
        }
      }, 550);
    });
  }

  if (clearTerminalBtn) {
    clearTerminalBtn.addEventListener('click', () => {
      terminalBody.innerHTML = `<span class="terminal-prompt">nexoracode-sandbox ~ $</span>`;
    });
  }

  if (closeTerminalBtn) {
    closeTerminalBtn.addEventListener('click', () => {
      if (terminalPanel) {
        terminalPanel.style.display = 'none';
      }
    });
  }

  // ==========================================================================
  // 7. NOTES SEARCH FILTERING
  // ==========================================================================
  const searchInput = document.getElementById('notes-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      
      navItems.forEach(item => {
        const text = item.querySelector('span').textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // ==========================================================================
  // 8. LOG OUT HANDLE
  // ==========================================================================
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to terminate this developer session?')) {
        localStorage.removeItem('auraUserLoggedIn');
        localStorage.removeItem('auraCurrentUser');
        window.location.href = 'index.html';
      }
    });
  }

  // ==========================================================================
  // 8. FILE MANAGER MODAL LOGIC
  // ==========================================================================
  const openFileManagerBtn = document.getElementById('open-file-manager');
  const fileManagerModal = document.getElementById('file-manager-modal');
  const closeFileManagerBtn = document.getElementById('close-file-manager');
  const savedFilesList = document.getElementById('saved-files-list');

  window.downloadFileToSystem = (fileName, escapedCode) => {
    // Re-decode for downloading (fixed newline escape character)
    const codeText = escapedCode.replace(/%27/g, "'").replace(/%22/g, '"').replace(/%0A/g, '\n');
    const blob = new Blob([codeText], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  };

  window.loadWorkspaceFromManager = (lang) => {
    if (fileManagerModal) fileManagerModal.style.display = 'none';
    loadLanguageContent(lang);
  };

  window.deleteWorkspaceFromManager = (id) => {
    let savedFiles = JSON.parse(localStorage.getItem('nexoracode_saved_files') || '[]');
    savedFiles = savedFiles.filter(f => f.id !== id);
    localStorage.setItem('nexoracode_saved_files', JSON.stringify(savedFiles));
    renderSavedFiles();
  };

  const renderSavedFiles = () => {
    if (!savedFilesList) return;
    const savedFiles = JSON.parse(localStorage.getItem('nexoracode_saved_files') || '[]');
    
    // Filter out corrupted files or gracefully handle them
    const validFiles = savedFiles.filter(f => f && f.lang);

    if (validFiles.length === 0) {
      savedFilesList.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px 0;">No saved files yet. Click 'Save Workspace' to save your code!</div>`;
      return;
    }

    let html = '';
    validFiles.forEach(file => {
      // URL encode to prevent syntax errors when passing to onclick (fixing newline regex)
      const encodedCode = (file.code || '').replace(/'/g, '%27').replace(/"/g, '%22').replace(/\n/g, '%0A');
      html += `
        <div class="file-card">
          <div class="file-info">
            <span class="file-name"><i class="fa-solid fa-file-code" style="color: var(--primary-color); margin-right: 8px;"></i> ${file.name}</span>
            <span class="file-meta"><i class="fa-regular fa-clock"></i> ${file.date} | ${file.lang.toUpperCase()}</span>
          </div>
          <div class="file-actions">
            <button class="btn-sm btn-outline-primary" onclick="loadWorkspaceFromManager('${file.lang}')" title="Load into Editor"><i class="fa-solid fa-arrow-up-right-from-square"></i> Load</button>
            <button class="btn-sm btn-outline-primary" onclick="downloadFileToSystem('${file.name}', '${encodedCode}')" title="Download to PC"><i class="fa-solid fa-download"></i></button>
            <button class="btn-sm btn-outline-danger" onclick="deleteWorkspaceFromManager('${file.id}')" title="Delete"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      `;
    });
    savedFilesList.innerHTML = html;
  };

  if (openFileManagerBtn && fileManagerModal) {
    openFileManagerBtn.addEventListener('click', () => {
      renderSavedFiles();
      fileManagerModal.style.display = 'flex';
    });
  }

  if (closeFileManagerBtn && fileManagerModal) {
    closeFileManagerBtn.addEventListener('click', () => {
      fileManagerModal.style.display = 'none';
    });
  }

});
