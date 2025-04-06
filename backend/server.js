import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './inventario/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Obtener todos los productos
app.get('/productos', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM productos');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
