const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = 8000;

const bcrypt = require('bcryptjs'); // For password hashing

// Simple admin authentication middleware
const ADMIN_TOKEN = 'secret-admin-token';
const requireAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== 'Bearer ' + ADMIN_TOKEN) {
        return res.status(403).json({ error: 'Unauthorized Access' });
    }
    next();
};


// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Serve static files (HTML, CSS, JS, Images) from the current directory
// We want to serve index.html by default
app.use(express.static(path.join(__dirname)));

// ==========================================
// API ENDPOINTS
// ==========================================

// 1. REGISTER USER
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Please provide name, email, and password' });
    }

    const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    db.run(sql, [name, email, password], function(err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                return res.status(409).json({ error: 'Email already exists' });
            }
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'User registered successfully', userId: this.lastID, name, email });
    });
});

// 2. LOGIN USER
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Please provide email and password' });
    }

    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
    db.get(sql, [email, password], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (!row) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        res.json({ message: 'Login successful', user: { id: row.id, name: row.name, email: row.email } });
    });
});

// 3. SUBMIT FEEDBACK
app.post('/api/feedback', (req, res) => {
    const { text, user_name, user_email } = req.body;
    
    if (!text) {
        return res.status(400).json({ error: 'Feedback text is required' });
    }

    const date = new Date().toISOString();
    const sql = `INSERT INTO feedbacks (text, date, user_name, user_email) VALUES (?, ?, ?, ?)`;
    
    db.run(sql, [text, date, user_name, user_email], function(err) {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Feedback submitted successfully', feedbackId: this.lastID });
    });
});

// 4. GET ALL FEEDBACKS (For Admin Panel)
app.get('/api/feedback', requireAdmin, (req, res) => {
    const sql = `SELECT * FROM feedbacks ORDER BY date DESC`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(rows);
    });
});

// 5. DELETE FEEDBACK (For Admin Panel)
app.delete('/api/feedback/:id', requireAdmin, (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM feedbacks WHERE id = ?`;
    db.run(sql, id, function(err) {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Feedback not found' });
        }
        res.json({ message: 'Feedback deleted successfully' });
    });
});

// ==========================================
// CONTACT MESSAGES ENDPOINTS
// ==========================================

// POST CONTACT MESSAGE
app.post('/api/contact', (req, res) => {
    const { name, email, phone, inquiry_type, subject, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const date = new Date().toISOString();
    const sql = `INSERT INTO contacts (name, email, phone, inquiry_type, subject, message, date) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    
    db.run(sql, [name, email, phone || '', inquiry_type || 'General', subject || '', message, date], function(err) {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(201).json({ message: 'Message sent successfully', contactId: this.lastID });
    });
});

// GET ALL CONTACT MESSAGES (Admin)
app.get('/api/contact', requireAdmin, (req, res) => {
    const sql = `SELECT * FROM contacts ORDER BY date DESC`;
    db.all(sql, [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(rows);
    });
});

// DELETE CONTACT MESSAGE (Admin)
app.delete('/api/contact/:id', requireAdmin, (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM contacts WHERE id = ?`;
    db.run(sql, id, function(err) {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json({ message: 'Message deleted successfully' });
    });
});


// 6. GET ALL USERS (For Admin Panel)
app.get('/api/users', requireAdmin, (req, res) => {
    const sql = `SELECT * FROM users ORDER BY id DESC`;
    db.all(sql, [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(rows);
    });
});

// 7. DELETE USER (For Admin Panel)
app.delete('/api/users/:id', requireAdmin, (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM users WHERE id = ?`;
    db.run(sql, id, function(err) {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json({ message: 'User deleted successfully' });
    });
});

// Fallback route for SPA
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
