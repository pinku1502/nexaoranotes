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
            title: 'Module 1: Introduction (The Digital Filing Cabinet)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch2',
            title: '1. What is MySQL?',
            content: `\n<p>Imagine a massive hospital. If they stored patient records in a text file or an Excel sheet, it would take hours to find one patient, and if two doctors tried to edit a file at the same time, the file would corrupt.<br><strong>MySQL</strong> is a Relational Database Management System (RDBMS). It is a highly optimized, hyper-fast software designed specifically to store, organize, and retrieve massive amounts of data instantly.</p>

<p>#</p>\n`
        },
        {
            id: 'ch3',
            title: '2. SQL vs MySQL',
            content: `\n<p><em>   <strong>SQL (Structured Query Language):</strong> The </em>language* you speak. (Like English).<br><em>   <strong>MySQL:</strong> The </em>software* that listens to the language and manages the data. (Like the person you are speaking English to).<br><em>Analogy:</em> SQL is the steering wheel, MySQL is the engine.</p>

<p>#</p>\n`
        },
        {
            id: 'ch4',
            title: '3. Core Database Concepts',
            content: `\n<ul>
<li><strong>Database:</strong> The entire Filing Cabinet.</li>
<li><strong>Table:</strong> A specific Drawer inside the cabinet (e.g., <code>Users</code> drawer, <code>Products</code> drawer).</li>
<li><strong>Row (Record):</strong> A single Manila Folder inside the drawer (e.g., One specific user's data).</li>
<li><strong>Column (Field):</strong> The specific lines of information on the folder (e.g., Name, Age, Email).</li>
</ul>

<p>---</p>\n`
        },
        {
            id: 'ch5',
            title: '🏗️ Module 2: Database Basics (Building the Warehouse)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch6',
            title: '1. Creating and Using a Database',
            content: `\n<p>Before you can store data, you must build the warehouse.</p>

<pre><code>-- Creates a brand new empty database named 'amazon_db'
CREATE DATABASE amazon_db;

-- Tells MySQL: "I want to work inside this specific database now!"
USE amazon_db;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch7',
            title: '2. Creating Tables (Defining the Blueprint)',
            content: `\n<p>You cannot just throw data into a database. You must define EXACTLY what columns the table has.</p>

<pre><code>-- Creating a 'users' table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    age INT
);
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch8',
            title: '3. Altering Tables (Modifying the Blueprint)',
            content: `\n<p>Oh no! We forgot to add an email column to our table! We use <code>ALTER</code>.</p>

<pre><code>-- Adds a new column named 'email' to the existing 'users' table
ALTER TABLE users ADD email VARCHAR(100);

-- Deletes the 'age' column completely
ALTER TABLE users DROP COLUMN age;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch9',
            title: '4. Dropping vs Truncating (The Nuclear Options)',
            content: `\n<ul>
<li><strong><code>DROP TABLE users;</code></strong>: Drops a nuclear bomb. Deletes the data AND deletes the entire table structure.</li>
<li><strong><code>TRUNCATE TABLE users;</code></strong>: Takes a vacuum cleaner. Deletes all the data inside, but keeps the empty table ready for new data.</li>
</ul>

<p>---</p>\n`
        },
        {
            id: 'ch10',
            title: '📊 Module 3: Data Types (Strict Data Rules)',
            content: `\n<p>MySQL is strict. You must define what type of data goes into each column.</p>

