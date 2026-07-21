    const courseData = [
        {
            id: 'ch1',
            title: 'Module 1: Introduction',
            content: `
                <h2>Introduction to JavaScript</h2>
                
                <h3>Definition</h3>
                <p>JavaScript (JS) is a lightweight, cross-platform, and interpreted programming language primarily used for Web Development. It allows you to build highly interactive, dynamic, and engaging user interfaces.</p>

                <h3>Why is it Used?</h3>
                <p>JavaScript brings web pages to life. While HTML provides the structure and CSS handles the design, JavaScript controls the behavior. It is used in real-world applications for form validation, interactive maps, animations, fetching data from APIs, and even building full backend servers (using Node.js).</p>

                <h3>Syntax & Explanation</h3>
                <p>Adding JavaScript to an HTML file using the <code>&lt;script&gt;</code> tag:</p>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My First JS&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1 id="greeting"&gt;&lt;/h1&gt;

    &lt;script&gt;
        // The script tag embeds JS directly into HTML
        document.getElementById("greeting").innerText = "Hello, JavaScript!";
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

                <h3>Example & Output</h3>
                <pre><code>// Using strict mode to catch common coding bloopers
"use strict";

alert("Welcome to the JavaScript Course!");
console.log("JavaScript is running successfully.");</code></pre>
                <pre><code>Output:
[Browser Popup Window]: Welcome to the JavaScript Course!
[Browser Console]: JavaScript is running successfully.</code></pre>

                <h3>Key Points & Best Practices</h3>
                <ul>
                    <li><strong>Key Point:</strong> It is the standard language of the Web (supported by all major browsers).</li>
                    <li><strong>Best Practice:</strong> Always use <code>"use strict";</code> at the top of your files to enforce cleaner code.</li>
                    <li><strong>Best Practice:</strong> Use external <code>.js</code> files instead of mixing JavaScript inside HTML to keep your code organized.</li>
                </ul>

                <h3>Interview Questions</h3>
                <ol>
                    <li>What is the difference between Java and JavaScript?</li>
                    <li>What does "use strict" do in JavaScript?</li>
                    <li>Explain the three ways to add JavaScript to an HTML page.</li>
                </ol>
            `
        },
        {
            id: 'ch2',
            title: 'Module 2: Fundamentals',
            content: `
                <h2>JavaScript Fundamentals</h2>
                
                <h3>Definition</h3>
                <p>Fundamentals include the core building blocks of JS: Variables, Data Types, and Operators. Variables store data, Data Types define the kind of data, and Operators manipulate it.</p>

                <h3>Why is it Used?</h3>
                <p>Without variables and data types, a program cannot store user input or perform calculations. They are used everywhere, from storing a user's name to calculating a shopping cart total.</p>

                <h3>Syntax & Explanation</h3>
                <pre><code>// Modern variable declarations
let age = 25;       // Can be changed later
const PI = 3.14159; // Cannot be changed

// Data Types
let name = "Alice"; // String
let isStudent = true; // Boolean</code></pre>

                <h3>Example & Output</h3>
                <pre><code>let price = 100;
let tax = 20;
let total = price + tax;

// Template Literal (ES6)
console.log(\`The total price is $\${total}\`);</code></pre>
                <pre><code>Output:
The total price is $120</code></pre>

                <h3>Key Points & Best Practices</h3>
                <ul>
                    <li><strong>Key Point:</strong> <code>var</code> is outdated. Use <code>let</code> for variables that change, and <code>const</code> for constants.</li>
                    <li><strong>Best Practice:</strong> Always use strict equality <code>===</code> instead of loose equality <code>==</code> to prevent unexpected type coercion bugs.</li>
                </ul>

                <h3>Interview Questions</h3>
                <ol>
                    <li>What is the difference between <code>let</code>, <code>const</code>, and <code>var</code>?</li>
                    <li>What is type coercion in JavaScript?</li>
                    <li>Explain the difference between <code>==</code> and <code>===</code>.</li>
                </ol>
            `
        },
        {
            id: 'ch3',
            title: 'Module 3: Control Flow',
            content: `
                <h2>Control Flow</h2>
                
                <h3>Definition</h3>
                <p>Control flow allows your program to make decisions (Conditionals) and repeat actions (Loops) based on specific conditions.</p>

                <h3>Why is it Used?</h3>
                <p>Used to run different code depending on user actions (e.g., if a user is logged in, show the dashboard; else, show the login page) or to process large lists of data efficiently.</p>

                <h3>Syntax & Explanation</h3>
                <pre><code>// If-Else
if (condition) {
    // runs if true
} else {
    // runs if false
}

// For Loop
for (let i = 0; i < 5; i++) {
    // runs 5 times
}</code></pre>

                <h3>Example & Output</h3>
                <pre><code>let score = 85;

// Ternary Operator (Short if-else)
let result = (score >= 50) ? "Passed" : "Failed";
console.log(result);

for(let i=1; i<=3; i++) {
    console.log("Count: " + i);
}</code></pre>
                <pre><code>Output:
Passed
Count: 1
Count: 2
Count: 3</code></pre>

                <h3>Key Points & Best Practices</h3>
                <ul>
                    <li><strong>Key Point:</strong> <code>break</code> exits a loop completely, while <code>continue</code> skips to the next iteration.</li>
                    <li><strong>Best Practice:</strong> Use the Ternary Operator for simple true/false assignments to keep code clean.</li>
                </ul>

                <h3>Interview Questions</h3>
                <ol>
                    <li>What is the difference between a <code>for</code> loop and a <code>while</code> loop?</li>
                    <li>How does a <code>switch</code> statement work compared to <code>else if</code>?</li>
                    <li>What is the Ternary Operator?</li>
                </ol>
            `
        },
        {
            id: 'ch4',
            title: 'Module 4: Functions',
            content: `
                <h2>Functions</h2>
                
                <h3>Definition</h3>
                <p>A function is a reusable block of code designed to perform a particular task. It is executed when "called" or "invoked".</p>

                <h3>Why is it Used?</h3>
                <p>Functions prevent code duplication. Instead of writing the same logic multiple times, you write it once in a function and call it whenever needed.</p>

                <h3>Syntax & Explanation</h3>
                <pre><code>// 1. Function Declaration
function greet(name) {
    return "Hello " + name;
}

// 2. Arrow Function (ES6)
const add = (a, b) => a + b;</code></pre>

                <h3>Example & Output</h3>
                <pre><code>// Using Default Parameters & Arrow Functions
const calculateArea = (width = 10, height = 10) => width * height;

console.log(calculateArea(5, 4));
console.log(calculateArea()); // Uses default 10x10</code></pre>
                <pre><code>Output:
20
100</code></pre>

                <h3>Key Points & Best Practices</h3>
                <ul>
                    <li><strong>Key Point:</strong> Arrow functions provide a shorter syntax and do not have their own <code>this</code> context.</li>
                    <li><strong>Best Practice:</strong> Keep functions small. A function should ideally do one specific thing.</li>
                </ul>

                <h3>Interview Questions</h3>
                <ol>
                    <li>What is an Arrow Function and how does it differ from a regular function?</li>
                    <li>What is an IIFE (Immediately Invoked Function Expression)?</li>
                    <li>What are Higher-Order Functions?</li>
                </ol>
            `
        },
        {
            id: 'ch5',
            title: 'Module 5: Objects & Arrays',
            content: `
                <h2>Objects & Arrays</h2>
                
                <h3>Definition</h3>
                <p><strong>Objects</strong> are collections of key-value pairs used to store related data. <strong>Arrays</strong> are ordered lists used to store multiple values in a single variable.</p>

                <h3>Why is it Used?</h3>
                <p>Objects are used to model real-world entities (like a <code>User</code> object with name and email). Arrays are used to hold collections (like a list of users or a shopping cart).</p>

                <h3>Syntax & Explanation</h3>
                <pre><code>// Object
const user = {
    name: "Alice",
    age: 25,
    greet: function() { console.log("Hi!"); }
};

// Array
const colors = ["red", "green", "blue"];</code></pre>

                <h3>Example & Output</h3>
                <pre><code>const numbers = [1, 2, 3, 4, 5];

// Map: creates a new array by doing something to each item
const doubled = numbers.map(num => num * 2);

// Filter: creates a new array with items that pass a test
const evens = numbers.filter(num => num % 2 === 0);

console.log(doubled);
console.log(evens);</code></pre>
                <pre><code>Output:
[2, 4, 6, 8, 10]
[2, 4]</code></pre>

                <h3>Key Points & Best Practices</h3>
                <ul>
                    <li><strong>Key Point:</strong> Array methods like <code>map</code>, <code>filter</code>, and <code>reduce</code> do not modify the original array (pure functions).</li>
                    <li><strong>Best Practice:</strong> Use Object Destructuring to extract values easily: <code>const { name, age } = user;</code></li>
                </ul>

                <h3>Interview Questions</h3>
                <ol>
                    <li>Explain the difference between <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>.</li>
                    <li>What is Object Destructuring?</li>
                    <li>What does the <code>this</code> keyword refer to in an object method?</li>
                </ol>
            `
        },
        {
            id: 'ch6',
            title: 'Module 6: Strings & Numbers',
            content: `
                <h2>Strings, Numbers & Math</h2>
                
                <h3>Definition</h3>
                <p>JavaScript provides built-in methods to manipulate text (Strings) and perform complex mathematical operations (Math object).</p>

                <h3>Why is it Used?</h3>
                <p>Used to format user input (like making an email lowercase), generate random numbers for games, or format dates.</p>

                <h3>Example & Output</h3>
                <pre><code>let text = "  Hello JavaScript!  ";

// String Methods
console.log(text.trim()); // Removes whitespace
console.log(text.toUpperCase());
console.log(text.includes("Java")); // true

// Math Object
console.log(Math.round(4.7)); // 5
console.log(Math.floor(Math.random() * 10) + 1); // Random 1-10</code></pre>
                <pre><code>Output:
Hello JavaScript!
  HELLO JAVASCRIPT!  
true
5
7 (Random)</code></pre>

                <h3>Key Points & Best Practices</h3>
                <ul>
                    <li><strong>Key Point:</strong> Strings are immutable. Methods like <code>.toUpperCase()</code> return a *new* string; they don't change the original.</li>
                    <li><strong>Best Practice:</strong> Always use <code>.trim()</code> when accepting text input from users to remove accidental spaces.</li>
                </ul>
            `
        },
        {
            id: 'ch7',
            title: 'Module 7: DOM (Document Object Model)',
            content: `
                <h2>DOM Manipulation</h2>
                
                <h3>Definition</h3>
                <p>The DOM is an object-oriented representation of the web page. JavaScript uses the DOM to read, change, add, or delete HTML elements dynamically.</p>

                <h3>Why is it Used?</h3>
                <p>It is the core of web interactivity. Whenever you click a "Like" button and it turns blue, or you submit a form and a success message appears—that is DOM manipulation.</p>

                <h3>Syntax & Explanation</h3>
                <pre><code>// Selecting an element
const btn = document.querySelector(".my-button");

// Adding an Event Listener
btn.addEventListener("click", function() {
    // action to perform
});</code></pre>

                <h3>Example & Output</h3>
                <pre><code>// Assume there is a &lt;div id="box"&gt;&lt;/div&gt; in the HTML
const box = document.getElementById("box");

// Change Content
box.innerText = "Updated Content!";

// Change Style
box.style.backgroundColor = "blue";
box.style.padding = "20px";</code></pre>
                <pre><code>Output:
The DIV instantly turns blue and its text updates on the screen.</code></pre>

                <h3>Key Points & Best Practices</h3>
                <ul>
                    <li><strong>Key Point:</strong> <code>Event Delegation</code> is a technique where you attach one event listener to a parent element rather than attaching multiple listeners to individual child elements.</li>
                    <li><strong>Best Practice:</strong> Cache DOM selections in variables (e.g., <code>const btn = ...</code>) instead of querying the DOM repeatedly, as querying is slow.</li>
                </ul>

                <h3>Interview Questions</h3>
                <ol>
                    <li>What is the difference between <code>getElementById</code> and <code>querySelector</code>?</li>
                    <li>What is Event Bubbling?</li>
                    <li>How do you create and append a new HTML element using JavaScript?</li>
                </ol>
            `
        },
        {
            id: 'ch8',
            title: 'Module 8: Asynchronous JavaScript',
            content: `
                <h2>Asynchronous Programming</h2>
                
                <h3>Definition</h3>
                <p>Asynchronous JS allows the code to continue running while waiting for a long operation (like downloading a file or fetching data from a database) to finish in the background.</p>

                <h3>Why is it Used?</h3>
                <p>If JS was strictly synchronous, fetching data from an API would "freeze" the entire webpage until the data arrived. Async JS prevents the UI from freezing.</p>

                <h3>Syntax & Explanation</h3>
                <pre><code>// Using async / await for clean asynchronous code
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch!", error);
    }
}</code></pre>

                <h3>Example & Output</h3>
                <pre><code>console.log("1. Start");

// setTimeout is an asynchronous timer
setTimeout(() => {
    console.log("2. Timer Finished");
}, 2000); // Wait 2 seconds

console.log("3. End");</code></pre>
                <pre><code>Output:
1. Start
3. End
(2 seconds later...)
2. Timer Finished</code></pre>

                <h3>Key Points & Best Practices</h3>
                <ul>
                    <li><strong>Key Point:</strong> Promises represent the eventual completion (or failure) of an asynchronous operation.</li>
                    <li><strong>Best Practice:</strong> Always use <code>try...catch</code> blocks when using <code>async/await</code> to handle network errors gracefully.</li>
                </ul>

                <h3>Interview Questions</h3>
                <ol>
                    <li>What is a Promise in JavaScript?</li>
                    <li>Explain the difference between Synchronous and Asynchronous code.</li>
                    <li>What is "Callback Hell" and how do Promises fix it?</li>
                </ol>
            `
        },
        {
            id: 'ch9',
            title: 'Module 9: Modern JavaScript (ES6+)',
            content: `
                <h2>ES6+ Features</h2>
                
                <h3>Definition</h3>
                <p>ES6 (ECMAScript 2015) introduced massive improvements to JavaScript, making it more modern, readable, and powerful. Features include Arrow Functions, Destructuring, and Modules.</p>

                <h3>Example & Output</h3>
                <pre><code>// 1. Destructuring
const person = { name: "John", age: 30 };
const { name, age } = person;

// 2. Spread Operator (...)
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// 3. Optional Chaining (?.)
const user = { profile: { email: "test@test.com" } };
console.log(user?.profile?.email); // Safe checking</code></pre>
                <pre><code>Output:
"test@test.com"</code></pre>

                <h3>Key Points & Best Practices</h3>
                <ul>
                    <li><strong>Key Point:</strong> Modules (<code>import / export</code>) allow you to split your JS code across multiple files.</li>
                    <li><strong>Best Practice:</strong> Use the Spread Operator (<code>...</code>) to easily copy arrays or objects without mutating the original.</li>
                </ul>
            `
        },
        {
            id: 'ch10',
            title: 'Module 10: Browser APIs',
            content: `
                <h2>Local Storage & Web APIs</h2>
                
                <h3>Definition</h3>
                <p>Browser APIs are built-in features provided by the browser (not the JS language itself). This includes LocalStorage, Geolocation, and Fetch.</p>

                <h3>Why is it Used?</h3>
                <p>Used to save user preferences locally (dark mode), find a user's location on a map, or access the device camera.</p>

                <h3>Example & Output</h3>
                <pre><code>// Save data to the browser
localStorage.setItem("theme", "dark");

// Retrieve data
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme);

// Clear data
// localStorage.removeItem("theme");</code></pre>
                <pre><code>Output:
"dark"</code></pre>

                <h3>Key Points & Best Practices</h3>
                <ul>
                    <li><strong>Key Point:</strong> LocalStorage persists even after the browser is closed. SessionStorage clears when the tab is closed.</li>
                    <li><strong>Best Practice:</strong> Never store sensitive data (like passwords or tokens) in LocalStorage, as it is vulnerable to XSS attacks.</li>
                </ul>
            `
        },
        {
            id: 'ch11',
            title: 'Module 11: Error Handling & Debugging',
            content: `
                <h2>Error Handling (try...catch)</h2>
                
                <h3>Definition</h3>
                <p>Error handling is predicting and managing runtime errors gracefully so that your application doesn't completely crash.</p>

                <h3>Example & Output</h3>
                <pre><code>function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        console.log("Result:", a / b);
    } catch (error) {
        console.error("An error occurred:", error.message);
    } finally {
        console.log("Math operation finished.");
    }
}

divide(10, 0);</code></pre>
                <pre><code>Output:
An error occurred: Cannot divide by zero!
Math operation finished.</code></pre>

                <h3>Key Points & Best Practices</h3>
                <ul>
                    <li><strong>Key Point:</strong> The <code>finally</code> block executes regardless of whether an error was thrown or not.</li>
                </ul>
            `
        },
        {
            id: 'ch12',
            title: 'Module 12: Object-Oriented JavaScript',
            content: `
                <h2>Classes & Prototypes</h2>
                
                <h3>Definition</h3>
                <p>OOP is a programming paradigm based on "Objects". ES6 introduced the <code>class</code> keyword, giving JS a cleaner syntax for creating blueprints of objects (though under the hood, JS still uses Prototypes).</p>

                <h3>Example & Output</h3>
                <pre><code>class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a sound.");
    }
}

// Inheritance
class Dog extends Animal {
    speak() {
        console.log(this.name + " barks!");
    }
}

const myDog = new Dog("Rex");
myDog.speak();</code></pre>
                <pre><code>Output:
Rex barks!</code></pre>
            `
        },
        {
            id: 'ch13',
            title: 'Module 13: Practice',
            content: `
                <h2>Coding Challenges & Practice</h2>
                
                <h3>Array Challenges</h3>
                <ul>
                    <li><strong>Challenge 1:</strong> Write a function that takes an array of numbers and returns the sum using <code>reduce()</code>.</li>
                    <li><strong>Challenge 2:</strong> Write a function to remove all duplicate values from an array.</li>
                </ul>

                <h3>DOM Projects</h3>
                <ul>
                    <li><strong>Challenge 3:</strong> Create a button that generates a random hex color and applies it to the background.</li>
                    <li><strong>Challenge 4:</strong> Build a simple counter (Increment, Decrement, Reset) using event listeners.</li>
                </ul>

                <h3>Async Programming</h3>
                <ul>
                    <li><strong>Challenge 5:</strong> Use the Fetch API to retrieve random jokes from an external API and display them on the page.</li>
                </ul>
            `
        },
        {
            id: 'ch14',
            title: 'Module 14: Projects',
            content: `
                <h2>Real-World Projects to Build</h2>
                
                <h3>1. Weather App</h3>
                <p>Build an app that takes a city name, fetches real-time data using the OpenWeather API (Promises/Async), and dynamically updates the DOM to show temperature and icons.</p>

                <h3>2. To-Do List</h3>
                <p>Create a task manager. Users can add tasks (DOM Creation), mark them as complete (DOM styling), delete them, and save the list to <code>localStorage</code>.</p>

                <h3>3. E-commerce Cart</h3>
                <p>Simulate a shopping cart. Use Arrays and Objects to store products. Use <code>map()</code> to render product cards, and <code>reduce()</code> to calculate the total price.</p>

                <h3>4. Quiz App</h3>
                <p>Create a multiple-choice quiz using OOP. Create a <code>Quiz</code> class that tracks the current score and question index, updating the DOM when the user selects an answer.</p>
            `
        }
    ];

    const sidebar = document.getElementById('sidebar');
    const tableOfContents = document.getElementById('table-of-contents');
    const contentArea = document.getElementById('notes-container');
    const mobileClose = document.getElementById('mobile-close');
    const mobileToggle = document.getElementById('mobile-toggle');

    if (tableOfContents && contentArea) {
        let allContentHtml = '';

        courseData.forEach((ch, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#' + ch.id;
            a.textContent = ch.title;
            if (index === 0) a.classList.add('active');
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = document.getElementById(ch.id);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
                document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
                a.classList.add('active');
                if (window.innerWidth <= 768 && sidebar) {
                    sidebar.classList.remove('active');
                }
            });

            li.appendChild(a);
            tableOfContents.appendChild(li);

            allContentHtml += `
                <div id="${ch.id}" class="course-section">
                    <h2>${ch.title}</h2>
                    ${ch.content}
                </div>
            `;
        });

        contentArea.innerHTML = allContentHtml;

        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('.course-section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-links a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href').includes(current)) {
                    a.classList.add('active');
                }
            });
        });
    }

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }

    if (mobileClose && sidebar) {
        mobileClose.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }
