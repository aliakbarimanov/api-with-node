const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/database.js");


dotenv.config();

const app = express();

// running cors
app.use(cors());

app.get("/", (req, res)=>console.log(res.send("PORT is working.")));

const PORT = process.env.PORT || 5000;

db();
app.listen(PORT, ()=>console.log("Server running on port: 5000"));