<p>#</p>\n`
        },
        {
            id: 'ch11',
            title: '1. Numeric Data Types',
            content: `\n<ul>
<li><strong><code>INT</code></strong>: Whole numbers (e.g., <code>100</code>, <code>-50</code>).</li>
<li><strong><code>DECIMAL(5, 2)</code></strong>: Exact decimals. The <code>5</code> means 5 total digits allowed. The <code>2</code> means 2 digits after the decimal. (e.g., <code>999.99</code>). Great for Money!</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch12',
            title: '2. String Data Types',
            content: `\n<ul>
<li><strong><code>CHAR(10)</code></strong>: Fixed length. If you store "Cat", it will add 7 invisible spaces to force it to be 10 characters long. (Fast, but wastes space).</li>
<li><strong><code>VARCHAR(255)</code></strong>: Variable length. If you store "Cat", it only takes up 3 spaces. (Saves space, slightly slower).</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch13',
            title: '3. Date & Time',
            content: `\n<ul>
<li><strong><code>DATE</code></strong>: YYYY-MM-DD (e.g., <code>2024-12-25</code>)</li>
<li><strong><code>TIMESTAMP</code></strong>: Logs the exact Date AND Time down to the second (e.g., <code>2024-12-25 14:30:00</code>). Perfect for "Account Created At" logs.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch14',
            title: '4. ENUM (The Dropdown List)',
            content: `\n<p>Restricts the column so it can ONLY accept specific predefined words.</p>

<pre><code>CREATE TABLE orders (
    id INT,
    status ENUM('Pending', 'Shipped', 'Delivered') -- Only these 3 words are allowed!
);
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch15',
            title: '✍️ Module 4: CRUD Operations (The Core 4 Commands)',
            content: `\n<p>CRUD stands for Create, Read, Update, Delete. These are the 4 actions you do 99% of the time.</p>

<p>#</p>\n`
        },
        {
            id: 'ch16',
            title: '1. INSERT (Create)',
            content: `\n<p>Putting new folders into the filing cabinet.</p>

<pre><code>-- Adding a single new user
INSERT INTO users (username, email) 
VALUES ('Alex_99', 'alex@test.com');

-- Adding multiple users at once!
INSERT INTO users (username, email) 
VALUES 
('Sarah', 'sarah@test.com'),
('John', 'john@test.com');
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch17',
            title: '2. SELECT (Read)',
            content: `\n<p>Asking MySQL to find specific data and show it to you.</p>

<pre><code>-- The '*' means "Give me EVERY column" from the table.
SELECT * FROM users;

-- Give me ONLY the usernames, nothing else.
SELECT username FROM users;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch18',
            title: '3. UPDATE (Update)',
            content: `\n<p>Changing existing data. <strong>WARNING:</strong> Always use <code>WHERE</code>! If you forget <code>WHERE</code>, you will accidentally update EVERY user in the database!</p>

<pre><code>-- Changes Sarah's email safely
UPDATE users 
SET email = 'sarah_new@test.com' 
WHERE username = 'Sarah';
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch19',
            title: '4. DELETE (Delete)',
            content: `\n<p>Removing a row completely. <strong>WARNING:</strong> Again, ALWAYS use <code>WHERE</code>!</p>

<pre><code>-- Deletes John from the database
DELETE FROM users WHERE username = 'John';
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch20',
            title: '5. Filtering (WHERE, LIKE, IN)',
            content: `\n<pre><code>-- Give me users who are exactly 25 years old
SELECT * FROM users WHERE age = 25;

-- Give me users whose email ends with '@gmail.com' (The % is a wildcard meaning 'anything')
SELECT * FROM users WHERE email LIKE '%@gmail.com';

-- Give me users who are either 20, 25, or 30 years old
SELECT * FROM users WHERE age IN (20, 25, 30);
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch21',
            title: '🔍 Module 5: Operators (The Logic Gates)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch22',
            title: '1. Comparison & Logical Operators',
            content: `\n<ul>
<li><code>=</code> (Equal)</li>
<li><code>!=</code> or <code><></code> (Not Equal)</li>
<li><code>></code> (Greater Than), <code><</code> (Less Than)</li>
<li><code>AND</code> (Both conditions must be true)</li>
<li><code>OR</code> (Only one condition needs to be true)</li>
</ul>

<pre><code>-- Find expensive products that are currently in stock
SELECT * FROM products 
WHERE price > 500 AND stock_quantity > 0;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch23',
            title: '2. BETWEEN (Range Queries)',
            content: `\n<p>Used to find data within a specific range (great for Dates or Prices).</p>

<pre><code>-- Find products priced between \$50 and \$100
SELECT * FROM products 
WHERE price BETWEEN 50 AND 100;

-- Find employees hired in the year 2023
SELECT * FROM employees 
WHERE hire_date BETWEEN '2023-01-01' AND '2023-12-31';
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch24',
            title: '📈 Module 6: Functions (Built-in Calculators)',
            content: `\n<p>MySQL has built-in calculators to process data on the fly.</p>

<p>#</p>\n`
        },
        {
            id: 'ch25',
            title: '1. Aggregate Functions (Math on the entire table)',
            content: `\n<ul>
<li><strong><code>COUNT()</code></strong>: Counts rows.</li>
<li><strong><code>SUM()</code></strong>: Adds up numbers.</li>
<li><strong><code>AVG()</code></strong>: Calculates the average.</li>
</ul>

<pre><code>-- Find out exactly how many total users are registered
SELECT COUNT(*) FROM users;

-- Find the total amount of money made from all orders
SELECT SUM(total_price) FROM orders;

-- Find the average age of all users
SELECT AVG(age) FROM users;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch26',
            title: '2. String Functions',
            content: `\n<pre><code>-- Join First Name and Last Name into one column called 'Full_Name'
SELECT CONCAT(first_name, ' ', last_name) AS Full_Name FROM users;

-- Find the length of a string
SELECT LENGTH(username) FROM users;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch27',
            title: '3. Date Functions',
            content: `\n<pre><code>-- Get the current date and time right now
SELECT NOW();

-- Calculate how many days ago a user created their account
SELECT DATEDIFF(NOW(), created_at) AS Days_Active FROM users;
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch28',
            title: '🔗 Module 7: Constraints (The Unbreakable Rules)',
            content: `\n<p>Constraints are the strict rules applied to columns to ensure the database doesn't get polluted with bad data.</p>

<p>#</p>\n`
        },
        {
            id: 'ch29',
            title: '1. PRIMARY KEY & AUTO_INCREMENT',
            content: `\n<p>The <strong>Primary Key</strong> is a unique identifier (like a Social Security Number) for every row. <code>AUTO_INCREMENT</code> tells MySQL to automatically generate the number (1, 2, 3...) so you don't have to!</p>

<pre><code>CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch30',
            title: '2. UNIQUE and NOT NULL',
            content: `\n<ul>
<li><strong><code>UNIQUE</code></strong>: Guarantees no two rows can have the same value (e.g., Email addresses).</li>
<li><strong><code>NOT NULL</code></strong>: Guarantees a column cannot be left empty.</li>
</ul>

<pre><code>CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL, -- Must exist, and must be unique!
    username VARCHAR(50) NOT NULL       -- Must exist!
);
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch31',
            title: '3. FOREIGN KEY (The Relationship Link)',
            content: `\n<p>A Foreign Key links one table to another. If a User places an Order, the <code>orders</code> table needs to know <em>which</em> user placed it!</p>

<pre><code>CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    total_amount DECIMAL(10,2),
    user_id INT, -- This is the link!
    FOREIGN KEY (user_id) REFERENCES users(id) -- Forces the user_id to actually exist in the users table!
);
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch32',
            title: '📚 Module 8: Joins (Stitching Tables Together)',
            content: `\n<p>When you use a Foreign Key to link tables, you use a <code>JOIN</code> to stitch them back together when reading data.</p>

