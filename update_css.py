import re

new_css_data = """const courseData = [
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
    }
];"""

with open('css-course.js', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'const courseData = \[.*?\];'
match = re.search(pattern, content, re.DOTALL)

if match:
    new_content = content[:match.start()] + new_css_data + content[match.end():]
    with open('css-course.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Updated css-course.js')
else:
    print('Failed to find courseData in css-course.js')
