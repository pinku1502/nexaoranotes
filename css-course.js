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
        title: 'Module 7: CSS Positioning (The Architect)',
        content: `
            <p>Sometimes you need an element to break out of the normal HTML flow and sit EXACTLY where you want it on the screen.</p>
            <ul>
                <li><strong>static:</strong> The default. Elements just stack naturally on top of each other like building blocks.</li>
                <li><strong>relative:</strong> Moves the element relative to where it <em>normally</em> would have been, without moving the blocks around it. (Like shifting slightly in your chair).</li>
                <li><strong>absolute:</strong> <em>Analogy:</em> A sticker. You peel the element off the page completely and stick it EXACTLY 10px from the top of its closest <code>relative</code> parent container. Everything else pretends the absolute element doesn't exist!</li>
                <li><strong>fixed:</strong> <em>Analogy:</em> A bug on your monitor screen. It stays locked to the screen even when you scroll the webpage up and down (perfect for a sticky navigation bar).</li>
                <li><strong>sticky:</strong> A magical hybrid. It starts out acting like <code>relative</code>, but the moment you scroll past it, it snaps to the top of the screen and acts like <code>fixed</code>!</li>
            </ul>
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
