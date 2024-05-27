const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// Initialize SQLite database
const db = new sqlite3.Database('./investments.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS investments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT,
      name TEXT,
      symbol TEXT,
      purchasePrice REAL,
      quantity INTEGER,
      amount REAL
    )`);
  }
});

// API endpoints
app.post('/addInvestment', (req, res) => {
  const { type, name, symbol, purchasePrice, quantity, amount } = req.body;
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('Token is required');
  }

  db.run(
    `INSERT INTO investments (type, name, symbol, purchasePrice, quantity, amount) VALUES (?, ?, ?, ?, ?, ?)`,
    [type, name, symbol, purchasePrice, quantity, amount],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: this.lastID, type, name, symbol, purchasePrice, quantity, amount });
    }
  );
});

app.get('/getInvestments', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('Token is required');
  }

  db.all('SELECT * FROM investments', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Serve React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
