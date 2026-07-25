with open('server.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add bcryptjs and basic admin token
new_imports = '''const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');
const path = require('path');
const bcrypt = require('bcryptjs'); // For password hashing

const app = express();
const PORT = 8000;

// Simple admin authentication middleware
const ADMIN_TOKEN = 'secret-admin-token';
const requireAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== 'Bearer ' + ADMIN_TOKEN) {
        return res.status(403).json({ error: 'Unauthorized Access' });
    }
    next();
};'''

content = content.replace('''const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');
const path = require('path');

const app = express();
const PORT = 8000;''', new_imports)

# Update Registration
reg_old = '''// POST REGISTER
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const checkSql = `SELECT * FROM users WHERE email = ?`;
    db.get(checkSql, [email], (err, row) => {
        if (row) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const insertSql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
        db.run(insertSql, [name, email, password], function(err) {
            if (err) return res.status(500).json({ error: 'Database error' });
            res.status(201).json({ message: 'User created successfully', userId: this.lastID, name: name });
        });
    });
});'''

reg_new = '''// POST REGISTER
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const checkSql = `SELECT * FROM users WHERE email = ?`;
    db.get(checkSql, [email], (err, row) => {
        if (row) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password securely
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const insertSql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
        db.run(insertSql, [name, email, hashedPassword], function(err) {
            if (err) return res.status(500).json({ error: 'Database error' });
            res.status(201).json({ message: 'User created successfully', userId: this.lastID, name: name });
        });
    });
});'''
content = content.replace(reg_old, reg_new)

# Update Login
log_old = '''// POST LOGIN
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
    db.get(sql, [email, password], (err, row) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        
        if (!row) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful', user: { id: row.id, name: row.name, email: row.email } });
    });
});'''

log_new = '''// POST LOGIN
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const sql = `SELECT * FROM users WHERE email = ?`;
    db.get(sql, [email], (err, row) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        
        if (!row) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare hashed passwords
        const isMatch = bcrypt.compareSync(password, row.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful', user: { id: row.id, name: row.name, email: row.email } });
    });
});'''
content = content.replace(log_old, log_new)

# Add admin login endpoint
admin_login = '''
// ==========================================
// ADMIN AUTHENTICATION
// ==========================================
app.post('/api/admin/login', (req, res) => {
    const { email, password } = req.body;
    
    // Secure hardcoded admin credentials
    if (email === 'admin@nexoracode.com' && password === 'admin123') {
        res.json({ message: 'Admin login successful', token: ADMIN_TOKEN });
    } else {
        res.status(401).json({ error: 'Invalid admin credentials' });
    }
});
'''
content = content.replace('// 1. GET ALL FEEDBACK', admin_login + '\n// 1. GET ALL FEEDBACK')

# Protect admin routes
content = content.replace("app.get('/api/feedback', (req, res) => {", "app.get('/api/feedback', requireAdmin, (req, res) => {")
content = content.replace("app.delete('/api/feedback/:id', (req, res) => {", "app.delete('/api/feedback/:id', requireAdmin, (req, res) => {")
content = content.replace("app.get('/api/contact', (req, res) => {", "app.get('/api/contact', requireAdmin, (req, res) => {")
content = content.replace("app.delete('/api/contact/:id', (req, res) => {", "app.delete('/api/contact/:id', requireAdmin, (req, res) => {")
content = content.replace("app.get('/api/users', (req, res) => {", "app.get('/api/users', requireAdmin, (req, res) => {")
content = content.replace("app.delete('/api/users/:id', (req, res) => {", "app.delete('/api/users/:id', requireAdmin, (req, res) => {")


with open('server.js', 'w', encoding='utf-8') as f:
    f.write(content)
    print('Updated server.js securely')
