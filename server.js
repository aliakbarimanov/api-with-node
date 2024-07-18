const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/error-handler");
const connectDb = require("./config/db-connection");

connectDb();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use("/contacts", require("./routes/contact-routes"));
app.use(errorHandler);


app.listen(port, () => console.log(`Port is running on ${port}`));


// app.get("/users", (req, res) => {
//     res.send(`Port is running on ${port}`);
// });