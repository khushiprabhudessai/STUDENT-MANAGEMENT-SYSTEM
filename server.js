// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Get all students
app.get('/api/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add student
app.post('/api/students', (req, res) => {
  const { name, roll } = req.body;
  db.query('INSERT INTO students (name, roll) VALUES (?, ?)', [name, roll], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, name, roll });
  });
});

// Delete student
app.delete('/api/students/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM students WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Student deleted' });
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
