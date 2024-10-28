require("dotenv").config();
const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");

const pool = new Pool({
   user: process.env.PGUSER,
   host: process.env.PGHOST,
   database: process.env.PGDATABASE,
   password: process.env.PGPASSWORD,
   port: process.env.PGPORT,
});

const runSingleScript = async (filepath) => {
   const script = fs.readFileSync(path.join(__dirname, filepath)).toString();
   try {
      await pool.query(script);
      console.log("Funcionou");
   } catch (error) {
      console.error("Erro no script : ${filepath} :", error.message);
   }
};

const runScripts = async () => {
   await runSingleScript("database/DatabaseCreate");
   await runSingleScript("database/DatabasePovoate");
};

runScripts();

module.exports = pool;
