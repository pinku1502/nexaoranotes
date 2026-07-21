import os
import re

workspace = r"E:\Projects\nexaoranotes"

notes = """# 🗄️ SQL Masterclass (Ultimate Detail Edition)

## Module 1: Introduction to SQL (The Universal Data Language)

### 1. What is SQL?
Imagine you walk into a massive, 100-story library looking for one specific book. If you ask the librarian in English, they understand you. 
**SQL (Structured Query Language)** is the universal language you use to speak to databases. Whether you are using MySQL, PostgreSQL, Oracle, or SQL Server, they all understand SQL.

### 2. SQL vs MySQL
*   **SQL:** The *Language* (English).
*   **MySQL / PostgreSQL / Oracle:** The *Database Engines* (The actual Librarians who understand the language and fetch the books).

### 3. DBMS vs RDBMS
*   **DBMS (Database Management System):** A generic system for storing data. (Like a messy pile of folders).
*   **RDBMS (Relational DBMS):** Stores data in strict **Tables** (Rows and Columns) that are mathematically linked (related) to each other. (Like a perfectly organized spreadsheet).

### 4. SQL Syntax Rules
*   SQL commands are **case-insensitive** (`SELECT` is the same as `select`), but by convention, we capitalize commands to make them easy to read.
*   Every SQL command must end with a semicolon `;`.

---

## 🏗️ Module 2: Database & Table Operations (DDL - Data Definition Language)

DDL commands are used to build the physical architecture of the database (the tables and columns). You don't use DDL to add user data; you use it to build the structure.

### 1. Database Operations
```sql
-- Create a new, empty warehouse
CREATE DATABASE tech_company;

-- You must tell the engine WHICH database you want to work inside!
USE tech_company;

-- Nuclear Option: Completely destroy the database and everything inside it
DROP DATABASE tech_company;
```

### 2. Table Operations
You must define the exact blueprint of a table before adding data.
```sql
-- Creating a table
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
```

---

## ✍️ Module 3: CRUD Operations (DML - Data Manipulation Language)

DML is what you use 99% of the time. It is how you Create, Read, Update, and Delete actual user data inside your tables.

### 1. INSERT (Create)
```sql
-- Insert a single row
INSERT INTO employees (id, name, department, salary)
VALUES (1, 'Alice Smith', 'Engineering', 95000.00);

-- Insert MULTIPLE rows at lightning speed!
INSERT INTO employees (id, name, department, salary)
VALUES 
(2, 'Bob Jones', 'HR', 65000.00),
(3, 'Charlie Brown', 'Engineering', 105000.00);
```

### 2. UPDATE (Modify)
**CRITICAL WARNING:** Always use a `WHERE` clause! If you just write `UPDATE employees SET salary = 0;`, you will bankrupt every single employee in the company!
```sql
-- Safe update
UPDATE employees 
SET salary = 110000.00 
WHERE name = 'Charlie Brown';
```

### 3. DELETE (Remove)
**CRITICAL WARNING:** Always use `WHERE`!
```sql
-- Safe delete
DELETE FROM employees WHERE id = 2;
```

---

## 🔍 Module 4: Querying Data (DQL - Data Query Language)

DQL is purely for *reading* data. It never modifies or breaks anything.

### 1. The Mighty SELECT
```sql
-- Read every column from every row
SELECT * FROM employees;

-- Read ONLY the names and salaries (saves massive memory)
SELECT name, salary FROM employees;
```

### 2. DISTINCT (Removing Duplicates)
If you want to know all the different departments in your company, but you have 10,000 employees, you don't want to see "Engineering" 5,000 times.
```sql
-- Returns a clean list of unique departments
SELECT DISTINCT department FROM employees;
```

### 3. LIMIT and OFFSET (Pagination)
If Amazon returned all 50 million products at once, your browser would crash. You must paginate!
```sql
-- Show the first 10 employees
SELECT * FROM employees LIMIT 10;

-- Skip the first 10, and show the next 10 (Page 2)
SELECT * FROM employees LIMIT 10 OFFSET 10;
```

---

## ⚡ Module 5: Operators (The Logic Engine)

### 1. Comparison & Logical Operators
```sql
-- Find high earners in the Engineering department
SELECT * FROM employees 
WHERE salary > 100000 AND department = 'Engineering';
```

### 2. IN and BETWEEN (Clean Code)
```sql
-- BAD: 
SELECT * FROM employees WHERE department = 'HR' OR department = 'Sales' OR department = 'IT';

-- GOOD (Using IN):
SELECT * FROM employees WHERE department IN ('HR', 'Sales', 'IT');

-- Finding ranges using BETWEEN
SELECT * FROM employees WHERE salary BETWEEN 60000 AND 90000;
```

### 3. LIKE and Wildcards (The Search Engine)
*   `%` represents ZERO or MORE unknown characters.
*   `_` represents exactly ONE unknown character.

```sql
-- Find anyone whose name starts with 'A'
SELECT * FROM employees WHERE name LIKE 'A%';

-- Find anyone whose email ends with '@gmail.com'
SELECT * FROM users WHERE email LIKE '%@gmail.com';
```

---

## 📊 Module 6: Functions (Built-in Calculators)

### 1. Aggregate Functions (Math on the entire table)
```sql
-- Count total employees
SELECT COUNT(*) FROM employees;

-- Find total salary payout
SELECT SUM(salary) FROM employees;

-- Find highest paid employee salary
SELECT MAX(salary) FROM employees;
```

### 2. String & Date Functions
```sql
-- Force names to be uppercase
SELECT UPPER(name) FROM employees;

-- Get the exact date and time right now
SELECT NOW();

-- Find employees hired exactly 30 days ago
SELECT * FROM employees WHERE DATEDIFF(NOW(), hire_date) = 30;
```

---

## 🔒 Module 7: Constraints (The Unbreakable Rules)

Constraints are the strict rules applied to columns to ensure the database doesn't get polluted with bad data.

### 1. PRIMARY KEY & AUTO_INCREMENT
The **Primary Key** is a unique identifier (like a Social Security Number) for every row.
```sql
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);
```

### 2. UNIQUE, NOT NULL & DEFAULT
```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL, -- Must exist, and must be unique!
    status VARCHAR(20) DEFAULT 'Active' -- If left blank, it automatically becomes 'Active'
);
```

---

## 🔗 Module 8: Joins (Stitching Tables Together)

When you use a Foreign Key to link tables, you use a `JOIN` to stitch them back together when reading data.

### 1. INNER JOIN (The Overlap)
Returns ONLY the rows where there is a match in BOTH tables.
```sql
-- Get all orders, and stitch the User's name onto the result!
SELECT users.username, orders.total_amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

### 2. LEFT JOIN
Returns ALL rows from the Left table (Users), and matching rows from the Right table (Orders). If a user has zero orders, their order amount will just say `NULL`.
```sql
-- Show every single user, even if they haven't bought anything yet!
SELECT users.username, orders.total_amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

---

## 📈 Module 9: Advanced SQL (Data Mining)

### 1. GROUP BY & HAVING
Used with Aggregate functions to group rows that have the same values into summary rows.
```sql
-- Find out how many users live in each specific city
SELECT city, COUNT(*) AS Total_Users 
FROM users 
GROUP BY city;

-- ONLY show cities that have MORE than 100 users!
SELECT city, COUNT(*) AS Total_Users 
FROM users 
GROUP BY city 
HAVING COUNT(*) > 100;
```

### 2. Common Table Expressions (CTE)
A CTE acts like a temporary variable for a query, making complex queries extremely readable.
```sql
-- Step 1: Create a temporary table of high earners
WITH HighEarners AS (
    SELECT * FROM employees WHERE salary > 100000
)
-- Step 2: Query the temporary table!
SELECT * FROM HighEarners WHERE department = 'Engineering';
```

---

## 🪟 Module 10: Window Functions (Advanced Analytics)

Unlike `GROUP BY`, Window Functions perform calculations across a set of rows WITHOUT collapsing them into a single row!

```sql
-- Rank employees by salary WITHIN their specific department, without collapsing the data!
SELECT 
    name, 
    department, 
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank_in_dept
FROM employees;
```

---

## 📂 Module 11: Views & Indexes (Shortcuts & Speed)

### 1. Views (Virtual Tables)
A View is a saved SQL query that acts like a real table. Great for saving complex JOINs.
```sql
-- Create a shortcut view
CREATE VIEW active_engineers AS
SELECT * FROM employees WHERE department = 'Engineering' AND status = 'Active';

-- Query the View!
SELECT * FROM active_engineers;
```

### 2. Indexes (The Book Glossary)
An `INDEX` creates a hidden alphabetized list making searches lighting fast.
```sql
-- Makes searching for emails 100x faster!
CREATE INDEX idx_email ON users(email);
```

---

## ⚙️ Module 12: Stored Programs (Database Scripts)

### 1. Stored Procedures
A saved script of multiple SQL commands that you can execute with one call.
```sql
DELIMITER //
CREATE PROCEDURE DeleteOldUsers()
BEGIN
    DELETE FROM users WHERE last_login < '2020-01-01';
    SELECT 'Old users deleted successfully!';
END //
DELIMITER ;

CALL DeleteOldUsers();
```

---

## 🔄 Module 13: Transactions (The Safety Net)

A **Transaction** groups multiple queries into a single "All or Nothing" block. If one step fails, the entire transaction reverses (rolls back).

```sql
START TRANSACTION;

-- Step 1: Subtract money from Alice
UPDATE bank_accounts SET balance = balance - 1000 WHERE name = 'Alice';

-- Step 2: Add money to Bob
UPDATE bank_accounts SET balance = balance + 1000 WHERE name = 'Bob';

-- Save changes!
COMMIT; 
-- Or undo if error! ROLLBACK;
```

---

## 👤 Module 14: Security & User Management

### 1. Creating Users & Granting Privileges
```sql
-- Create a new user
CREATE USER 'webapp_user'@'localhost' IDENTIFIED BY 'Pass123';

-- Give them READ and UPDATE permissions ONLY!
GRANT SELECT, UPDATE ON tech_company.* TO 'webapp_user'@'localhost';
```

---

## 🚀 Module 15: Performance & Optimization

### 1. Query Optimization with EXPLAIN
Put `EXPLAIN` in front of any query to see a detailed report of how many milliseconds it takes to search, helping you spot bottlenecks.
```sql
EXPLAIN SELECT * FROM users WHERE email = 'test@test.com';
```

***End of SQL Masterclass***
"""

