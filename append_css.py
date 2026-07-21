import re

css_addition = """    ,
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
];"""

with open('css-course.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace the closing bracket of courseData
pattern = r'    \}\s*\];'
match = re.search(pattern, js)

if match:
    new_js = js[:match.start()] + '    }' + css_addition + js[match.end():]
    with open('css-course.js', 'w', encoding='utf-8') as f:
        f.write(new_js)
    print('Added Modules 7-15 to CSS')
else:
    print('Failed to match end of courseData array')
