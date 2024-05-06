//import connection from './database';

const mysql = require('mysql2/promise');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/utilisateur', async (req, res) => {
    try {
      const connection = await connection.getConnection();
      const [rows] = await connection.query('SELECT * FROM utilisateur');
      connection.release();
      res.json(rows);
    } catch (error) {
      console.error('Error fetching utilisateur:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});