# 1. Create sql-course.html
with open(os.path.join(workspace, 'mysql-course.html'), 'r', encoding='utf-8') as f:
    html_content = f.read()

html_content = html_content.replace('MySQL Masterclass', 'SQL Masterclass')
html_content = html_content.replace('mysql-course.css', 'sql-course.css')
html_content = html_content.replace('mysql-course.js', 'sql-course.js')
html_content = html_content.replace('Courses > MySQL', 'Courses > SQL')

with open(os.path.join(workspace, 'sql-course.html'), 'w', encoding='utf-8') as f:
    f.write(html_content)

# 2. Create sql-course.css
with open(os.path.join(workspace, 'mysql-course.css'), 'r', encoding='utf-8') as f:
    css_content = f.read()

with open(os.path.join(workspace, 'sql-course.css'), 'w', encoding='utf-8') as f:
    f.write(css_content)

# 3. Create sql-course.js
with open(os.path.join(workspace, 'mysql-course.js'), 'r', encoding='utf-8') as f:
    js_content = f.read()

dom_logic_match = re.search(r'\];\s*// Build UI.*', js_content, re.DOTALL)
dom_logic = dom_logic_match.group(0).replace('];', '')

modules_raw = notes.split('## ')
modules_raw = modules_raw[1:]

course_data_str = "document.addEventListener('DOMContentLoaded', () => {\n    const courseData = [\n"

