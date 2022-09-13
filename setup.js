const express = require("express")
const {engine} = require("express-handlebars")
const path = require("path")
const session = require("express-session")
const app = express()
const handlebars = require("handlebars")
const authenticationRouter = require("./authentication")
const notesRouter = require("./notes")
const initaliseDB = require("./models/database")

app.use(express.static(path.join(__dirname, "./public")))
app.set("views", path.join(__dirname, "./views"))
app.set("view engine", "handlebars")
app.engine("handlebars", engine({

})) //use handlebars with exphbs
initaliseDB()
app.use(express.json()) //req.body
app.use(express.urlencoded({ //also used for :id/ etc
    extended: true //allows sending of nestd objects
}))
app.use(session({
    secret: "note",
    saveUninitialized: true,
    resave: true
}))

app.use("/", authenticationRouter)
app.use("/", notesRouter)


module.exports = app
