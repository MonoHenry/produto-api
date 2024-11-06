const express = require("express");
const router = express.Router();
const pool = require("../db");
//ACHO QUE TA FUNCIONANDO
router.post("/produtos", async (req, res) => {
   const { descricao, preco, estoque, data } = req.body;
   try {
      console.log;
      const result = await pool.query(
         "INSERT INTO produto (descricao, preco, estoque, data) VALUES ($1, $2, $3, $4) RETURNING *",
         [descricao, preco, estoque, data],
      );
      res.status(201).json(result.rows[0]);
   } catch (error) {
      console.error("Erro na cricao de produto ", error.message);
      res.status(500).json({ error: error.message });
   }
});

router.get("/produtos", async (_req, res) => {
   try {
      const result = await pool.query("SELECT * FROM produto");
      res.status(200).json(result.rows);
   } catch (error) {
      console.log("Erro na busca dos produtos  ", error.message);
      res.status(500).json({ error: error.message });
   }
});

router.get("/produto/:id", async (req, res) => {
   const { id } = req.params;
   try {
      const result = await pool.query(
         "SELECT * FROM produto WHERE produto.id = $1",
         [id],
      );
      res.status(200).json(result.rows);
   } catch (error) {
      console.log("Erro buscando produto ", error.message);
      res.status(500).json({ error: err.message });
   }
});

router.put("/produto/:id", async (req, res) => {
   const { id } = req.params;
   const { descricao, preco, estoque } = req.body;
   try {
      const result = await pool.query(
         "UPDATE produto SET descricao = $1, preco = $2, estoque = $3 WHERE produto.id = $4",
         [descricao, preco, estoque, id],
      );
      res.status(200).json(result.rows[0]);
   } catch (error) {
      console.log("Erro atualizando produto ", error.message);
      res.status(500).json({ error: error.message });
   }
});

router.delete("/produto/:id", async (req, res) => {
   const { id } = req.params;
   try {
      const _result = await pool.query(
         "DELETE FROM produto WHERE produto.id = $1",
         [id],
      );
      res.status(200).json();
   } catch (error) {
      console.log("Erro ao apagar produto ", error.message);
      res.status(500).json({ error: error.message });
   }
});

module.exports = router;