for i, mod_raw in enumerate(modules_raw):
    parts = mod_raw.split('\\n', 1)
    if len(parts) < 2:
        parts = mod_raw.split('\n', 1)
    title = parts[0].strip()
    title = title.replace("'", "\\'").replace('"', '\\"')
    
    content = parts[1].strip()
    
    # 1. Extract code blocks
    code_blocks = []
    def code_replacer(match):
        code_blocks.append(match.group(1))
        return f"\\n\\nCODE_BLOCK_{len(code_blocks)-1}\\n\\n"
    
    content = re.sub(r'```(?:sql|bash|javascript)\n(.*?)```', code_replacer, content, flags=re.DOTALL)
    
    # 2. Escape Template Literal characters
    content = content.replace('\\', '\\\\')
    content = content.replace('`', '\\`')
    content = content.replace('$', '\\$')
    
    # 3. Inline formatting
    content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
    content = re.sub(r'\*(.*?)\*', r'<em>\1</em>', content)
    content = re.sub(r'\\`(.*?)\\`', r'<code>\1</code>', content) 
    
    # 4. Headers
    content = re.sub(r'### (.*?)\n', r'<h3>\1</h3>\n', content)
    
    # 5. Lists
    content = re.sub(r'^(\*|\d+\.)\s+(.*?)$', r'<li>\2</li>', content, flags=re.MULTILINE)
    
    # Now wrap consecutive elements
    blocks = content.split('\n\n')
    formatted_blocks = []
    
    for block in blocks:
        block = block.strip()
        if not block:
            continue
            
        if block.startswith('CODE_BLOCK_'):
            idx = int(block.replace('CODE_BLOCK_', ''))
            code = code_blocks[idx]
            code = code.replace('\\', '\\\\')
            code = code.replace('`', '\\`')
            code = code.replace('$', '\\$')
            formatted_blocks.append(f'<pre><code>{code}</code></pre>')
        elif block.startswith('<li>'):
            formatted_blocks.append(f'<ul>\n{block}\n</ul>')
        elif block.startswith('<h3>'):
            formatted_blocks.append(block)
        else:
            block = block.replace('\n', '<br>')
            formatted_blocks.append(f'<p>{block}</p>')
            
    content = '\n\n'.join(formatted_blocks)
    
    course_data_str += f"""        {{
            id: 'ch{i+1}',
            title: '{title}',
            content: `\\n{content}\\n`
        }},
"""

course_data_str = course_data_str.rstrip(',\n') + "\n    ];\n"
course_data_str += dom_logic

with open(os.path.join(workspace, 'sql-course.js'), 'w', encoding='utf-8') as f:
    f.write(course_data_str)

# 4. Update index.html
with open(os.path.join(workspace, 'index.html'), 'r', encoding='utf-8') as f:
    index_content = f.read()

index_content = re.sub(
    r'<button[^>]*>Learn\s*SQL</button>',
    r'<button class="btn btn-secondary" onclick="window.location.href=\'sql-course.html\'">Learn SQL</button>',
    index_content,
    flags=re.IGNORECASE | re.MULTILINE | re.DOTALL
)

with open(os.path.join(workspace, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(index_content)

print("SQL UI Built and Integrated Successfully!")
