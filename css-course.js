document.addEventListener('DOMContentLoaded', () => {
    
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
            <p>If you don't understand the Box Model, you will never master CSS. <strong>EVERYTHING in HTML is a rectangular box.</strong> Even if a button looks round, the browser still treats it as a rectangular box!</p>
            <h3>The 4 Layers of the Box:</h3>
            <ol>
                <li><strong>Content:</strong> The actual text or image (The fragile item).</li>
                <li><strong>Padding:</strong> Space INSIDE the border. <em>Analogy:</em> The bubble wrap inside the shipping box protecting the item.</li>
                <li><strong>Border:</strong> The actual edge of the box. <em>Analogy:</em> The cardboard itself.</li>
                <li><strong>Margin:</strong> Space OUTSIDE the border. <em>Analogy:</em> The physical distance between two shipping boxes on the floor.</li>
            </ol>
            <p><em>Pro Tip:</em> Always use <code>box-sizing: border-box;</code> so padding doesn't accidentally make your boxes wider than you wanted!</p>
        `
    },
    {
        id: 'ch3',
        title: 'Module 3: CSS Flexbox (The 1D Organizer)',
        content: `
            <p>Before Flexbox, centering a div was a nightmare. Now, it's incredibly easy.</p>
            <ul>
                <li><strong>Flexbox:</strong> <em>Analogy:</em> Imagine arranging books on a single, straight wooden shelf. You can push all the books to the left (<code>justify-content: flex-start</code>), spread them out evenly (<code>space-between</code>), or perfectly center them (<code>center</code>).</li>
                <li>Flexbox is one-dimensional: it organizes things in a single Row OR a single Column.</li>
            </ul>
            <pre><code>.container {
    display: flex;
    justify-content: center; /* Centers horizontally */
    align-items: center; /* Centers vertically */
}</code></pre>
        `
    },
    {
        id: 'ch4',
        title: 'Module 4: CSS Grid (The 2D Architect)',
        content: `
            <p>While Flexbox is like a single shelf, CSS Grid is a massive 2D checkerboard. It controls both Rows AND Columns at the exact same time.</p>
            <ul>
                <li><strong>Grid:</strong> <em>Analogy:</em> Imagine drawing a tic-tac-toe board on your screen. You can tell an image to sit exactly in the top-right square, and a paragraph to stretch across the entire bottom row.</li>
                <li>Use Flexbox for small components (like a navigation bar). Use Grid for massive page layouts (like a sidebar, header, and main content area).</li>
            </ul>
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
            <p>You want your website to look good on a massive 4K monitor, but also on a tiny iPhone screen. We use Media Queries to achieve this.</p>
            <ul>
                <li><strong>Media Queries:</strong> <em>Analogy:</em> A chameleon that changes its skin color depending on its environment. A Media Query asks the browser: "How wide are you?" and applies specific CSS rules based on the answer.</li>
            </ul>
            <pre><code>/* Normal rule */
.sidebar { width: 300px; }

/* Chameleon rule: If the screen is smaller than 768px */
@media (max-width: 768px) {
    .sidebar { width: 100%; } /* Make it full width on phones! */
}</code></pre>
        `
    }    ,
    {
        id: 'ch7',
        title: 'Module 7: CSS Positioning (The Map)',
        content: `
            <p>Sometimes you need an element to break the normal flow of the page and sit EXACTLY where you want it.</p>
            <ul>
                <li><strong>static:</strong> The default. Elements just stack naturally.</li>
                <li><strong>relative:</strong> Moves the element relative to where it <em>normally</em> would have been, without affecting anything else.</li>
                <li><strong>absolute:</strong> <em>Analogy:</em> A sticker. You peel the element off the page and stick it EXACTLY 10px from the top of its closest <code>relative</code> parent container.</li>
                <li><strong>fixed:</strong> <em>Analogy:</em> A bug on your screen. It stays locked to the screen even when you scroll (like a sticky navigation bar).</li>
                <li><strong>sticky:</strong> Starts as <code>relative</code>, but once you scroll past it, it "sticks" to the top like <code>fixed</code>.</li>
            </ul>
        `
    },
    {
        id: 'ch8',
        title: 'Module 8: CSS Variables (Custom Properties)',
        content: `
            <p>If your brand color is blue, and you use it in 50 different places, changing your brand color to red would mean rewriting 50 lines of code. CSS Variables fix this!</p>
            <pre><code>:root {
    --main-bg-color: coral;
}

body {
    background-color: var(--main-bg-color); /* Uses the variable! */
}</code></pre>
            <p>Now, if you want to change the color, you only change it in ONE place (<code>:root</code>) and the entire website updates instantly!</p>
        `
    },
    {
        id: 'ch9',
        title: 'Module 9: CSS Transitions & Animations',
        content: `
            <p>Static websites are boring. Adding micro-animations makes a website feel premium and alive.</p>
            <h3>Transitions (Smooth changes)</h3>
            <p>When you hover over a button, don't just instantly snap it to a new color. Make it smooth!</p>
            <pre><code>.btn {
    background-color: blue;
    transition: background-color 0.3s ease-in-out; /* Smooth transition! */
}
.btn:hover { background-color: darkblue; }</code></pre>
            
            <h3>Keyframes (Full Animations)</h3>
            <p>Use <code>@keyframes</code> to define a full movie-like sequence from 0% to 100%.</p>
        `
    },
    {
        id: 'ch10',
        title: 'Module 10: CSS Transforms (Moving in 3D Space)',
        content: `
            <p>Transforms let you visually manipulate an element without changing the layout of the page. It is heavily used alongside Animations.</p>
            <ul>
                <li><code>scale(1.1)</code>: Makes the element 10% bigger (perfect for hover effects).</li>
                <li><code>rotate(45deg)</code>: Spins the element 45 degrees.</li>
                <li><code>translateY(-10px)</code>: Nudges the element 10 pixels UP.</li>
            </ul>
        `
    },
    {
        id: 'ch11',
        title: 'Module 11: Pseudo-classes & Pseudo-elements',
        content: `
            <h3>Pseudo-classes (State)</h3>
            <p>Styles applied when an element is in a specific state. <code>:hover</code> (mouse over), <code>:focus</code> (clicking inside an input box), <code>:nth-child(even)</code> (styling every other row in a table).</p>
            
            <h3>Pseudo-elements (Fake HTML)</h3>
            <p>Allows you to inject fake CSS content into the HTML without actually writing HTML! <code>::before</code> and <code>::after</code> are heavily used for decorative icons and tooltips.</p>
        `
    },
    {
        id: 'ch12',
        title: 'Module 12: Z-Index and Stacking Contexts',
        content: `
            <p>When two elements overlap, which one goes on top? <strong>z-index</strong> controls the Z-axis (depth).</p>
            <ul>
                <li>Higher <code>z-index</code> goes on top. <code>z-index: 999;</code> will sit above <code>z-index: 1;</code>.</li>
                <li><strong>The Trap:</strong> <code>z-index</code> ONLY works if the element has <code>position: relative</code>, <code>absolute</code>, <code>fixed</code>, or <code>sticky</code>. It ignores <code>static</code> elements entirely!</li>
            </ul>
        `
    },
    {
        id: 'ch13',
        title: 'Module 13: Modern CSS (clamp(), min(), max())',
        content: `
            <p>Modern CSS has incredibly powerful math functions built right in!</p>
            <ul>
                <li><code>clamp(MIN, IDEAL, MAX)</code>: The ultimate tool for fluid typography. Make a font shrink on phones and grow on desktops perfectly smoothly without using Media Queries!</li>
                <li><code>aspect-ratio: 16 / 9;</code>: Perfect for forcing YouTube videos or images to stay in a widescreen box without distorting.</li>
            </ul>
        `
    },
    {
        id: 'ch14',
        title: 'Module 14: CSS Architecture (BEM Methodology)',
        content: `
            <p>When a project gets massive, naming your CSS classes becomes a nightmare. <strong>BEM (Block Element Modifier)</strong> is a strict naming convention to keep your code perfectly organized.</p>
            <pre><code>/* Block (The component) */
.card {}

/* Element (A piece of the component) */
.card__image {}
.card__title {}

/* Modifier (A variation of the component) */
.card--dark-mode {}</code></pre>
        `
    },
    {
        id: 'ch15',
        title: 'Module 15: CSS Interview Cheat Sheet',
        content: `
            <h3>Top 3 Interview Questions</h3>
            <ul>
                <li><strong>What is the Box Model?</strong> Content, Padding, Border, Margin. (And always mention <code>box-sizing: border-box</code>!).</li>
                <li><strong>Difference between display: none and visibility: hidden?</strong> <code>display: none</code> removes the element completely from the layout (like it doesn't exist). <code>visibility: hidden</code> makes it invisible, but it still takes up empty space on the page!</li>
                <li><strong>How do you perfectly center a div?</strong> <code>display: flex; justify-content: center; align-items: center;</code></li>
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

    // Scroll Spy & Active Nav
    const sections = document.querySelectorAll('.course-section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
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
