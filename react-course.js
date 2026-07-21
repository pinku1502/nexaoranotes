document.addEventListener('DOMContentLoaded', () => {
    const courseData = [
        {
            id: 'ch1',
            title: 'Module 1: Introduction to React (The UI Engine)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch2',
            title: '1. What is React?',
            content: `\n<p>Imagine building a car from scratch every time you need to drive. That's traditional HTML/JS. React is like buying a box of pre-built Legos. You build a "Wheel" component once, and you can reuse it 4 times on the car.<br><strong>React</strong> is a declarative JavaScript library for building highly interactive User Interfaces (UI) using reusable components.</p>

<p>#</p>\n`
        },
        {
            id: 'ch3',
            title: '2. React vs Angular vs Vue',
            content: `\n<p><em>   <strong>React:</strong> A </em>Library* (like a toolbox). You choose exactly which tools to bring. Highly flexible.<br><em>   <strong>Angular:</strong> A </em>Framework* (like a fully furnished kitchen). It forces you to cook its way.<br><li><strong>Vue:</strong> A middle ground. Easier to learn than Angular, more structured than React.</li></p>

<p>#</p>\n`
        },
        {
            id: 'ch4',
            title: '3. The Virtual DOM (Why React is so fast!)',
            content: `\n<p>Normally, if you change a tiny piece of text on a web page, the browser repaints the ENTIRE page (The Real DOM). This is incredibly slow.<br>React uses a <strong>Virtual DOM</strong> (a lightweight copy of the real page). When a change happens, React compares the Virtual DOM to the Real DOM, calculates the exact mathematical difference, and ONLY updates that one tiny piece of text.</p>

<p>#</p>\n`
        },
        {
            id: 'ch5',
            title: '4. Creating a React Project (Vite)',
            content: `\n<p>Create React App (CRA) is dead. Vite is the modern, hyper-fast way to build React apps.<br>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>---</p>\n`
        },
        {
            id: 'ch6',
            title: '📘 Module 2: React Fundamentals (The Building Blocks)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch7',
            title: '1. Components',
            content: `\n<p>A component is just a regular JavaScript function that returns HTML (specifically, JSX).<br>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>#</p>\n`
        },
        {
            id: 'ch8',
            title: '2. JSX (JavaScript XML)',
            content: `\n<p>JSX allows you to write HTML directly inside JavaScript. Under the hood, React converts it into complex <code>document.createElement()</code> logic so you don't have to!<br><em>Rule:</em> JSX must always return <strong>ONE single parent element</strong>. If you have two adjacent <code><div></code>s, wrap them in a Fragment <code><> ... </></code>.</p>

<p>#</p>\n`
        },
        {
            id: 'ch9',
            title: '3. Props (Passing Data)',
            content: `\n<p>Props are how components talk to each other. They act like function arguments.<br>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>#</p>\n`
        },
        {
            id: 'ch10',
            title: '4. Conditional Rendering & Lists',
            content: `\n<p>You can use standard JavaScript <code>.map()</code> to loop through data and render UI elements dynamically.<br>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>---</p>\n`
        },
        {
            id: 'ch11',
            title: '⚡ Module 3: State Management (The Memory)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch12',
            title: '1. What is State?',
            content: `\n<p>Props are "Read-Only" data passed down from a parent. <strong>State</strong> is a component's personal, internal memory. When State changes, React automatically re-renders the component to show the new data.</p>

<p>#</p>\n`
        },
        {
            id: 'ch13',
            title: '2. useState Hook',
            content: `\n<p>The <code>useState</code> hook gives you a variable to store the data, and a function to update it.<br>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>---</p>\n`
        },
        {
            id: 'ch14',
            title: '🔄 Module 4: Events & Forms',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch15',
            title: '1. Event Handling',
            content: `\n<p>React events are written in camelCase (<code>onClick</code> instead of <code>onclick</code>).<br>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>#</p>\n`
        },
        {
            id: 'ch16',
            title: '2. Controlled Components (Forms)',
            content: `\n<p>In traditional HTML, input fields manage their own state. In React, we force the input field to rely entirely on React State.<br>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>---</p>\n`
        },
        {
            id: 'ch17',
            title: '🎯 Module 5: Hooks (The Magic Wands)',
            content: `\n<p>Hooks allow functional components to "hook into" React features like lifecycle methods and state.</p>

<p>#</p>\n`
        },
        {
            id: 'ch18',
            title: '1. Rules of Hooks',
            content: `\n<ul>
<li>NEVER call hooks inside loops, conditions, or nested functions.</li>
<li>ALWAYS call hooks at the very top level of your component.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch19',
            title: '2. useEffect (Side Effects)',
            content: `\n<p>Used to run code AFTER the component renders (like fetching data from a server, or setting up a timer).<br>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>#</p>\n`
        },
        {
            id: 'ch20',
            title: '3. useRef (Direct DOM Access)',
            content: `\n<p>Used to grab a direct reference to an HTML element, bypassing the Virtual DOM. (Great for focusing input fields).<br>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>---</p>\n`
        },
        {
            id: 'ch21',
            title: '🌍 Module 6: Routing (React Router)',
            content: `\n<p>React is a Single Page Application (SPA). The page never actually refreshes; React just swaps out the components instantly to fake the feeling of navigation.</p>

<p>#</p>\n`
        },
        {
            id: 'ch22',
            title: '1. Basic Setup',
            content: `\n<p>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>\\n\\nCODE_BLOCK_1\\n\\n</p>

<p>---</p>\n`
        },
        {
            id: 'ch23',
            title: '🌐 Module 7: API Integration (Fetching Data)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch24',
            title: '1. Using Fetch API with useEffect',
            content: `\n<p>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>---</p>\n`
        },
        {
            id: 'ch25',
            title: '🎨 Module 8: Styling',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch26',
            title: '1. Tailwind CSS (The Modern Standard)',
            content: `\n<p>Tailwind allows you to style elements directly using utility classes.<br>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>---</p>\n`
        },
        {
            id: 'ch27',
            title: '🏛️ Module 9: Advanced React',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch28',
            title: '1. Prop Drilling vs Context API',
            content: `\n<p><strong>Prop Drilling</strong> is the nightmare scenario where you have to pass a <code>user</code> prop down through 10 layers of child components just to reach the one component that actually needs it.<br><strong>Context API</strong> fixes this by creating a global "teleporter". You drop the data into the teleporter at the top level, and any component can instantly access it.</p>

<p>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>---</p>\n`
        },
        {
            id: 'ch29',
            title: '⚙️ Module 10: Performance Optimization',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch30',
            title: '1. Memoization (React.memo)',
            content: `\n<p>If a parent component re-renders, ALL of its children automatically re-render too, even if their props didn't change! <code>React.memo</code> stops this by caching the child component.<br>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>---</p>\n`
        },
        {
            id: 'ch31',
            title: '📦 Module 11: State Management Libraries',
            content: `\n<p>When Context API becomes too messy for massive enterprise apps, you use Redux or Zustand.</p>

<p>#</p>\n`
        },
        {
            id: 'ch32',
            title: '1. Redux Toolkit (RTK)',
            content: `\n<p>The industry standard for managing global state. It uses a strict architecture of "Actions" and "Reducers" to ensure state changes are predictable and traceable.<br>#</p>\n`
        },
        {
            id: 'ch33',
            title: '2. Zustand',
            content: `\n<p>The modern, lightweight alternative to Redux. It requires 90% less boilerplate code and is incredibly fast.</p>

<p>---</p>\n`
        },
        {
            id: 'ch34',
            title: '🧪 Module 12: Testing (React Testing Library)',
            content: `\n<p>You must write automated code to test your code.<br>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p>---</p>\n`
        },
        {
            id: 'ch35',
            title: '🚀 Module 14: React with TypeScript',
            content: `\n<p>TypeScript acts as an impenetrable armor for React, forcing you to define exactly what your props and state look like before compiling.</p>

<p>\\n\\nCODE_BLOCK_0\\n\\n</p>

<p><strong><em>End of React Masterclass</strong></em></p>\n`
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
