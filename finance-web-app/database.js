const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to SQLite database
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to SQLite database');
    db.run(`CREATE TABLE IF NOT EXISTS investments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId TEXT,
      type TEXT,
      name TEXT,
      symbol TEXT,
      purchasePrice REAL,
      quantity INTEGER
    )`, (err) => {
      if (err) {
        console.error('Error creating investments table', err);
      }
    });
  }
});


module.exports = db;

