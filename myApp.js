let express = require("express");
let app = express();

const absolutePath = __dirname + "/views/index.html";

app.use("/public", express.static(__dirname + "/public"));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get("/", (req, res) => {
    console.log("Hello Express");
    res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE == "uppercase") {
        res.json({ message: "HELLO JSON" });
    } else {
        res.json({ message: "Hello json" });
    }
});

module.exports = app;
