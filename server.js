const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

app.get("/users", (req, res) => {
    res.send(`Port is running on`);
});

app.listen(port, () => console.log(`Port is running on ${port}`));