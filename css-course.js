document.addEventListener('DOMContentLoaded', () => {
    // Render profile header if logged in
    const userLoggedIn = localStorage.getItem('auraUserLoggedIn') === 'true';
    const profileSection = document.getElementById('user-profile-section');
    if (userLoggedIn && profileSection) {
        const currentUserStr = localStorage.getItem('auraCurrentUser');
        let displayName = 'Developer';
        if (currentUserStr) {
            try {
                const currentUser = JSON.parse(currentUserStr);
                if (currentUser && currentUser.name) {
                    displayName = currentUser.name;
                }
            } catch (e) {
                console.error(e);
            }
        }
        profileSection.innerHTML = `
            <span class="user-welcome" style="margin-right: 12px; font-size: 13.5px; font-weight: 500; color: #64748b;">
                Welcome, <span style="font-weight: 600; color: #3b82f6;">${displayName}</span>!
            </span>
            <button class="btn btn-secondary" id="logout-btn" style="padding: 6px 12px; font-size: 12px; background: transparent; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer; color: #334155; font-family: inherit;">Log Out</button>
        `;
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to log out of your session?')) {
                    localStorage.removeItem('auraUserLoggedIn');
                    localStorage.removeItem('auraCurrentUser');
                    window.location.reload();
                }
            });
        }
    }

    
    const courseData = [
    {
        id: 'ch1',
        title: 'Module 1: Introduction to CSS (The Painter)',
        content: `
            <p>Welcome to CSS! If HTML is the naked skeleton of a website, CSS is the skin, hair, clothes, and makeup.</p>
            <h3>How CSS works</h3>
            <p>CSS stands for Cascading Style Sheets. It finds an HTML element (like a paragraph) and applies rules to it (like making it blue).</p>
            <ul>
                <li><strong>The Cascade:</strong> <em>Analogy:</em> If a boss tells you to wear a red shirt, and the CEO tells you to wear a blue shirt, you wear blue because the CEO has higher authority. CSS rules "cascade" down, and the most specific or latest rule wins!</li>
            </ul>
        `
    },
    {
        id: 'ch2',
        title: 'Module 2: The Box Model (Crucial Concept!)',
        content: `
            <p>If you don't understand the Box Model, you will <strong>never master CSS</strong>. Every single HTML element — paragraphs, images, buttons, divs — is treated by the browser as a rectangular box.</p>

            <div style="text-align:center; margin: 24px 0;">
              <img src="css-box-model.jpg" alt="CSS Box Model Diagram" style="max-width:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.1); border:1px solid #e2e8f0;" />
              <p style="font-size:0.82rem; color:#94a3b8; margin-top:8px;">📦 Visual representation of the CSS Box Model</p>
            </div>

            <h3>The 4 Layers of Every Box:</h3>
            <ol>
                <li><strong>Content:</strong> The actual text, image, or child element inside. Set its size with <code>width</code> and <code>height</code>. <em>Analogy: The fragile item inside a shipping box.</em></li>
                <li><strong>Padding:</strong> Space INSIDE the border, between the content and the border. <em>Analogy: The bubble wrap protecting the item.</em></li>
                <li><strong>Border:</strong> The actual visible edge/frame around the box. Can have thickness, style, and color. <em>Analogy: The cardboard box itself.</em></li>
                <li><strong>Margin:</strong> Space OUTSIDE the border, separating this box from other elements. <em>Analogy: The distance between two boxes placed on a table.</em></li>
            </ol>

            <h3>Code Example:</h3>
            <pre><code>.card {
  width: 300px;          /* Content width */
  height: 150px;         /* Content height */
  padding: 20px;         /* Space inside border */
  border: 2px solid #3b82f6;  /* The frame */
  margin: 30px auto;     /* Space outside, centered */
  background: white;
}</code></pre>

            <h3>🧨 The Width Trap (Very Common Bug!)</h3>
            <p>By default (<code>box-sizing: content-box</code>), if you set <code>width: 300px</code> and then add <code>padding: 20px</code>, the <strong>actual rendered width becomes 340px</strong> (300 + 20 + 20). This breaks layouts!</p>
            <p>✅ <strong>Fix it permanently:</strong> Always add this to the top of your CSS file:</p>
            <pre><code>* {
  box-sizing: border-box;
}</code></pre>
            <p>Now <code>width: 300px</code> means the box is <strong>exactly 300px</strong>, and padding is included inside that width — no surprises!</p>

            <h3>Shorthand Properties:</h3>
            <pre><code>/* Top | Right | Bottom | Left (clockwise) */
padding: 10px 20px 10px 20px;

/* Vertical | Horizontal */
padding: 10px 20px;

/* All sides equal */
padding: 15px;

/* Same rules apply to margin! */
margin: 20px auto; /* Top/Bottom: 20px, Left/Right: auto (centering trick!) */</code></pre>

            <h3>Border Styles:</h3>
            <pre><code>border: 2px solid red;      /* Solid line */
border: 3px dashed blue;   /* Dashed line */
border: 4px dotted green;  /* Dotted line */
border-radius: 8px;        /* Round the corners */
border-radius: 50%;        /* Perfect circle! */</code></pre>

            <h3>Outline vs Border:</h3>
            <ul>
                <li><code>border</code> — takes up space, affects layout</li>
                <li><code>outline</code> — does NOT take up space, drawn outside border (used for accessibility focus rings)</li>
            </ul>

            <p><em>💡 Pro Tip: Open DevTools (F12) → Elements tab → hover any element to see a colorful box model diagram live!</em></p>
        `
    },
    {
        id: 'ch3',
        title: 'Module 3: CSS Flexbox (The 1D Organizer)',
        content: `
            <p>Before Flexbox, centering a div was a nightmare. Now it's incredibly easy. Flexbox works in <strong>one direction</strong> — either a Row or a Column.</p>

            <div style="text-align:center; margin: 24px 0;">
              <img src="css-flexbox.jpg" alt="CSS Flexbox Diagram" style="max-width:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.1); border:1px solid #e2e8f0;" />
              <p style="font-size:0.82rem; color:#94a3b8; margin-top:8px;">📐 Flexbox — 1D layout system (Row & Column)</p>
            </div>

            <h3>Core Properties:</h3>
            <ul>
                <li><code>display: flex</code> — Turns the container into a flex container. All direct children become flex items.</li>
                <li><code>flex-direction: row</code> — Items go left→right (default). Use <code>column</code> for top→bottom.</li>
                <li><code>justify-content</code> — Controls alignment along the <strong>main axis</strong> (horizontal in row). Values: <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>.</li>
                <li><code>align-items</code> — Controls alignment along the <strong>cross axis</strong> (vertical in row). Values: <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>stretch</code>.</li>
                <li><code>flex-wrap: wrap</code> — Allows items to wrap onto next line instead of overflowing.</li>
                <li><code>gap: 16px</code> — Adds spacing between flex items (modern replacement for margin hacks).</li>
            </ul>

            <h3>The Holy Grail — Perfect Centering:</h3>
            <pre><code>.container {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;     /* Center vertically */
    height: 100vh;           /* Full screen height */
}</code></pre>

            <h3>Flex Item Properties:</h3>
            <pre><code>.item {
    flex: 1;       /* Grow to fill available space equally */
    flex-grow: 2;  /* Grow twice as much as siblings with flex: 1 */
    flex-shrink: 0; /* Never shrink, even if space is tight */
    align-self: flex-end; /* Override align-items just for this one item */
}</code></pre>

            <p><em>💡 Analogy: Flexbox is like arranging books on a single shelf. justify-content decides horizontal spacing, align-items decides how tall each book sits.</em></p>
        `
    },
    {
        id: 'ch4',
        title: 'Module 4: CSS Grid (The 2D Architect)',
        content: `
            <p>While Flexbox handles one direction, CSS Grid controls <strong>both rows AND columns simultaneously</strong>. It's the most powerful layout system in CSS.</p>

            <div style="text-align:center; margin: 24px 0;">
              <img src="css-grid.jpg" alt="CSS Grid Layout Diagram" style="max-width:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.1); border:1px solid #e2e8f0;" />
              <p style="font-size:0.82rem; color:#94a3b8; margin-top:8px;">🏗️ CSS Grid — 2D layout with rows and columns</p>
            </div>

            <h3>Core Properties:</h3>
            <pre><code>.container {
    display: grid;
    grid-template-columns: 200px 1fr 1fr; /* 3 columns: fixed | flexible | flexible */
    grid-template-rows: auto;              /* Rows size to content */
    gap: 20px;                             /* Space between cells */
}</code></pre>

            <h3>The fr Unit (Fractional):</h3>
            <p><code>fr</code> is the magic unit of Grid. It means "take up this fraction of the remaining space".</p>
            <pre><code>grid-template-columns: 1fr 2fr 1fr;
/* Column 2 is twice as wide as columns 1 and 3 */</code></pre>

            <h3>Spanning Cells:</h3>
            <pre><code>.header {
    grid-column: 1 / 4; /* Stretch from line 1 to line 4 (all 3 columns) */
}
.sidebar {
    grid-row: 2 / 4;    /* Stretch from row 2 to row 4 */
}</code></pre>

            <h3>Named Areas (Most Readable!):</h3>
            <pre><code>.container {
    display: grid;
    grid-template-areas:
        "header  header  header"
        "sidebar main    main"
        "footer  footer  footer";
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }</code></pre>

            <p><em>💡 Rule of thumb: Use <strong>Flexbox</strong> for nav bars, cards row, buttons. Use <strong>Grid</strong> for full page layouts.</em></p>
        `
    },
    {
        id: 'ch5',
        title: 'Module 5: Selectors & Specificity (The Point System)',
        content: `
            <p>When two CSS rules fight over the same element, who wins? The browser uses a mathematical point system called Specificity!</p>
            <ul>
                <li><strong>Tag Selector (e.g., <code>p {}</code>):</strong> Worth 1 Point. (Weakest)</li>
                <li><strong>Class Selector (e.g., <code>.btn {}</code>):</strong> Worth 10 Points. (Stronger)</li>
                <li><strong>ID Selector (e.g., <code>#header {}</code>):</strong> Worth 100 Points. (Very Strong)</li>
                <li><strong>Inline Style (e.g., <code>style="color: red;"</code>):</strong> Worth 1000 Points. (Boss Level)</li>
                <li><strong>!important:</strong> <em>Analogy:</em> A nuclear bomb. It destroys all rules and wins automatically. Use this ONLY as a last resort!</li>
            </ul>
        `
    },
    {
        id: 'ch6',
        title: 'Module 6: Responsive Design (Media Queries)',
        content: `
            <p>Your website must look great on all screens — from a 4K monitor to a tiny phone. <strong>Media Queries</strong> let you apply different CSS rules based on the screen size.</p>

            <div style="text-align:center; margin: 24px 0;">
              <img src="css-responsive.jpg" alt="Responsive Design Diagram" style="max-width:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.1); border:1px solid #e2e8f0;" />
              <p style="font-size:0.82rem; color:#94a3b8; margin-top:8px;">📱 Same website, different layouts for different screen sizes</p>
            </div>

            <h3>Common Breakpoints:</h3>
            <pre><code>/* Mobile first approach (recommended!) */
.container { width: 100%; }            /* Default: Mobile */

@media (min-width: 640px) { ... }      /* Small tablets */
@media (min-width: 768px) { ... }      /* Tablets */
@media (min-width: 1024px) { ... }     /* Laptops */
@media (min-width: 1280px) { ... }     /* Desktops */</code></pre>

            <h3>Real Example — Collapsing Sidebar:</h3>
            <pre><code>.layout {
    display: grid;
    grid-template-columns: 250px 1fr; /* Desktop: sidebar + content */
}

@media (max-width: 768px) {
    .layout {
        grid-template-columns: 1fr;   /* Mobile: full width, no sidebar */
    }
    .sidebar {
        display: none;                /* Hide sidebar on mobile */
    }
}</code></pre>

            <h3>Other Media Query Features:</h3>
            <pre><code>@media (prefers-color-scheme: dark) { ... }  /* Dark mode */
@media (orientation: landscape) { ... }       /* Phone rotated sideways */
@media print { ... }                          /* When user prints the page */</code></pre>

            <p><em>💡 Pro Tip: Always design <strong>Mobile First</strong> — start with the smallest screen, then add media queries to enhance for larger screens.</em></p>
        `
    }    ,
        {
        id: 'ch7',
        title: 'Module 7: CSS Positioning (The Architect)',
        content: `
            <p>Sometimes elements need to break out of normal document flow and sit exactly where you tell them. That's what <code>position</code> is for.</p>

            <div style="text-align:center; margin: 24px 0;">
              <img src="css-positioning.jpg" alt="CSS Positioning Diagram" style="max-width:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.1); border:1px solid #e2e8f0;" />
              <p style="font-size:0.82rem; color:#94a3b8; margin-top:8px;">📌 CSS Positioning — static, relative, absolute, fixed</p>
            </div>

            <h3>All 5 Position Values:</h3>
            <ul>
                <li><strong>static</strong> — Default. Elements stack naturally top-to-bottom. <code>top/left/right/bottom</code> have NO effect here.</li>
                <li><strong>relative</strong> — Element shifts from its original spot. The original space is still reserved. Other elements don't notice it moved.</li>
                <li><strong>absolute</strong> — Fully removed from flow. Positioned relative to its nearest <code>position: relative</code> ancestor. <em>Analogy: A sticky note placed anywhere on paper.</em></li>
                <li><strong>fixed</strong> — Removed from flow, positioned relative to the browser window. Stays visible even when scrolling. <em>Perfect for: chat buttons, sticky navbars.</em></li>
                <li><strong>sticky</strong> — Hybrid of relative + fixed. Scrolls normally until it hits its <code>top</code> value, then sticks. <em>Perfect for: table headers, sidebar navigation.</em></li>
            </ul>

            <h3>Code Example — Floating Badge:</h3>
            <pre><code>.card {
    position: relative; /* Makes card the anchor */
}

.badge {
    position: absolute;
    top: 10px;
    right: 10px;    /* Sticks to top-right corner of .card */
    background: red;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
}</code></pre>

            <h3>Sticky Nav Example:</h3>
            <pre><code>nav {
    position: sticky;
    top: 0;        /* Sticks when it reaches top of viewport */
    z-index: 100;  /* Stays above other content */
    background: white;
}</code></pre>
        `
    },
    {
        id: 'ch8',
        title: 'Module 8: CSS Variables (Custom Properties)',
        content: `
            <p>If your brand color is "Ocean Blue", and you type <code>color: #123456;</code> in 50 different places, changing your brand color to "Sunset Red" next year would mean manually finding and rewriting 50 lines of code!</p>
            <p><strong>CSS Variables fix this forever.</strong></p>
            <pre><code>:root {
    /* Define the variable ONCE at the top of the file */
    --brand-color: #123456; 
}

.button {
    /* Use the variable everywhere! */
    background-color: var(--brand-color);
}

.text-header {
    color: var(--brand-color);
}</code></pre>
            <p>Now, if the CEO wants to change the brand color to red, you only change the ONE line inside <code>:root</code>, and the entire website updates instantly!</p>
        `
    },
    {
        id: 'ch9',
        title: 'Module 9: CSS Transitions & Animations (Make it pop!)',
        content: `
            <p>Static websites feel dead. Adding micro-animations makes a website feel premium and alive to the user.</p>
            
            <h3>Transitions (Smooth State Changes)</h3>
            <p>When you hover over a button, don't just instantly snap it to a new color. Make it fade smoothly!</p>
            <pre><code>.btn {
    background-color: blue;
    /* Watch the background-color. If it changes, take 0.3 seconds to do it smoothly! */
    transition: background-color 0.3s ease-in-out; 
}

.btn:hover { 
    background-color: darkblue; 
}</code></pre>
            
            <h3>Keyframes (Full Animations)</h3>
            <p>Use <code>@keyframes</code> to define a full movie-like sequence. You literally direct what happens at 0% of the movie, 50%, and 100%.</p>
        `
    },
    {
        id: 'ch10',
        title: 'Module 10: CSS Transforms (Moving in 3D Space)',
        content: `
            <p>Transforms let you visually twist, stretch, and move an element without messing up the layout of the other items around it.</p>
            <ul>
                <li><code>transform: scale(1.1);</code> - Makes the element 10% bigger. (Extremely popular for hover effects on product cards!).</li>
                <li><code>transform: rotate(45deg);</code> - Spins the element 45 degrees like a steering wheel.</li>
                <li><code>transform: translateY(-10px);</code> - Nudges the element exactly 10 pixels UP. (Negative Y goes up in CSS).</li>
            </ul>
        `
    },
    {
        id: 'ch11',
        title: 'Module 11: Pseudo-classes & Pseudo-elements',
        content: `
            <h3>Pseudo-classes (States)</h3>
            <p>These apply styles ONLY when an element is in a specific state.</p>
            <ul>
                <li><code>:hover</code> - Only applies when the mouse is over it.</li>
                <li><code>:focus</code> - Only applies when the user clicks inside an input box to type.</li>
                <li><code>:nth-child(even)</code> - Great for styling every alternating row in a long table to make it readable.</li>
            </ul>
            
            <h3>Pseudo-elements (Fake HTML)</h3>
            <p>Allows you to magically inject fake elements onto the screen WITHOUT writing actual HTML in your <code>.html</code> file!</p>
            <p><code>::before</code> and <code>::after</code> are heavily used by advanced developers to create decorative icons, tooltips, and cool background shapes without cluttering the HTML.</p>
        `
    },
    {
        id: 'ch12',
        title: 'Module 12: Z-Index and Stacking Contexts',
        content: `
            <p>When two elements overlap each other, which one sits on top? <strong>z-index</strong> controls the Z-axis (depth).</p>
            <ul>
                <li>A higher <code>z-index</code> goes on top. <code>z-index: 999;</code> will easily sit above <code>z-index: 1;</code>.</li>
                <li><strong>The Trap (Why Z-Index fails):</strong> <code>z-index</code> ONLY works if the element has <code>position: relative</code>, <code>absolute</code>, <code>fixed</code>, or <code>sticky</code>. It completely ignores standard <code>static</code> elements! If your z-index isn't working, you probably forgot to add <code>position: relative;</code>.</li>
            </ul>
        `
    },
    {
        id: 'ch13',
        title: 'Module 13: Modern CSS Math (clamp, min, max)',
        content: `
            <p>Modern CSS has incredibly powerful math functions built right in, so you don't need Javascript to do math on the screen size!</p>
            <ul>
                <li><code>clamp(MIN, IDEAL, MAX)</code>: The ultimate tool for fluid typography. It tells the font size: <em>"Never get smaller than 1rem, try to stay at 2.5vw, but never get bigger than 3rem."</em> The text shrinks and grows perfectly smoothly without needing messy Media Queries!</li>
                <li><code>aspect-ratio: 16 / 9;</code>: Perfect for forcing YouTube videos or images to always stay in a widescreen box without warping or stretching ugly.</li>
            </ul>
        `
    },
    {
        id: 'ch14',
        title: 'Module 14: CSS Architecture (BEM Methodology)',
        content: `
            <p>When a project gets massive (thousands of lines of CSS), naming your classes becomes a nightmare. <strong>BEM (Block Element Modifier)</strong> is an industry-standard naming convention to keep your code perfectly organized.</p>
            <pre><code>/* Block (The main component) */
.card {}

/* Element (A piece inside the component, separated by __ ) */
.card__image {}
.card__title {}

/* Modifier (A variation of the component, separated by -- ) */
.card--dark-mode {}</code></pre>
            <p>If you see a class named <code>.nav__link--active</code>, you instantly know it's the active state of a link inside the nav component!</p>
        `
    },
    {
        id: 'ch15',
        title: 'Module 15: CSS Interview Cheat Sheet',
        content: `
            <h3>Top 3 Junior Interview Questions</h3>
            <ul>
                <li><strong>1. What is the Box Model?</strong> 
                <br>It dictates how large elements are. It consists of the Content (text), Padding (bubble wrap inside), Border (the box edge), and Margin (empty space outside). You should always mention <code>box-sizing: border-box</code> so padding doesn't accidentally stretch the box!</li>
                
                <li><strong>2. Difference between display: none and visibility: hidden?</strong> 
                <br><code>display: none</code> removes the element completely from the layout (like it doesn't exist). <code>visibility: hidden</code> turns it invisible, but it still takes up empty space on the page!</li>
                
                <li><strong>3. How do you perfectly center a div?</strong> 
                <br>The holy grail of CSS! Just use Flexbox on the parent container: <br><code>display: flex; justify-content: center; align-items: center;</code></li>
            </ul>
        `
    }
];
    // Build UI
    const navLinksList = document.getElementById('table-of-contents');
    const notesContainer = document.getElementById('notes-container');

    let navHtml = '';
    let contentHtml = '';

    courseData.forEach((ch, index) => {
        navHtml += `<li><a href="#${ch.id}" class="${index === 0 ? 'active' : ''}">${ch.title}</a></li>`;
        
        contentHtml += `
            <section class="course-section" id="${ch.id}">
                <h2>${ch.title}</h2>
                ${ch.content}
            </section>
        `;
    });

    navLinksList.innerHTML = navHtml;
    notesContainer.innerHTML = contentHtml;

        // Scroll Spy & Active Nav with Auto-Scroll Sidebar
    const sections = document.querySelectorAll('.course-section');
    const navItems = document.querySelectorAll('.nav-links a');
    let lastActive = '';

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        if (current !== lastActive) {
            lastActive = current;
            navItems.forEach(a => {
                a.classList.remove('active');
                if (current && a.getAttribute('href').includes(current)) {
                    a.classList.add('active');
                    // Automatically scroll the sidebar so the active item is always visible
                    a.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        }
    });


    // Mobile Sidebar Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    const sidebar = document.getElementById('sidebar');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }

    if (mobileClose) {
        mobileClose.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }
    
    // Close sidebar when clicking a link on mobile
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    // Download PDF (Print)
    const downloadBtn = document.getElementById('download-pdf-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            window.print();
        });
    }
});
