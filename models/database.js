const mongoose = require("mongoose")


function initaliseDB() {
mongoose.connect("mongodb://localhost:27017", () => {
    console.log("Connected")
})

mongoose.connection.on("error", console.error.bind(console, "MongoDB Connection error:"))
}

module.exports = initaliseDB
