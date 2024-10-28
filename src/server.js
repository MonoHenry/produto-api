require("dotenv").config();
const express = require("express");
const productsRouter = require("./app/items");
const app = express();

app.use(express.json());
app.use("", productsRouter);

const PORT = 12345;
app.listen(PORT, () => {
   console.log("Servidor rodando na porta " + PORT);
});
