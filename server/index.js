const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser"); 
const cors = require('cors');

require("dotenv").config();

const app = express();
/********************** database config */
const pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "Graduate-tracker",
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
// app.use(express.json())
app.use(bodyParser.json()); // Middleware to parse JSON in the request body
app.use(cors())
app.get("/", (req, res)=>{
    res.json("Hello, this is the Backend")
})

app.get("/graduates", (req, res)=>{
    const q = "select * from graduates"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data.rows)
    })
})


app.post("/addgraduate", (req, res) => {
  const { full_name, github_link, linkedIn_link, portfolio_link, role, about_me, skills, avatar_url} = req.body;

  const q = `
      INSERT INTO graduates 
      (full_name, github_link, linkedIn_link, portfolio_link, role, about_me, skills, avatar_url) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  `;

  const values = [full_name, github_link, linkedIn_link, portfolio_link, role, about_me, skills, avatar_url];

  db.query(q, values, (err, data) => {
      if (err) {
          console.error(err);
          return res.status(500).json({ error: "Error adding graduate to the database." });
      }
      return res.status(200).json({ message: "Graduate has been added successfully." });
  });
});

app.get("/graduate/:fullName", (req, res) => {
  const fullName = req.params.fullName;
  const q = "SELECT * FROM graduates WHERE full_name = $1";
  const values = [fullName];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error fetching graduate details." });
    }

    if (data.rows.length === 0) {
      return res.status(404).json({ error: "Graduate not found." });
    }

    const graduate = data.rows[0];
    return res.status(200).json(graduate);
  });
});


app.listen(port, ()=>{
    console.log("connected to the Backend")
})