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
            title: 'Module 1: Introduction to SQL (The Universal Data Language)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch2',
            title: '1. What is SQL?',
            content: `\n<p>Imagine you walk into a massive, 100-story library looking for one specific book. If you ask the librarian in English, they understand you. <br><strong>SQL (Structured Query Language)</strong> is the universal language you use to speak to databases. Whether you are using MySQL, PostgreSQL, Oracle, or SQL Server, they all understand SQL.</p>

<p>#</p>\n`
        },
        {
            id: 'ch3',
            title: '2. SQL vs MySQL',
            content: `\n<p><em>   <strong>SQL:</strong> The </em>Language* (English).<br><em>   <strong>MySQL / PostgreSQL / Oracle:</strong> The </em>Database Engines* (The actual Librarians who understand the language and fetch the books).</p>

<p>#</p>\n`
        },
        {
            id: 'ch4',
            title: '3. DBMS vs RDBMS',
            content: `\n<ul>
<li><strong>DBMS (Database Management System):</strong> A generic system for storing data. (Like a messy pile of folders).</li>
<li><strong>RDBMS (Relational DBMS):</strong> Stores data in strict <strong>Tables</strong> (Rows and Columns) that are mathematically linked (related) to each other. (Like a perfectly organized spreadsheet).</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch5',
            title: '4. SQL Syntax Rules',
            content: `\n<ul>
<li>SQL commands are <strong>case-insensitive</strong> (<code>SELECT</code> is the same as <code>select</code>), but by convention, we capitalize commands to make them easy to read.</li>
<li>Every SQL command must end with a semicolon <code>;</code>.</li>
</ul>

<p>---</p>\n`
        },
        {
            id: 'ch6',
            title: '🏗️ Module 2: Database & Table Operations (DDL - Data Definition Language)',
            content: `\n<p>DDL commands are used to build the physical architecture of the database (the tables and columns). You don't use DDL to add user data; you use it to build the structure.</p>

<p>#</p>\n`
        },
        {
            id: 'ch7',
            title: '1. Database Operations',
            content: `\n<pre><code>-- Create a new, empty warehouse
CREATE DATABASE tech_company;

-- You must tell the engine WHICH database you want to work inside!
USE tech_company;

-- Nuclear Option: Completely destroy the database and everything inside it
DROP DATABASE tech_company;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch8',
            title: '2. Table Operations',
            content: `\n<p>You must define the exact blueprint of a table before adding data.</p>

<pre><code>-- Creating a table
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50)
);

-- Adding a new column to an existing table
ALTER TABLE employees ADD salary DECIMAL(10, 2);

-- Erasing all data inside the table, but keeping the empty structure
TRUNCATE TABLE employees;

