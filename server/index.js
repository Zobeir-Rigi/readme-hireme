const express = require("express");
const { Pool } = require("pg");

require("dotenv").config();

const app = express();
/********************** database config */
const pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "Graduate",
    user: process.env.DB_USER || "", 
    password: process.env.DB_PASS || process.env.DB_PASSWORD || "",
	port : process.env.DB_PORT || "5432" ,
  });
  pool.on("error", (err, client) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});

  const db = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback);
    },
  };
  const port = process.env.PORT || 8800;
/**************************************** */
app.get("/", (req, res)=>{
    res.json("Hello, this is the Backend")
})

app.get("/graduates", (req, res)=>{
    const q = "select * from graduates"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.listen(port, ()=>{
    console.log("connected to the Backend")
})