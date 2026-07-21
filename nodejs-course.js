document.addEventListener('DOMContentLoaded', () => {
    const courseData = [
        {
            id: 'ch1',
            title: 'Module 1: Introduction to Node.js',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch2',
            title: '1. Introduction & History of Node.js',
            content: `\n<p>Created by <strong>Ryan Dahl</strong> in 2009, Node.js took the JavaScript engine out of the Google Chrome browser (the V8 Engine) and allowed it to run directly on your computer's operating system. Before Node, JavaScript could only run inside a web browser to make buttons click or animate menus. Now, JavaScript can read files, interact with databases, and act as a highly scalable web server, powering backends for companies like Netflix, Uber, and PayPal.</p>\n\n<p>#</p>\n`
        },
        {
            id: 'ch3',
            title: '2. Features & Why Use Node.js?',
            content: `\n<ul>
<li><strong>Lightning Fast:</strong> Built on Chrome's V8 engine, it compiles JS directly to machine code.</li>
<li><strong>Asynchronous & Non-Blocking:</strong> It never waits for a slow database query to finish; it moves on to the next request immediately, making it incredibly scalable.</li>
<li><strong>Single Language:</strong> You can write both the Frontend (React/Angular) and Backend (Node) using 100% JavaScript. This allows full-stack developers to easily transition between the frontend and backend.</li>
</ul>\n\n<p>#</p>\n`
        },
        {
            id: 'ch4',
            title: '3. Node.js vs JavaScript & Express.js',
            content: `\n<ul>
<li><strong>JavaScript:</strong> The programming language itself.</li>
<li><strong>Node.js:</strong> The runtime environment that allows JS to run on your server/computer outside the browser.</li>
<em>   <strong>Express.js:</strong> A framework built </em>on top* of Node.js that makes writing web servers, handling API routes, and managing middleware much easier and less verbose than raw Node.js.
</ul>\n\n<p>#</p>\n`
        },
        {
            id: 'ch5',
            title: '4. Node.js Architecture (Event Loop & Single Thread)',
            content: `\n<p>Unlike traditional web servers (like Apache/PHP) which create a heavy new "Thread" for every single user that visits the website, Node.js operates on a <strong>Single Thread</strong>. It uses an <strong>Event Loop</strong> to rapidly juggle thousands of concurrent requests by delegating heavy tasks (like reading large files or querying a database) to the operating system in the background (<strong>Non-Blocking I/O</strong>), and only returning to them when they are finished. This makes Node extremely memory-efficient.</p>\n\n<p>#</p>\n`
        },
        {
            id: 'ch6',
            title: '5. Installing & First Program',
            content: `\n<p>Install Node from <code>nodejs.org</code>. Verify it by typing <code>node -v</code> in your terminal. You can write your code in a standard <code>.js</code> file and execute it from the terminal.</p>\n\n<pre><code>// Run this file in your terminal using: node app.js
console.log("Hello, Node.js World!");

// You can also access the Node REPL (Read-Eval-Print Loop) by typing 'node' in terminal
</code></pre>\n\n<hr>\n`
        },
        {
            id: 'ch7',
            title: '📘 Module 2: Node.js Fundamentals',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch8',
            title: '1. Global Objects & Variables',
            content: `\n<p>In the browser, the top-level global object is <code>window</code>. In Node.js, there is no browser window! The top-level object is <code>global</code>.<br><li><code>__dirname</code>: The absolute path to the directory/folder your code is currently in.</li><br><li><code>__filename</code>: The absolute path to the current file being executed.</li><br><li><code>process</code>: A massive object containing info about the current Node process, including environment variables (<code>process.env</code>) and arguments passed from the command line (<code>process.argv</code>).</li></p>\n\n<p>#</p>\n`
        },
        {
            id: 'ch9',
            title: '2. The Buffer',
            content: `\n<p>Because Node.js interacts deeply with the file system and network, it often deals with raw binary data (streams of 1s and 0s) rather than pure text. A <code>Buffer</code> is Node's built-in way of storing and manipulating this raw binary data in memory chunks before processing it.</p>\n\n<hr>\n`
        },
        {
            id: 'ch10',
            title: '📂 Module 3: Modules',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch11',
            title: '1. CommonJS vs ES Modules (ESM)',
            content: `\n<p>A module is just a reusable piece of code (like a separate file). <br>Node.js historically used <strong>CommonJS</strong> (<code>require()</code> and <code>module.exports</code>). Modern Node now supports <strong>ES Modules</strong> (<code>import</code> and <code>export</code>) which is the exact same syntax used in React.</p>\n\n<pre><code>// 1. CommonJS (Older, default Node way)
const math = require('./math.js');
module.exports = { calculate: true };

// 2. ES Modules (Modern, React-style way)
// CRITICAL: You must add "type": "module" in your package.json to unlock this syntax!
import math from './math.js';
export const calculate = true;
</code></pre>\n\n<p>#</p>\n`
        },
        {
            id: 'ch12',
            title: '2. Built-in Modules',
            content: `\n<p>Node comes with powerful Core Modules pre-installed so you don't have to download third-party libraries:<br><li><code>fs</code> (File System): Read, write, and delete local files.</li><br><li><code>path</code> (Handling file paths): Safely joins directory paths across Windows and Mac without breaking slashes.</li><br><li><code>http</code> (Creating web servers): The backbone of web APIs.</li><br><li><code>crypto</code> (Security): Hashing passwords and generating tokens.</li></p>\n\n<hr>\n`
        },
        {
            id: 'ch13',
            title: '📁 Module 4: File System (fs)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch14',
            title: '1. Reading and Writing Files',
            content: `\n<p>The <code>fs</code> module lets you interact with your computer's hard drive. While <code>fs.readFileSync</code> exists, you should always prefer the asynchronous <code>fs.promises</code> version to avoid blocking the single thread and causing "Callback Hell".</p>\n\n<pre><code>const fs = require('fs').promises;
const path = require('path');

async function manageFiles() {
  try {
    const filePath = path.join(__dirname, 'notes.txt');

    // 1. Write to a file (Overwrites existing content)
    await fs.writeFile(filePath, 'Learning Node.js!');
    
    // 2. Read from a file (Must specify 'utf8' to get text instead of a raw Buffer)
    const data = await fs.readFile(filePath, 'utf8');
    console.log("File Contents:", data);
    
    // 3. Append to a file (Adds text safely to the end of the file)
    await fs.appendFile(filePath, '\\nThis is an added line.');
  } catch (error) {
    console.error("File System Error:", error);
  }
}
manageFiles();
</code></pre>\n\n<hr>\n`
        },
        {
            id: 'ch15',
            title: '🌐 Module 5: HTTP Module',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch16',
            title: '1. Creating a Basic Web Server',
            content: `\n<p>You can build a fully functional web server using <em>only</em> raw Node.js. However, doing this requires manual string checking for routes and headers.</p>\n\n<pre><code>const http = require('http');

const server = http.createServer((req, res) => {
  // Manual Routing checking the req.url string
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Welcome to my Node Server!</h1>');
    res.end();
  } else if (req.url === '/api/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // Must convert Javascript Objects to JSON strings before sending over HTTP
    res.write(JSON.stringify({ user: 'Pinku', role: 'Admin' }));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404: Page Not Found');
  }
});

server.listen(3000, () => console.log('Server running on port 3000'));
</code></pre>\n\n<hr>\n`
        },
        {
            id: 'ch17',
            title: '⚡ Module 6: Asynchronous Programming',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch18',
            title: '1. Synchronous vs Asynchronous',
            content: `\n<ul>
<li><strong>Synchronous:</strong> Code executes strictly line by line. If a database query takes 5 seconds, the entire server freezes for 5 seconds, blocking all other users from accessing the site.</li>
<li><strong>Asynchronous:</strong> Code kicks off a task (like fetching from a database) and moves on to the next line immediately. When the task finishes later, it triggers a callback or resolves a Promise.</li>
</ul>\n\n<p>#</p>\n`
        },
        {
            id: 'ch19',
            title: '2. Promises & Async/Await',
            content: `\n<p>Using modern <code>async/await</code> syntax prevents messy nested "Callback Hell" and allows asynchronous code to look and read exactly like clean synchronous code.</p>\n\n<pre><code>const fetchUserData = async (userId) => {
  try {
    // The 'await' keyword pauses this specific function until the DB responds, 
    // without blocking the rest of the Node.js server!
    const user = await database.findUser({ id: userId });
    console.log("User found:", user.name);
  } catch (error) {
    console.error("Failed to fetch user data:", error.message);
  }
};
</code></pre>\n\n<hr>\n`
        },
        {
            id: 'ch20',
            title: '🛠️ Module 7: npm (Node Package Manager)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch21',
            title: '1. What is npm?',
            content: `\n<p><code>npm</code> is the largest software registry in the world. It allows you to download open-source libraries (packages) created by other developers, saving you hundreds of hours of coding.</p>\n\n<p>#</p>\n`
        },
        {
            id: 'ch22',
            title: '2. package.json & Essential Commands',
            content: `\n<ul>
<li><code>npm init -y</code>: Creates a <code>package.json</code> file which acts as the DNA and instruction manual for your project.</li>
<li><code>npm install express</code>: Downloads a package and adds it to your <code>dependencies</code>.</li>
<li><code>npm install nodemon --save-dev</code>: Installs a package strictly for local development (e.g., <code>nodemon</code> automatically restarts the server when you save a file). These are not sent to the production server.</li>
<li><code>npm run script_name</code>: Executes a custom script defined in your <code>package.json</code>.</li>
</ul>\n\n<hr>\n`
        },
        {
            id: 'ch23',
            title: '🌍 Module 8: Express.js',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch24',
            title: '1. Why Express?',
            content: `\n<p>Writing raw Node.js HTTP servers (Module 5) requires too much manual string checking and complex header configuration. <strong>Express.js</strong> is a minimalist framework that abstracts away all the complex raw Node HTTP logic into clean, readable routing.</p>\n\n<pre><code>npm install express
</code></pre>\n\n<p>#</p>\n`
        },
        {
            id: 'ch25',
            title: '2. Creating an Express Server & Routing',
            content: `\n<pre><code>const express = require('express');
const app = express();

// 1. Built-in Middleware to automatically parse incoming JSON data from POST requests!
app.use(express.json()); 

// 2. A simple GET Route
app.get('/', (req, res) => {
  res.send("Hello Express!"); // Express automatically sets the Content-Type header!
});

// 3. Using Route Parameters (dynamic URLs)
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // res.json() automatically converts the object to a JSON string and sends it
  res.json({ message: \`Fetching data for User \${userId}\` });
});

app.listen(5000, () => console.log('Express Server running on Port 5000'));
</code></pre>\n\n<p>#</p>\n`
        },
        {
            id: 'ch26',
            title: '3. Middleware',
            content: `\n<p>Middleware functions are the backbone of Express. They are functions that run <em>in the middle</em> of a request-response cycle. They can inspect the incoming request, modify it, or reject it entirely (e.g., checking if a user has a valid login token before allowing them to access the <code>/admin</code> route).</p>\n\n<hr>\n`
        },
        {
            id: 'ch27',
            title: '📨 Module 9: REST API Development',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch28',
            title: '1. REST API Basics & CRUD',
            content: `\n<p>A REST API uses standard HTTP methods to perform CRUD (Create, Read, Update, Delete) operations on resources (like Users, Posts, or Products).<br><li><strong>GET</strong> (Read data)</li><br><li><strong>POST</strong> (Create new data)</li><br><li><strong>PUT/PATCH</strong> (Update existing data)</li><br><li><strong>DELETE</strong> (Remove data)</li></p>\n\n<p>#</p>\n`
        },
        {
            id: 'ch29',
            title: '2. Testing with Postman',
            content: `\n<p>You cannot test POST, PUT, or DELETE requests by simply typing a URL into a web browser bar (browsers only perform GET requests). You must use API testing tools like <strong>Postman</strong> or <strong>ThunderClient</strong> (VS Code extension) to construct the JSON payloads, define headers, and simulate the requests to your server.</p>\n\n<hr>\n`
        },
        {
            id: 'ch30',
            title: '🗄️ Module 10: Database (MongoDB & Mongoose)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch31',
            title: '1. MongoDB vs SQL',
            content: `\n<p>MongoDB is a NoSQL document database. Instead of storing data in strict, rigid tables and rows (like MySQL), it stores data as highly flexible, JSON-like documents (BSON). This makes it incredibly popular for Node.js developers since it naturally mirrors Javascript objects.</p>\n\n<p>#</p>\n`
        },
        {
            id: 'ch32',
            title: '2. Mongoose ODM',
            content: `\n<p><strong>Mongoose</strong> is an elegant Object Data Modeling (ODM) library for Node.js. It forces strict rules (Schemas) onto your flexible MongoDB database, preventing bad data from entering your system.</p>\n\n<pre><code>const mongoose = require('mongoose');

// 1. Connect to Database (Returns a Promise)
mongoose.connect('mongodb://localhost:27017/myapp')
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Database Connection Failed", err));

// 2. Define strict Schema (Rules for the collection)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 18 },
  email: { type: String, unique: true }
});

// 3. Create Model
const User = mongoose.model('User', userSchema);

// 4. Create new User
const createAdmin = async () => {
  const newUser = await User.create({ name: "Pinku", age: 25, email: "pinku@test.com" });
  console.log("User successfully saved to MongoDB!", newUser);
};
</code></pre>\n\n<hr>\n`
        },
        {
            id: 'ch33',
            title: '🔐 Module 11: Authentication & Security',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch34',
            title: '1. Passwords (bcrypt)',
            content: `\n<p>Never save passwords as plain text in the database! If the database is hacked, all users are immediately compromised. Use the <code>bcrypt</code> library to hash passwords into unreadable, irreversible cryptographic strings before saving them to MongoDB.</p>\n\n<p>#</p>\n`
        },
        {
            id: 'ch35',
            title: '2. JWT (JSON Web Token)',
            content: `\n<p>HTTP is "Stateless"—it immediately forgets who you are the second your request ends. To keep a user logged in, the server generates a cryptographically signed <strong>JWT</strong>. The user's browser saves this token (in LocalStorage or HttpOnly Cookies) and sends it with every future request acting like a digital VIP pass.</p>\n\n<pre><code>const jwt = require('jsonwebtoken');

// Generate a VIP Pass for the user after a successful password check
const token = jwt.sign(
  { userId: 123, role: "admin" }, // Payload data
  process.env.JWT_SECRET,         // Super secret key
  { expiresIn: '24h' }            // Token expires in 24 hours for security
);
</code></pre>\n\n<hr>\n`
        },
        {
            id: 'ch36',
            title: '📤 Module 12: File Upload & Email',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch37',
            title: '1. File Uploads (Multer)',
            content: `\n<p>Node.js cannot naturally parse incoming multi-part form data (images or PDFs). You use a middleware library called <strong>Multer</strong> to intercept the incoming file stream, process it, and save it to a local folder or upload it to cloud storage like AWS S3.</p>\n\n<p>#</p>\n`
        },
        {
            id: 'ch38',
            title: '2. Sending Emails (Nodemailer)',
            content: `\n<p><strong>Nodemailer</strong> allows your Node server to connect to an SMTP server (like Gmail, SendGrid, or AWS SES) and programmatically dispatch HTML-formatted welcome emails, invoices, or password reset links to your users.</p>\n\n<hr>\n`
        },
        {
            id: 'ch39',
            title: '⚙️ Module 13: Advanced Node.js',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch40',
            title: '1. Streams & Buffers',
            content: `\n<p>For massive files (like a 2GB video or 10GB CSV file), standard <code>fs.readFile</code> will completely crash the server because it tries to load the entire 2GB into RAM at once. <strong>Streams</strong> solve this by processing the file in tiny, memory-efficient chunks, exactly like streaming a Netflix movie while it's still downloading.</p>\n\n<p>#</p>\n`
        },
        {
            id: 'ch41',
            title: '2. Cluster & Worker Threads',
            content: `\n<p>Node.js is naturally single-threaded. If you host it on a server with an 8-core CPU, Node will stubbornly only use 1 core! The <code>cluster</code> module allows you to clone your Node server 8 times, assigning one clone to each CPU core, dramatically increasing performance and allowing the server to handle 8x more traffic.</p>\n\n<hr>\n`
        },
        {
            id: 'ch42',
            title: '🧪 Module 14: Testing & Debugging',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch43',
            title: '1. Debugging & Error Handling',
            content: `\n<p>Never rely solely on <code>console.log</code> for serious debugging. Use the native Node Inspector (<code>node --inspect</code>) or VS Code's built-in debugger to set red breakpoints and step through your code execution line-by-line while inspecting variables in real-time.</p>\n\n<p>#</p>\n`
        },
        {
            id: 'ch44',
            title: '2. Testing with Jest & Supertest',
            content: `\n<p>Automated testing ensures your API doesn't randomly break when you add new features. <strong>Jest</strong> is a testing framework, and <strong>Supertest</strong> allows you to programmatically fire HTTP requests at your Express routes without starting the actual server, asserting that the correct JSON is returned.</p>\n\n<hr>\n`
        },
        {
            id: 'ch45',
            title: '🚀 Module 15: Deployment',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch46',
            title: '1. PM2 (Process Manager)',
            content: `\n<p>If your Node app crashes in a production environment, it stays dead. <strong>PM2</strong> is an advanced daemon process manager that runs your app in the background, logs errors, and instantly auto-restarts the server if it crashes.</p>\n\n<p>#</p>\n`
        },
        {
            id: 'ch47',
            title: '2. Hosting Environments',
            content: `\n<ul>
<li><strong>Render / Railway:</strong> Easy, automated cloud hosting platforms (PaaS) that automatically pull from GitHub and deploy your Node apps.</li>
<li><strong>VPS (DigitalOcean / EC2):</strong> A raw Linux server (IaaS) where you must manually SSH into the server, install Node, configure Nginx as a reverse proxy, and run PM2. Much cheaper, but requires DevOps knowledge.</li>
</ul>\n\n<hr>\n`
        },
        {
            id: 'ch48',
            title: '💻 Module 16: Practice',
            content: `\n<p>To master backend development with Node.js, you must focus heavily on the following practical implementations:<br><li>Build 10 different CRUD REST APIs from scratch.</li><br><li>Master MongoDB Aggregation pipelines for complex data retrieval.</li><br><li>Implement JWT login/logout flows and Role-Based Access Control (RBAC) repeatedly until it becomes muscle memory.</li><br><li>Practice writing custom Express Error Handling Middleware.</li></p>\n\n<hr>\n`
        },
        {
            id: 'ch49',
            title: '🌟 Module 17: Projects',
            content: `\n<p>Building real projects is the absolute best way to solidify your backend architecture skills.<br><li><strong>Notes API:</strong> Basic CRUD operations (Create, Read, Update, Delete notes).</li><br><li><strong>Authentication System:</strong> Register, Login, JWT verification, and bcrypt hashed passwords.</li><br><li><strong>Blog API:</strong> Learn relational database logic (Relationships between Users, Posts, and Comments using Mongoose <code>populate()</code>).</li><br><li><strong>Real-Time Chat:</strong> Master WebSockets using <code>socket.io</code> to create a live chatroom.</li><br><li><strong>E-Commerce Backend:</strong> Master global Cart management, Stripe payment webhooks, and secure checkout sessions.</li></p>\n`
        }
    ];

    const navLinksList = document.getElementById('table-of-contents');
    const notesContainer = document.getElementById('notes-container');

    let navHtml = '';
    let contentHtml = '';

    courseData.forEach((section, index) => {
        // Build Sidebar Navigation
        navHtml += `<li><a href="#${section.id}" class="${index === 0 ? 'active' : ''}">${section.title}</a></li>`;
        
        // Build Content Section
        contentHtml += `
            <div id="${section.id}" class="course-section">
                <h2>${section.title}</h2>
                ${section.content}
            </div>
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

    // Download PDF
    const downloadBtn = document.getElementById('download-pdf-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            window.print();
        });
    }
});
