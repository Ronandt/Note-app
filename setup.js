const express = require("express")
const handlebars = require("express-handlebars")
const app = express()


app.route("/").get((req, res) => {
    return "hi"
})
app.get("/", (req, res) => {
    return "H"
})

module.exports = app