<p>#</p>\n`
        },
        {
            id: 'ch33',
            title: '1. INNER JOIN (The Overlap)',
            content: `\n<p>Returns ONLY the rows where there is a match in BOTH tables.</p>

<pre><code>-- Get all orders, and stitch the User's name onto the result!
SELECT users.username, orders.total_amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch34',
            title: '2. LEFT JOIN',
            content: `\n<p>Returns ALL rows from the Left table (Users), and matching rows from the Right table (Orders). If a user has zero orders, they still show up, but their order amount will just say <code>NULL</code>.</p>

<pre><code>-- Show every single user, even if they haven't bought anything yet!
SELECT users.username, orders.total_amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch35',
            title: '📂 Module 9: Advanced Queries (Data Mining)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch36',
            title: '1. GROUP BY & HAVING',
            content: `\n<p>Used with Aggregate functions to group rows that have the same values into summary rows.</p>

<pre><code>-- Find out how many users live in each specific city
SELECT city, COUNT(*) AS Total_Users 
FROM users 
GROUP BY city;

-- Same as above, but ONLY show cities that have MORE than 100 users!
SELECT city, COUNT(*) AS Total_Users 
FROM users 
GROUP BY city 
HAVING COUNT(*) > 100; -- (You cannot use WHERE for Aggregate functions, you MUST use HAVING)
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch37',
            title: '2. Subqueries (Queries inside Queries)',
            content: `\n<pre><code>-- Find the names of users who placed the most expensive order
SELECT username FROM users 
WHERE id = (SELECT user_id FROM orders ORDER BY total_amount DESC LIMIT 1);
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch38',
            title: '📑 Module 10: Views & Indexes (Shortcuts & Speed)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch39',
            title: '1. Views (Virtual Tables)',
            content: `\n<p>A View is a saved SQL query that acts like a real table. It is great for saving complex JOINs so you don't have to type them out every day.</p>

<pre><code>-- Create a shortcut view
CREATE VIEW user_order_summary AS
SELECT users.username, SUM(orders.total_amount) AS total_spent
FROM users JOIN orders ON users.id = orders.user_id GROUP BY users.username;

-- Now you can just query the View!
SELECT * FROM user_order_summary;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch40',
            title: '2. Indexes (The Book Glossary)',
            content: `\n<p>If a table has 10 Million rows, searching for a specific email will take forever. An <code>INDEX</code> creates a hidden alphabetized list (like a glossary at the back of a book) making searches lighting fast.</p>

<pre><code>-- Makes searching for emails 100x faster!
CREATE INDEX idx_email ON users(email);
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch41',
            title: '🔄 Module 11: Stored Programs (Database Scripts)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch42',
            title: '1. Stored Procedures',
            content: `\n<p>A saved script of multiple SQL commands that you can execute with one call.</p>

<pre><code>DELIMITER //
CREATE PROCEDURE DeleteOldUsers()
BEGIN
    DELETE FROM users WHERE last_login < '2020-01-01';
    SELECT 'Old users deleted successfully!';
END //
DELIMITER ;

-- Execute the script
CALL DeleteOldUsers();
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch43',
            title: '2. Triggers (Automatic Reactions)',
            content: `\n<p>A Trigger is a script that automatically runs BEFORE or AFTER a specific action occurs. (e.g., Automatically log a message when a user deletes their account).</p>

<pre><code>CREATE TRIGGER after_user_delete
AFTER DELETE ON users
FOR EACH ROW
INSERT INTO audit_log (action, user_id) VALUES ('Deleted User', OLD.id);
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch44',
            title: '🔐 Module 12: Transactions (The Safety Net)',
            content: `\n<p>Imagine transferring \$1000 from Bank A to Bank B. <br><li>Bank A subtracts \$1000.</li><br><li>The Database crashes!</li><br><li>Bank B never receives the \$1000. The money is lost forever!</li></p>

<p>A <strong>Transaction</strong> groups multiple queries into a single "All or Nothing" block. If one step fails, the entire transaction reverses (rolls back) so the database is never left in a broken state.</p>

<p>#</p>\n`
        },
        {
            id: 'ch45',
            title: '1. COMMIT and ROLLBACK',
            content: `\n<pre><code>START TRANSACTION;

-- Step 1: Subtract money from Alice
UPDATE bank_accounts SET balance = balance - 1000 WHERE name = 'Alice';

-- Step 2: Add money to Bob
UPDATE bank_accounts SET balance = balance + 1000 WHERE name = 'Bob';

-- If both steps succeed, we permanently save the changes!
COMMIT; 

-- If the database senses an error, it will automatically cancel everything!
-- ROLLBACK;
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch46',
            title: '👥 Module 13: User Management & Security',
            content: `\n<p>You should NEVER give your Node.js or Python backend the "Root" database password. If a hacker breaches your server, they can delete the entire database. You create a special, limited user instead.</p>

<p>#</p>\n`
        },
        {
            id: 'ch47',
            title: '1. Creating Users & Granting Privileges',
            content: `\n<pre><code>-- Create a new user just for the web application
CREATE USER 'webapp_user'@'localhost' IDENTIFIED BY 'SuperSecretPass123';

-- Give them permission to READ and UPDATE data, but NOT to DROP (delete) tables!
GRANT SELECT, INSERT, UPDATE ON amazon_db.* TO 'webapp_user'@'localhost';

-- If they misbehave, revoke their permissions!
REVOKE UPDATE ON amazon_db.* FROM 'webapp_user'@'localhost';
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch48',
            title: '⚡ Module 14: Performance Optimization',
            content: `\n<p>If your website takes 10 seconds to load a page, your SQL queries are too slow.</p>

<p>#</p>\n`
        },
        {
            id: 'ch49',
            title: '1. EXPLAIN (The X-Ray Machine)',
            content: `\n<p>Put <code>EXPLAIN</code> in front of any query, and MySQL won't run it. Instead, it will give you a detailed report of exactly how many milliseconds it takes to search, and whether it was forced to scan every single row to find the answer.</p>

<pre><code>-- Find out exactly why this query is slow!
EXPLAIN SELECT * FROM users WHERE email = 'test@test.com';
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch50',
            title: '2. Normalization (Reducing Clutter)',
            content: `\n<p>Normalization is the process of splitting one giant, messy table into multiple smaller tables, and connecting them with Foreign Keys to prevent duplicate data.</p>

<p>---</p>\n`
        },
        {
            id: 'ch51',
            title: '🔄 Module 15: Backup & Restore (Disaster Recovery)',
            content: `\n<p>If the physical server catches on fire, you must have a backup file (a <code>.sql</code> dump).</p>

<p>#</p>\n`
        },
        {
            id: 'ch52',
            title: '1. Command Line Export (Backup)',
            content: `\n<p>You execute this in your computer's terminal, NOT inside MySQL!</p>

<pre><code># This command takes the entire amazon_db and spits out a text file containing 
# all the SQL commands needed to perfectly recreate it.
mysqldump -u root -p amazon_db > backup_file.sql
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch53',
            title: '2. Command Line Import (Restore)',
            content: `\n<pre><code># Restores the database from the backup file
mysql -u root -p amazon_db < backup_file.sql
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch54',
            title: '💻 Module 16: MySQL with Programming (The Real World)',
            content: `\n<p>You rarely type SQL directly into the command line. You usually write Python, Java, or Node.js code that connects to MySQL and runs the queries for you!</p>

<p>#</p>\n`
        },
        {
            id: 'ch55',
            title: '1. Parameterized Queries (Stopping Hackers)',
            content: `\n<p><strong>CRITICAL:</strong> If you just inject user input directly into an SQL string, hackers will use <strong>SQL Injection</strong> to drop your tables. You MUST use Parameterized Queries (using <code>?</code> placeholders).</p>

<p><strong>Example in Node.js / JavaScript:</strong></p>

<pre><code>const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'amazon_db'
});

// VERY BAD (Hacker can delete table):
// db.query(\`SELECT * FROM users WHERE email = '\${userInput}'\`);

// PERFECT & SECURE (Uses the ? placeholder):
db.query(
    'SELECT * FROM users WHERE email = ?', 
    [userInput], 
    (err, results) => {
        console.log(results);
    }
);
</code></pre>

<p><strong><em>End of MySQL Masterclass</strong></em></p>\n`
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