-- Nuclear Option: Destroy the table completely
DROP TABLE employees;
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch9',
            title: '✍️ Module 3: CRUD Operations (DML - Data Manipulation Language)',
            content: `\n<p>DML is what you use 99% of the time. It is how you Create, Read, Update, and Delete actual user data inside your tables.</p>

<p>#</p>\n`
        },
        {
            id: 'ch10',
            title: '1. INSERT (Create)',
            content: `\n<pre><code>-- Insert a single row
INSERT INTO employees (id, name, department, salary)
VALUES (1, 'Alice Smith', 'Engineering', 95000.00);

-- Insert MULTIPLE rows at lightning speed!
INSERT INTO employees (id, name, department, salary)
VALUES 
(2, 'Bob Jones', 'HR', 65000.00),
(3, 'Charlie Brown', 'Engineering', 105000.00);
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch11',
            title: '2. UPDATE (Modify)',
            content: `\n<p><strong>CRITICAL WARNING:</strong> Always use a <code>WHERE</code> clause! If you just write <code>UPDATE employees SET salary = 0;</code>, you will bankrupt every single employee in the company!</p>

<pre><code>-- Safe update
UPDATE employees 
SET salary = 110000.00 
WHERE name = 'Charlie Brown';
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch12',
            title: '3. DELETE (Remove)',
            content: `\n<p><strong>CRITICAL WARNING:</strong> Always use <code>WHERE</code>!</p>

<pre><code>-- Safe delete
DELETE FROM employees WHERE id = 2;
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch13',
            title: '🔍 Module 4: Querying Data (DQL - Data Query Language)',
            content: `\n<p>DQL is purely for <em>reading</em> data. It never modifies or breaks anything.</p>

<p>#</p>\n`
        },
        {
            id: 'ch14',
            title: '1. The Mighty SELECT',
            content: `\n<pre><code>-- Read every column from every row
SELECT * FROM employees;

-- Read ONLY the names and salaries (saves massive memory)
SELECT name, salary FROM employees;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch15',
            title: '2. DISTINCT (Removing Duplicates)',
            content: `\n<p>If you want to know all the different departments in your company, but you have 10,000 employees, you don't want to see "Engineering" 5,000 times.</p>

<pre><code>-- Returns a clean list of unique departments
SELECT DISTINCT department FROM employees;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch16',
            title: '3. LIMIT and OFFSET (Pagination)',
            content: `\n<p>If Amazon returned all 50 million products at once, your browser would crash. You must paginate!</p>

<pre><code>-- Show the first 10 employees
SELECT * FROM employees LIMIT 10;

-- Skip the first 10, and show the next 10 (Page 2)
SELECT * FROM employees LIMIT 10 OFFSET 10;
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch17',
            title: '⚡ Module 5: Operators (The Logic Engine)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch18',
            title: '1. Comparison & Logical Operators',
            content: `\n<pre><code>-- Find high earners in the Engineering department
SELECT * FROM employees 
WHERE salary > 100000 AND department = 'Engineering';
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch19',
            title: '2. IN and BETWEEN (Clean Code)',
            content: `\n<pre><code>-- BAD: 
SELECT * FROM employees WHERE department = 'HR' OR department = 'Sales' OR department = 'IT';

-- GOOD (Using IN):
SELECT * FROM employees WHERE department IN ('HR', 'Sales', 'IT');

-- Finding ranges using BETWEEN
SELECT * FROM employees WHERE salary BETWEEN 60000 AND 90000;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch20',
            title: '3. LIKE and Wildcards (The Search Engine)',
            content: `\n<ul>
<li><code>%</code> represents ZERO or MORE unknown characters.</li>
<li><code>_</code> represents exactly ONE unknown character.</li>
</ul>

<pre><code>-- Find anyone whose name starts with 'A'
SELECT * FROM employees WHERE name LIKE 'A%';

-- Find anyone whose email ends with '@gmail.com'
SELECT * FROM users WHERE email LIKE '%@gmail.com';
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch21',
            title: '📊 Module 6: Functions (Built-in Calculators)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch22',
            title: '1. Aggregate Functions (Math on the entire table)',
            content: `\n<pre><code>-- Count total employees
SELECT COUNT(*) FROM employees;

-- Find total salary payout
SELECT SUM(salary) FROM employees;

-- Find highest paid employee salary
SELECT MAX(salary) FROM employees;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch23',
            title: '2. String & Date Functions',
            content: `\n<pre><code>-- Force names to be uppercase
SELECT UPPER(name) FROM employees;

-- Get the exact date and time right now
SELECT NOW();

-- Find employees hired exactly 30 days ago
SELECT * FROM employees WHERE DATEDIFF(NOW(), hire_date) = 30;
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch24',
            title: '🔒 Module 7: Constraints (The Unbreakable Rules)',
            content: `\n<p>Constraints are the strict rules applied to columns to ensure the database doesn't get polluted with bad data.</p>

<p>#</p>\n`
        },
        {
            id: 'ch25',
            title: '1. PRIMARY KEY & AUTO_INCREMENT',
            content: `\n<p>The <strong>Primary Key</strong> is a unique identifier (like a Social Security Number) for every row.</p>

<pre><code>CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch26',
            title: '2. UNIQUE, NOT NULL & DEFAULT',
            content: `\n<pre><code>CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL, -- Must exist, and must be unique!
    status VARCHAR(20) DEFAULT 'Active' -- If left blank, it automatically becomes 'Active'
);
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch27',
            title: '🔗 Module 8: Joins (Stitching Tables Together)',
            content: `\n<p>When you use a Foreign Key to link tables, you use a <code>JOIN</code> to stitch them back together when reading data.</p>

<p>#</p>\n`
        },
        {
            id: 'ch28',
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
            id: 'ch29',
            title: '2. LEFT JOIN',
            content: `\n<p>Returns ALL rows from the Left table (Users), and matching rows from the Right table (Orders). If a user has zero orders, their order amount will just say <code>NULL</code>.</p>

<pre><code>-- Show every single user, even if they haven't bought anything yet!
SELECT users.username, orders.total_amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch30',
            title: '📈 Module 9: Advanced SQL (Data Mining)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch31',
            title: '1. GROUP BY & HAVING',
            content: `\n<p>Used with Aggregate functions to group rows that have the same values into summary rows.</p>

<pre><code>-- Find out how many users live in each specific city
SELECT city, COUNT(*) AS Total_Users 
FROM users 
GROUP BY city;

-- ONLY show cities that have MORE than 100 users!
SELECT city, COUNT(*) AS Total_Users 
FROM users 
GROUP BY city 
HAVING COUNT(*) > 100;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch32',
            title: '2. Common Table Expressions (CTE)',
            content: `\n<p>A CTE acts like a temporary variable for a query, making complex queries extremely readable.</p>

<pre><code>-- Step 1: Create a temporary table of high earners
WITH HighEarners AS (
    SELECT * FROM employees WHERE salary > 100000
)
-- Step 2: Query the temporary table!
SELECT * FROM HighEarners WHERE department = 'Engineering';
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch33',
            title: '🪟 Module 10: Window Functions (Advanced Analytics)',
            content: `\n<p>Unlike <code>GROUP BY</code>, Window Functions perform calculations across a set of rows WITHOUT collapsing them into a single row!</p>

<pre><code>-- Rank employees by salary WITHIN their specific department, without collapsing the data!
SELECT 
    name, 
    department, 
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank_in_dept
FROM employees;
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch34',
            title: '📂 Module 11: Views & Indexes (Shortcuts & Speed)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch35',
            title: '1. Views (Virtual Tables)',
            content: `\n<p>A View is a saved SQL query that acts like a real table. Great for saving complex JOINs.</p>

<pre><code>-- Create a shortcut view
CREATE VIEW active_engineers AS
SELECT * FROM employees WHERE department = 'Engineering' AND status = 'Active';

-- Query the View!
SELECT * FROM active_engineers;
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch36',
            title: '2. Indexes (The Book Glossary)',
            content: `\n<p>An <code>INDEX</code> creates a hidden alphabetized list making searches lighting fast.</p>

<pre><code>-- Makes searching for emails 100x faster!
CREATE INDEX idx_email ON users(email);
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch37',
            title: '⚙️ Module 12: Stored Programs (Database Scripts)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch38',
            title: '1. Stored Procedures',
            content: `\n<p>A saved script of multiple SQL commands that you can execute with one call.</p>

<pre><code>DELIMITER //
CREATE PROCEDURE DeleteOldUsers()
BEGIN
    DELETE FROM users WHERE last_login < '2020-01-01';
    SELECT 'Old users deleted successfully!';
END //
DELIMITER ;

CALL DeleteOldUsers();
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch39',
            title: '🔄 Module 13: Transactions (The Safety Net)',
            content: `\n<p>A <strong>Transaction</strong> groups multiple queries into a single "All or Nothing" block. If one step fails, the entire transaction reverses (rolls back).</p>

<pre><code>START TRANSACTION;

-- Step 1: Subtract money from Alice
UPDATE bank_accounts SET balance = balance - 1000 WHERE name = 'Alice';

-- Step 2: Add money to Bob
UPDATE bank_accounts SET balance = balance + 1000 WHERE name = 'Bob';

-- Save changes!
COMMIT; 
-- Or undo if error! ROLLBACK;
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch40',
            title: '👤 Module 14: Security & User Management',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch41',
            title: '1. Creating Users & Granting Privileges',
            content: `\n<pre><code>-- Create a new user
CREATE USER 'webapp_user'@'localhost' IDENTIFIED BY 'Pass123';

-- Give them READ and UPDATE permissions ONLY!
GRANT SELECT, UPDATE ON tech_company.* TO 'webapp_user'@'localhost';
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch42',
            title: '🚀 Module 15: Performance & Optimization',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch43',
            title: '1. Query Optimization & Normalization',
            content: `\n<p>If your website takes 10 seconds to load a page, your SQL queries are too slow.<br><li><strong>Normalization (1NF, 2NF, 3NF):</strong> The process of splitting one giant, messy table into multiple smaller tables, and connecting them with Foreign Keys to prevent duplicate data.</li><br><li><strong>EXPLAIN:</strong> Put <code>EXPLAIN</code> in front of any query to see a detailed Execution Plan of how many milliseconds it takes to search, helping you spot bottlenecks.</li></p>

<pre><code>-- See EXACTLY how MySQL plans to execute this query!
EXPLAIN SELECT * FROM users WHERE email = 'test@test.com';
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch44',
            title: '🔄 Module 16: Backup & Restore (Disaster Recovery)',
            content: `\n<p>If the physical server catches on fire, you must have a backup file (a <code>.sql</code> dump).</p>

<p>#</p>\n`
        },
        {
            id: 'ch45',
            title: '1. Exporting & Importing Data',
            content: `\n<p>You execute these commands in your computer's terminal, NOT inside the SQL prompt!</p>

<pre><code># Export: Spits out a text file containing all the SQL commands needed to perfectly recreate your database.
mysqldump -u root -p tech_company > backup_file.sql

# Restore: Rebuilds the database from the backup file
mysql -u root -p tech_company < backup_file.sql
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch46',
            title: '💻 Module 17: SQL with Programming Languages',
            content: `\n<p>You rarely type SQL directly into the command line. You usually write Python, Java, or Node.js code that connects to SQL and runs the queries for you!</p>

<p>#</p>\n`
        },
        {
            id: 'ch47',
            title: '1. SQL Injection Prevention & Parameterized Queries',
            content: `\n<p><strong>CRITICAL:</strong> If you just inject user input directly into an SQL string, hackers will use <strong>SQL Injection</strong> to drop your tables. You MUST use Parameterized Queries (using <code>?</code> placeholders).</p>

<p><strong>Example in Node.js / JavaScript:</strong></p>

<pre><code>const mysql = require('mysql2');

// VERY BAD (Hacker can delete table by typing: ' OR 1=1; DROP TABLE users; --):
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

<p>---</p>\n`
        },
        {
            id: 'ch48',
            title: '📝 Module 18: Practice & Mastery',
            content: `\n<p>Mastering SQL requires writing hundreds of queries.</p>

<p>#</p>\n`
        },
        {
            id: 'ch49',
            title: '1. Practice Challenges',
            content: `\n<ul>
<li><strong>CRUD Challenge:</strong> Create a <code>library_books</code> table. Insert 10 books. Update the price of one. Delete books published before 2000.</li>
<li><strong>JOIN Challenge:</strong> Create a <code>customers</code> table and an <code>orders</code> table. Write an <code>INNER JOIN</code> to find the total amount spent by each customer.</li>
<li><strong>Aggregate Challenge:</strong> Find the <code>AVG()</code> salary of employees, grouped by their department using <code>GROUP BY</code>.</li>
<li><strong>Window Function Challenge:</strong> Rank employees by salary using <code>RANK() OVER (ORDER BY salary DESC)</code>.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch50',
            title: '2. Common Interview Questions',
            content: `\n<p><em>   </em>What is the difference between TRUNCATE and DROP?* (TRUNCATE keeps the empty table structure, DROP destroys it completely).<br><em>   </em>What is a Primary Key vs Foreign Key?* (Primary Key uniquely identifies a row; Foreign Key links a row to another table).<br><em>   </em>What is the difference between WHERE and HAVING?<em> (WHERE filters rows </em>before<em> grouping; HAVING filters rows </em>after* grouping).</p>\n`
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
