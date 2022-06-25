let express = require("express");
let app = express();

const absolutePath = __dirname + "/views/index.html";

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    console.log("Hello Express");
    res.sendFile(absolutePath);
});

module.exports = app;
