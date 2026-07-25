const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to SQLite database (this will create nexaora.db if it doesn't exist)
const dbPath = path.join(__dirname, 'nexaora.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        
        // Initialize Tables
        db.serialize(() => {
            // Users table
            db.run(`
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    email TEXT UNIQUE NOT NULL,
                    password TEXT NOT NULL
                )
            `);

            // Feedbacks table
            db.run(`
                CREATE TABLE IF NOT EXISTS feedbacks (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    text TEXT NOT NULL,
                    date TEXT NOT NULL,
                    user_name TEXT,
                    user_email TEXT
                )
            `);
            
            // Contacts table
            db.run(`
                CREATE TABLE IF NOT EXISTS contacts (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    email TEXT NOT NULL,
                    phone TEXT,
                    inquiry_type TEXT,
                    subject TEXT,
                    message TEXT NOT NULL,
                    date TEXT NOT NULL
                )
            `);
            
            console.log('Database tables initialized successfully.');
        });
    }
});

module.exports = db;
