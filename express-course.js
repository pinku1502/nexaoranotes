const courseData = [
    {
        id: 'mod1',
        title: 'Module 1: Introduction to Express.js',
        content: `<h3>1. What is Express.js?</h3>
<p>Node.js allows you to run JavaScript on your computer (instead of just inside a browser). However, writing a server using raw Node.js is hard.</p>
<ul><li>  <strong>Without Express (Raw Node.js)</strong>: You have to manually parse URLs, parse request bodies, manage headers, and write complex loops just to show an image.</li><li>  <strong>With Express</strong>: You write simple, readable code. It does the hard work behind the scenes.</li></ul>
<h3>2. Express.js vs Node.js</h3>
<ul><li>  <strong>Node.js</strong>: The JavaScript runtime environment. (Like the computer hardware/OS).</li><li>  <strong>Express.js</strong>: A web framework that runs on Node.js. (Like the software app running on the computer).</li></ul>
<h3>3. Installing Express.js and First App</h3>
<pre><code># Initialize a new Node.js project
npm init -y

# Install Express
npm install express</code></pre>
<p>Create <code>index.js</code>:</p>
<pre><code>const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) =&gt; {
  res.send('Welcome to Express! 🚀');
});

app.listen(PORT, () =&gt; {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});</code></pre>
<h3>4. Express Generator</h3>
<p>For larger applications, Express offers a command-line tool to generate a pre-structured project:</p>
<pre><code>npx express-generator --view=ejs my-express-project</code></pre>
<p>This generates folders for routes, views, public files, and configures basic middlewares immediately.</p>
<hr>
`
    },
    {
        id: 'mod2',
        title: 'Module 2: Express Fundamentals',
        content: `<h3>1. The Server Setup & Port Listening</h3>
<p>The <code>app.listen()</code> method starts the HTTP server on a specified port. The port is like a dedicated channel or apartment number where requests go.</p>
<h3>2. The Request (\`req\`) and Response (\`res\`) Objects</h3>
<ul><li>  <code>req</code>: Contains what the client sent.</li><li>  <code>res</code>: Contains what the server sends back.</li></ul>
<pre><code>app.get('/user', (req, res) =&gt; {
  console.log(req.method); // "GET"
  console.log(req.url);    // "/user"
  res.status(200).json({ status: "success", data: "Active User" });
});</code></pre>
<h3>3. Common HTTP Status Codes</h3>
<ul><li>  <strong>200 (OK)</strong>: Request succeeded.</li><li>  <strong>201 (Created)</strong>: Resource created successfully (e.g., user registered).</li><li>  <strong>400 (Bad Request)</strong>: The client sent invalid data (e.g., missing password).</li><li>  <strong>401 (Unauthorized)</strong>: Client needs to log in first.</li><li>  <strong>403 (Forbidden)</strong>: Client logged in but doesn't have admin permissions.</li><li>  <strong>404 (Not Found)</strong>: Page or API resource doesn't exist.</li><li>  <strong>500 (Internal Server Error)</strong>: The server crashed.</li></ul>
<h3>4. Static Files & Environment Variables</h3>
<p>To serve images, CSS, and client-side JavaScript, use the built-in static middleware:</p>
<pre><code>app.use(express.static('public')); // Serves files in a folder named 'public'</code></pre>
<p>For environment variables, use the <code>dotenv</code> library:</p>
<pre><code>require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;</code></pre>
<hr>
`
    },
    {
        id: 'mod3',
        title: 'Module 3: Routing',
        content: `<h3>1. Basic Routing</h3>
<p>Routes map incoming URLs and HTTP methods to specific code blocks:</p>
<pre><code>app.get('/about', (req, res) =&gt; res.send('About Us'));
app.post('/contact', (req, res) =&gt; res.send('Form Submitted'));</code></pre>
<h3>2. Route Parameters (\`req.params\`)</h3>
<p>Dynamic parameters built directly into the path string:</p>
<pre><code>// URL: /books/harry-potter
app.get('/books/:bookName', (req, res) =&gt; {
  res.send(\`You requested: \${req.params.bookName}\`);
});</code></pre>
<h3>3. Query Parameters (\`req.query\`)</h3>
<p>Optional parameters added at the end of the URL starting with <code>?</code>:</p>
<pre><code>// URL: /filter?color=red&size=medium
app.get('/filter', (req, res) =&gt; {
  const { color, size } = req.query;
  res.json({ color, size });
});</code></pre>
<h3>4. Express Router</h3>
<p>Helps structure routes modularly.</p>
<pre><code>// routes/productRoutes.js
const express = require('express');
const router = express.Router();

router.get('/all', (req, res) =&gt; res.send('All Products'));
router.get('/featured', (req, res) =&gt; res.send('Featured Products'));

module.exports = router;</code></pre>
<pre><code>// index.js
const productRouter = require('./routes/productRoutes');
app.use('/products', productRouter); // Enpoints: /products/all, /products/featured</code></pre>
<hr>
`
    },
    {
        id: 'mod4',
        title: 'Module 4: Middleware',
        content: `<h3>1. What is Middleware?</h3>
<p>Middleware functions are functions that execute in sequence during the Request-Response cycle. They can inspect, modify, or block the request.</p>
<pre><code>Request ➔ Middleware 1 (Check Login) ➔ Middleware 2 (Log request) ➔ Route Handler</code></pre>
<h3>2. Custom Middleware Example</h3>
<pre><code>const checkAge = (req, res, next) =&gt; {
  const age = req.query.age;
  if (!age || age &lt; 18) {
    return res.status(400).send('You must be 18 or older!');
  }
  next(); // Proceed to the route handler
};

app.get('/restricted-zone', checkAge, (req, res) =&gt; {
  res.send('Welcome to the restricted zone!');
});</code></pre>
<h3>3. Third-Party Middleware</h3>
<ul><li>  <strong>Morgan</strong>: Logs requests.</li><li>  <strong>CORS</strong>: Enables cross-origin requests.</li><li>  <strong>Helmet</strong>: Secures response HTTP headers.</li></ul>
<pre><code>const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());</code></pre>
<hr>
`
    },
    {
        id: 'mod5',
        title: 'Module 5: Request  Response Helpers',
        content: `<h3>1. Sending JSON responses</h3>
<pre><code>res.status(200).json({ success: true, list: [] });</code></pre>
<h3>2. Sending Files</h3>
<pre><code>const path = require('path');
app.get('/download-report', (req, res) =&gt; {
  res.sendFile(path.join(__dirname, 'reports', 'july.pdf'));
});</code></pre>
<h3>3. Redirects</h3>
<pre><code>app.get('/old-page', (req, res) =&gt; {
  res.redirect('/new-page');
});</code></pre>
<hr>
`
    },
    {
        id: 'mod6',
        title: 'Module 6: Template Engines EJS',
        content: `<p>Template engines allow you to render dynamic HTML pages on the server by mixing static HTML with JavaScript database data.</p>
<h3>1. Setting up EJS</h3>
<pre><code>npm install ejs</code></pre>
<pre><code>app.set('view engine', 'ejs');</code></pre>
<h3>2. Creating a View (\`views/index.ejs\`)</h3>
<pre><code>&lt;h1&gt;Hello, &lt;%= username %&gt;!&lt;/h1&gt;
&lt;ul&gt;
  &lt;% items.forEach(item =&gt; { %&gt;
    &lt;li&gt;&lt;%= item %&gt;&lt;/li&gt;
  &lt;% }) %&gt;
&lt;/ul&gt;</code></pre>
<h3>3. Rendering EJS</h3>
<pre><code>app.get('/dashboard', (req, res) =&gt; {
  res.render('index', { username: 'Pinku', items: ['Pen', 'Notebook', 'Backpack'] });
});</code></pre>
<hr>
`
    },
    {
        id: 'mod7',
        title: 'Module 7: Database Integration MongoDB  Mongoose',
        content: `<h3>1. Schema & Model</h3>
<p>A Schema is a blueprint that defines the structure of documents within a MongoDB collection.</p>
<pre><code>const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;</code></pre>
<h3>2. Connecting to DB</h3>
<pre><code>mongoose.connect('mongodb://localhost:27017/shopDB')
  .then(() =&gt; console.log('Connected to Database'))
  .catch(err =&gt; console.error(err));</code></pre>
<hr>
`
    },
    {
        id: 'mod8',
        title: 'Module 8: REST API Development',
        content: `<p>A standard API allows clients to read and write database items using REST practices:</p>
<pre><code>const express = require('express');
const Product = require('./Product');
const router = express.Router();

// Get list
router.get('/products', async (req, res) =&gt; {
  const list = await Product.find();
  res.status(200).json(list);
});

// Create product
router.post('/products', async (req, res) =&gt; {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
});

module.exports = router;</code></pre>
<hr>
`
    },
    {
        id: 'mod9',
        title: 'Module 9: Authentication  Authorization',
        content: `<h3>1. Hashing Passwords (\`bcryptjs\`)</h3>
<p>Never save plain-text passwords. Scramble passwords using bcrypt.</p>
<pre><code>const bcrypt = require('bcryptjs');

// Signup
const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(req.body.password, salt);</code></pre>
<h3>2. Auth with JWT (JSON Web Token)</h3>
<p>JWT is a secure passport issued to clients upon successful authentication.</p>
<pre><code>const jwt = require('jsonwebtoken');

// Logged in
const token = jwt.sign({ userId: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
res.json({ token });</code></pre>
<hr>
`
    },
    {
        id: 'mod10',
        title: 'Module 10: File Upload  Email',
        content: `<h3>1. Uploading Files with Multer</h3>
<pre><code>const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('avatar'), (req, res) =&gt; {
  res.send('File uploaded successfully!');
});</code></pre>
<h3>2. Sending Emails with Nodemailer</h3>
<pre><code>const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: 'myemail@gmail.com', pass: 'mypassword' }
});

const mailOptions = {
  from: 'myemail@gmail.com',
  to: 'receiver@gmail.com',
  subject: 'Test Email from Express',
  text: 'Hello from Express!'
};

transporter.sendMail(mailOptions, (error, info) =&gt; {
  if (error) console.log(error);
  else console.log('Email sent: ' + info.response);
});</code></pre>
<hr>
`
    },
    {
        id: 'mod11',
        title: 'Module 11: Error Handling  Validation',
        content: `<h3>1. Validation with express-validator</h3>
<pre><code>const { body, validationResult } = require('express-validator');

app.post('/register', [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], (req, res) =&gt; {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('Valid Data!');
});</code></pre>
<h3>2. Global Error Middleware</h3>
<pre><code>app.use((err, req, res, next) =&gt; {
  res.status(err.status || 500).json({ error: err.message || 'Server Error' });
});</code></pre>
<hr>
`
    },
    {
        id: 'mod12',
        title: 'Module 12: Security Best Practices',
        content: `<p>1.  <strong>Helmet</strong>: Adds secure headers.</p>
<p>    <code></code>\`javascript</p>
<p>    const helmet = require('helmet');</p>
<p>    app.use(helmet());</p>
<p>    <code></code>\`</p>
<p>2.  <strong>Rate Limiter</strong>: Blocks brute force requests.</p>
<p>    <code></code>\`javascript</p>
<p>    const rateLimit = require('express-rate-limit');</p>
<p>    const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 });</p>
<p>    app.use(limiter);</p>
<p>    <code></code>\`</p>
<p>3.  <strong>Sanitization</strong>: Prevent injection attacks by cleaning data.</p>
<hr>
`
    },
    {
        id: 'mod13',
        title: 'Module 13: Testing  Debugging',
        content: `<p>Automate endpoint verification using Jest and Supertest.</p>
<pre><code>const request = require('supertest');
const app = require('./app'); // export app in app.js

describe('GET /', () =&gt; {
  it('should respond with welcome message', async () =&gt; {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Welcome to Express! 🚀');
  });
});</code></pre>
<hr>
`
    },
    {
        id: 'mod14',
        title: 'Module 14: Deployment',
        content: `<p>1.  <strong>Environment Setup</strong>: Change configuration dynamically with <code>.env</code> settings.</p>
<p>2.  <strong>Process Manager (PM2)</strong>: Keep backend apps running continuously in background processes.</p>
<p>    <code></code>\`bash</p>
<p>    npm install pm2 -g</p>
<p>    pm2 start index.js --name "my-app"</p>
<p>    <code></code>\`</p>
<p>3.  <strong>Cloud Platforms</strong>: Deploy directly onto platforms like Render, Railway, or VPS servers.</p>
<hr>
`
    },
    {
        id: 'mod15',
        title: 'Module 15: Best Practices MVC Architecture',
        content: `<p>Structure large apps logically:</p>
<ul><li>  <strong>Model</strong>: Schemas defining data layout.</li><li>  <strong>View</strong>: Frontend display code (HTML/EJS).</li><li>  <strong>Controller</strong>: Endpoint query execution and logic.</li></ul>
<pre><code>📁 project-root
  📁 controllers  ➔ (Business Logic)
  📁 models       ➔ (Database schemas)
  📁 routes       ➔ (Router configurations)
  📁 views        ➔ (EJS templates)
  📄 server.js</code></pre>
<hr>
`
    },
    {
        id: 'mod16',
        title: 'Module 16: Practice  Interview Prep',
        content: `<h3>10 Critical Interview Questions:</h3>
<p>1.  <strong>What is Express middleware?</strong></p>
<p>    *   *Answer*: A function that intercepts the request and response cycle, letting you run code, edit parameters, or block execution.</p>
<p>2.  <strong>Explain the difference between <code>req.params</code> and <code>req.query</code>.</strong></p>
<p>    *   *Answer*: <code>req.params</code> grabs variables inside the actual URL path (like <code>/user/:id</code>). <code>req.query</code> parses options added after <code>?</code> (like <code>/search?q=query</code>).</p>
<p>3.  <strong>What is the purpose of <code>next()</code>?</strong></p>
<p>    *   *Answer*: It executes the subsequent middleware inline. Without it, requests remain hanging indefinitely.</p>
<p>4.  <strong>How do you handle async errors in Express 4?</strong></p>
<p>    *   *Answer*: By wrapping async code block calls in a <code>try/catch</code> block and passing the caught error to <code>next(error)</code>.</p>
<p>5.  <strong>How do you serve static assets like CSS?</strong></p>
<p>    *   *Answer*: Using the built-in <code>express.static()</code> middleware.</p>
<p>6.  <strong>Why use CORS middleware?</strong></p>
<p>    *   *Answer*: Web browsers block APIs accessed from other domain origins. CORS clears these security boundaries.</p>
<p>7.  <strong>What does <code>app.use()</code> do?</strong></p>
<p>    *   *Answer*: It mounts global middleware on the app instance.</p>
<p>8.  <strong>Difference between <code>res.send()</code> and <code>res.json()</code>?</strong></p>
<p>    *   *Answer*: <code>res.send()</code> sends general formats (strings, HTML). <code>res.json()</code> automatically stringifies JSON and sets the headers correct content-type.</p>
<p>9.  <strong>What is PM2?</strong></p>
<p>    *   *Answer*: A production process manager that restarts scripts instantly if they crash.</p>
<p>10. <strong>What is Helmet?</strong></p>
<p>    *   *Answer*: A middleware security library that hides server specs and locks headers.</p>
<hr>
`
    },
    {
        id: 'mod17',
        title: 'Module 17: Projects',
        content: `<h3>Project: Complete Task Manager API Schema (Ready to Use)</h3>
<pre><code>const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);</code></pre>
<p>Use this scheme within the REST setup in Module 8 to build a completely operational backend.</p>
`
    }
];


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
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
});
