const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/database.js");  // sonlugu js olmalidir

dotenv.config();

const app = express();


// running cors
app.use(cors());

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));

app.get("/", (req, res)=>console.log(res.send("PORT is working.")));

const PORT = process.env.PORT || 5000;

db();

app.listen(PORT, ()=>console.log("Server running on port: 5000"));