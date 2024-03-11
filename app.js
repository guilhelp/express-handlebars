const express = require("express")
const app = express();
const port = 8081

// npm install express-handlebars --save
// configuração do handlebars
const handlebars = require("express-handlebars").engine
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", function(req, res) {
    res.render("index")
})

app.listen(port, function() {
    console.log("OLÁ")
})