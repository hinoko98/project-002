import express from 'express'
import { connection } from '../db.js'

const router = express.Router()

// Obtener todos los productos
router.get('/', (req, res) => {
  const sql = `
    SELECT tb_productos.*, tb_categoria.nombreCategoria
    FROM tb_productos
    LEFT JOIN tb_categoria ON tb_productos.idCategoria = tb_categoria.idCategoria
  `
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json(results)
  })
})

// Obtener categorías
router.get('/categorias', (req, res) => {
  connection.query('SELECT * FROM tb_categoria WHERE estado = 1', (err, results) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json(results)
  })
})

export default router
