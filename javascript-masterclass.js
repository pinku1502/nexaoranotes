const courseData = [
    {
        id: 'ch1',
        title: 'Module 1: Introduction to JavaScript (The Brains of the Web)',
        content: `
            <p>Think of a webpage like a human body:</p>
            <ul>
                <li><strong>HTML</strong> is the skeleton (it gives structure).</li>
                <li><strong>CSS</strong> is the skin and clothes (it makes it look good).</li>
                <li><strong>JavaScript</strong> is the brain and muscles (it makes it move, think, and react).</li>
            </ul>
            <p>JavaScript is what makes a website interactive. Without it, a webpage is just a static poster. With it, you can build full applications like Netflix, Twitter, or Google Docs.</p>
            <div class="alert alert-warning">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div class="alert-content">
                    <h4>Strict Mode ("use strict";)</h4>
                    <p>Always put this at the very top of your JS files. It acts like a spell-checker for your code, preventing you from making silent, silly mistakes.</p>
                </div>
            </div>
        `
    },
    {
        id: 'ch2',
        title: 'Module 2: Variables & Data Types (Storing Information)',
        content: `
            <p>Variables are simply labeled boxes where you store information.</p>
            <ul>
                <li><code>const</code>: A box super-glued shut. Once you put something in, you <strong>cannot</strong> replace it. (Use this 90% of the time!).</li>
                <li><code>let</code>: A regular box. You can take things out and put new things in. (Use this for things that change, like a score counter).</li>
                <li><code>var</code>: The old, leaky box from 1995. <strong>Never use this anymore.</strong> It causes unpredictable bugs.</li>
            </ul>
            <h3>Data Types</h3>
            <p>Data Types are the <em>types</em> of things you can put in the boxes:</p>
            <ul>
                <li><strong>String</strong>: Text (e.g., <code>"Hello"</code>)</li>
                <li><strong>Number</strong>: Math (e.g., <code>42</code>)</li>
                <li><strong>Boolean</strong>: True or False (e.g., <code>isLoggedIn = true</code>)</li>
                <li><strong>Null</strong>: An intentionally empty box.</li>
                <li><strong>Undefined</strong>: A box that was created but never filled.</li>
            </ul>
        `
    },
    {
        id: 'ch3',
        title: 'Module 3: Control Flow (Making Decisions)',
        content: `
            <p>Control flow is how your code makes decisions.</p>
            <ul>
                <li><strong>If/Else</strong>: Like a crossroads. "If the user is logged in, go left (show dashboard). Else, go right (show login page)."</li>
                <li><strong>Loops (For/While)</strong>: Like a robot. "Print this 100 times." It saves you from writing the same code 100 times.</li>
            </ul>
        `
    },
    {
        id: 'ch4',
        title: 'Module 4: Functions (Reusable Recipes)',
        content: `
            <p>A function is like a recipe for baking a cake. You write the recipe <em>once</em>, and then you can bake (call) it a hundred times!</p>
            <pre><code>// The Recipe (Declaration)
function bakeCake(flavor) {
    return "Here is a " + flavor + " cake!";
}

// Baking the cake (Calling)
console.log(bakeCake("Chocolate")); // Output: Here is a Chocolate cake!</code></pre>
            <h3>Arrow Functions (=&gt;)</h3>
            <p>A modern, shorter way to write functions introduced in ES6.</p>
            <pre><code>const bakeCake = (flavor) =&gt; "Here is a " + flavor + " cake!";</code></pre>
        `
    },
    {
        id: 'ch5',
        title: 'Module 5: Objects & Arrays (Organizing Data)',
        content: `
            <ul>
                <li><strong>Objects ({})</strong>: Think of a real-world object. A <code>Car</code> has properties (color: red, wheels: 4) and methods (drive, brake).</li>
                <li><strong>Arrays ([])</strong>: Think of a bookshelf. It is a list of items kept in a very specific order (Item 0, Item 1, Item 2...).</li>
            </ul>
            <div class="alert alert-tip">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="alert-content">
                    <h4>The Holy Trinity of Arrays</h4>
                    <p>You must master these three array methods:</p>
                    <ol>
                        <li><code>map()</code>: Transforms every item in a list.</li>
                        <li><code>filter()</code>: Keeps only the items that pass a test.</li>
                        <li><code>reduce()</code>: Shrinks a massive list down to a single value (like calculating a total price).</li>
                    </ol>
                </div>
            </div>
        `
    },
    {
        id: 'ch6',
        title: 'Module 6: Scope and Hoisting',
        content: `
            <h3>Scope</h3>
            <p>Where can a variable be seen?</p>
            <ul>
                <li><em>Global Scope</em>: Shouting in a town square. Every part of your code can see it.</li>
                <li><em>Local Scope</em>: Whispering in a closed room. Only the code inside that specific function can see it.</li>
            </ul>
            <h3>Hoisting</h3>
            <p>JavaScript has a weird habit of "lifting" variable declarations to the top of the file before running. This is why <code>var</code> is dangerous, and why <code>let</code> and <code>const</code> were invented to fix it!</p>
        `
    },
    {
        id: 'ch7',
        title: 'Module 7: Closures (The Interview Favorite!)',
        content: `
            <p>A closure is a function that "remembers" the variables around it, even after the outer function has finished running.</p>
            <p><em>Analogy</em>: Imagine a function packing a backpack. When a function is created, it packs a backpack of all the variables it needs from its surroundings, and it carries that backpack forever!</p>
            <pre><code>function createCounter() {
    let count = 0; // The backpack variable
    return function() {
        count++; // It remembers count!
        console.log(count);
    }
}
const counter = createCounter();
counter(); // 1
counter(); // 2</code></pre>
        `
    },
    {
        id: 'ch8',
        title: 'Module 8: The DOM (Document Object Model)',
        content: `
            <p>The DOM is how JavaScript talks to HTML. JavaScript treats the entire HTML page as a massive family tree of objects. You can use JS to select an HTML element (like a button) and change its color, text, or hide it entirely.</p>
        `
    },
    {
        id: 'ch9',
        title: 'Module 9: Event Bubbling & Delegation',
        content: `
            <ul>
                <li><strong>Event Bubbling:</strong> If you have a Button inside a <code>&lt;div&gt;</code> inside the <code>&lt;body&gt;</code>, and you click the Button... you <em>also</em> clicked the <code>&lt;div&gt;</code> and the <code>&lt;body&gt;</code>! The click "bubbles" up to the top.</li>
                <li><strong>Event Delegation:</strong> Instead of putting 100 event listeners on 100 list items (which slows down the computer), you put <strong>ONE</strong> event listener on the parent <code>&lt;ul&gt;</code>. When a child is clicked, the bubble goes up to the parent, and the parent handles it. This is a massive performance boost!</li>
            </ul>
        `
    },
    {
        id: 'ch10',
        title: 'Module 10: Browser APIs (LocalStorage)',
        content: `
            <p>The browser gives JavaScript superpowers. <code>localStorage</code> allows you to save data (like Dark Mode preference) directly to the user's hard drive so that when they refresh the page, the data is still there!</p>
            <pre><code>// Save data
localStorage.setItem("theme", "dark");

// Retrieve data
console.log(localStorage.getItem("theme")); // "dark"</code></pre>
        `
    },
          {
        id: 'ch11',
        title: 'Module 11: Asynchronous JavaScript (Promises & Async/Await)',
        content: `
            <h3>1. The Core Concept: Synchronous vs Asynchronous</h3>
            <p><strong>Synchronous (Blocking)</strong>: Everything happens one step at a time. If Step 2 takes 10 seconds to finish, Step 3 MUST wait 10 seconds. The entire website freezes.</p>
            <p><strong>Asynchronous (Non-Blocking)</strong>: <em>Analogy:</em> You are at a restaurant. You order food. You don't freeze in place and stare at the kitchen door until the food arrives! You sit down, talk to your friends, and drink water. When the food is ready, the waiter brings it to you.</p>
            <p>Fetching data from a database takes time. Async JS allows your website to keep running and stay interactive while it waits for the data to arrive in the background.</p>

            <h3>2. The Dark Ages: Callback Hell 😱</h3>
            <p>In the old days, to do things in the background, we passed "Callback Functions" inside other functions. When doing multiple things in a row, this created a terrifying "Pyramid of Doom" that was impossible to read.</p>
            <pre><code>// Do not write code like this anymore!
setTimeout(() => {
    console.log("1. Got User");
    setTimeout(() => {
        console.log("2. Got Profile");
        setTimeout(() => {
            console.log("3. Got Friends");
            // Welcome to Callback Hell!
        }, 1000);
    }, 1000);
}, 1000);</code></pre>

            <h3>3. The Renaissance: Promises (.then / .catch)</h3>
            <p>To fix Callback Hell, JavaScript invented <strong>Promises</strong>. A Promise is exactly what it sounds like: <em>"I don't have the data right now, but I PROMISE I will let you know when I do."</em></p>
            <ul>
                <li><strong>Pending:</strong> Waiting for the data.</li>
                <li><strong>Fulfilled:</strong> We got the data! (Triggers <code>.then()</code>)</li>
                <li><strong>Rejected:</strong> Something went wrong (e.g. no wifi). (Triggers <code>.catch()</code>)</li>
            </ul>
            <pre><code>fetch('https://api.example.com/user')
    .then(response => response.json()) // If successful, do this!
    .then(data => console.log(data))
    .catch(error => console.log("Failed!", error)); // If failed, catch the error!</code></pre>

            <h3>4. The Modern Era: Async / Await 🚀</h3>
            <p>Promises were great, but <code>.then()</code> chains could still get messy. <strong>Async/Await</strong> is the modern way. It lets us write Asynchronous code that *looks* exactly like easy-to-read Synchronous code!</p>
            <ul>
                <li><code>async</code>: Put this in front of a function to tell JS it will run in the background.</li>
                <li><code>await</code>: Put this in front of a Promise. It tells JS: <em>"Pause this specific function right here until the data arrives. But let the rest of the website keep working!"</em></li>
            </ul>
            <pre><code>async function getUser() {
    try {
        // Wait for the data to arrive, but don't freeze the website!
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        console.log("Here is the user:", data);
    } catch (error) {
        console.log("Something broke!", error);
    }
}
getUser();</code></pre>
        `
    },
          {
        id: 'ch12',
        title: 'Module 12: The Event Loop & Call Stack (Under the Hood)',
        content: `
            <p>JavaScript is <strong>Single-Threaded</strong>. This means it can literally only do <strong>one single thing at a time</strong>. It has only one brain. So how can a website fetch data, play a video, and listen for your clicks all at the same time without freezing?</p>
            
            <h3>The Restaurant Analogy 🍽️</h3>
            <p>Imagine a very busy restaurant with a very specific setup:</p>
            <ul>
                <li><strong>The Call Stack (The Chef):</strong> There is only ONE Chef. He can only chop one onion at a time. If you tell him to wait 5 seconds, he will stand there doing nothing, and the whole kitchen freezes.</li>
                <li><strong>Web APIs (The Ovens):</strong> These are outside the kitchen. The browser provides them. They can bake pizzas (timers, fetching data) in the background while the Chef chops onions.</li>
                <li><strong>The Callback Queue (The Waiting Area):</strong> When the Ovens finish baking, the pizzas are placed here.</li>
                <li><strong>The Event Loop (The Waiter):</strong> The Waiter stands between the Waiting Area and the Chef. He constantly looks at the Chef and asks: <em>"Is the Chef doing anything right now?"</em> If the Chef is free, the Waiter grabs the next pizza from the Waiting Area and gives it to the Chef to serve.</li>
            </ul>

            <h3>Let's trace some code!</h3>
            <pre><code>console.log('Start');

setTimeout(() => {
    console.log('Timer finished!');
}, 5000);

console.log('End');</code></pre>
            
            <ol>
                <li><code>console.log('Start')</code> goes to the Chef. He instantly prints <strong>Start</strong>.</li>
                <li><code>setTimeout</code> goes to the Chef. He sees it's a timer. He throws it into the Oven (Web API) for 5 seconds and moves on.</li>
                <li><code>console.log('End')</code> goes to the Chef. He instantly prints <strong>End</strong>.</li>
                <li><em>(5 seconds later)</em> The Oven dings! It pushes <code>console.log('Timer finished!')</code> into the Waiting Area (Queue).</li>
                <li>The Waiter (Event Loop) sees the Chef is free, and gives it to him. The Chef prints <strong>Timer finished!</strong></li>
            </ol>
            <p><strong>Output:</strong> Start ➔ End ➔ Timer finished!</p>
        `
    },
          {
        id: 'ch13',
        title: 'Module 13: Error Handling (try...catch...finally)',
        content: `
            <p>In the real world, code crashes. Servers go offline, users type letters into phone number boxes, and files go missing. If your JavaScript crashes, the entire webpage freezes and becomes a blank white screen. <strong>We must catch the explosion before it kills our app!</strong></p>

            <h3>The Bomb Squad Analogy 💣</h3>
            <ul>
                <li><code>try {}</code> - <strong>The Bomb Defusal:</strong> You put your dangerous, risky code here (like asking the internet for data). You are <em>trying</em> to defuse the bomb.</li>
                <li><code>catch (error) {}</code> - <strong>The Bomb Suit:</strong> If the code in the <code>try</code> block explodes (crashes), the <code>catch</code> block absorbs the explosion! The app DOES NOT die. Instead, you can show a friendly message like <em>"Please check your wifi!"</em></li>
                <li><code>finally {}</code> - <strong>The Cleanup:</strong> This code runs NO MATTER WHAT. Whether the bomb was defused safely, or it exploded, the bomb squad must pack up their tools and go home. (Used for hiding loading spinners).</li>
                <li><code>throw</code> - <strong>The Manual Alarm:</strong> Sometimes the code doesn't crash, but you <em>want</em> it to fail. (e.g. "If age is less than 18, <code>throw</code> an error!").</li>
            </ul>

            <h3>Real World Example:</h3>
            <pre><code>function loginUser(username) {
    try {
        console.log("1. Trying to log in...");
        
        // Manual Error!
        if (username === "") {
            throw new Error("Username cannot be completely empty!"); 
        }

        console.log("2. Login successful!");

    } catch (error) {
        // We caught the explosion! The app survives.
        console.log("ERROR CAUGHT: " + error.message);
        
    } finally {
        // This runs 100% of the time
        console.log("3. Hiding the loading spinner...");
    }
}

loginUser(""); // Passing an empty string to trigger the bomb!</code></pre>
            
            <p><strong>Output:</strong></p>
            <ol>
                <li>1. Trying to log in...</li>
                <li>ERROR CAUGHT: Username cannot be completely empty!</li>
                <li>3. Hiding the loading spinner...</li>
            </ol>
        `
    },
    {
        id: 'ch14',
        title: 'Module 14: Object-Oriented JS (Classes)',
        content: `
            <p>Classes are blueprints for creating objects. If you are building a game, you don't write 100 enemies manually. You create one <code>Enemy</code> Class (blueprint), and then use it to instantly stamp out 100 enemies!</p>
        `
    },
    {
        id: 'ch15',
        title: 'Module 15: Modern ES6+ Features',
        content: `
            <ul>
                <li><strong>Destructuring</strong>: A shortcut to extract values from objects instantly.</li>
                <li><strong>Spread Operator (...)</strong>: Easily copy arrays or objects without mutating the original data.</li>
                <li><strong>Optional Chaining (?.)</strong>: Safely checking if nested data exists without crashing the app. (e.g., <code>user?.profile?.avatar</code>)</li>
            </ul>
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
