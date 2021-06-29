const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("static"));
app.use("/css", express.static(__dirname + "static/css"));
app.use("/imgs", express.static(__dirname + "static/imgs"));

app.set("views", "./html");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.listen(port, (err) => {
    if (err)
        throw "Error database";
    console.log("Database connected succesfuly");    
});