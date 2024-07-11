const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// app.get("/users", (req, res) => {
//     res.send(`Port is running on ${port}`);
// });

app.use("/contacts", require("./routes/contact-routes"));

app.listen(port, () => console.log(`Port is running on ${port}`));