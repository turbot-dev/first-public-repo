// Test file with potential security issues for code scanning
const express = require('express');
const app = express();

// Potential SQL injection vulnerability
app.get('/user', (req, res) => {
  const userId = req.query.id;
  const query = `SELECT * FROM users WHERE id = ${userId}`; // SQL injection risk
  // ... execute query
});

// Potential XSS vulnerability
app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  res.send(`<h1>Search results for: ${searchTerm}</h1>`); // XSS risk
});

// Use of eval (security risk)
function processData(data) {
  return eval(data); // Dangerous eval usage
}

module.exports = app;
