let express = require("express");
let app = express();

const absolutePath = __dirname + "/views/index.html";

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    console.log("Hello Express");
    res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
    res.json({ message: "Hello json" });
});

module.exports = app;
