const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const errorHandler = require("./middleware/error-handler");
const dotenv = require("dotenv").config();

app.use(express.json());
app.use("/contacts", require("./routes/contact-routes"));
app.use(errorHandler);


app.listen(port, () => console.log(`Port is running on ${port}`));


// app.get("/users", (req, res) => {
//     res.send(`Port is running on ${port}`);
// });