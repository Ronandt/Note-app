const User = require("./models/user")
const Note = require("./models/Note")
const notesRouter = require("express").Router()

notesRouter.route("/").get(async (req, res) => {
    const notes = await Note.find({user: req.query.id})
    console.log(notes)
    console.log(req.query.id)
    return res.json(notes)
  
}).post(async (req, res) => {
    const note = await Note.create({description: req.body.description, title: req.body.title, user: req.body._id})
    console.log(note)
    return res.status(200).json(req.body)
}).delete(async (req, res) => {
    console.log(req.body)
    console.log(req.body)
    console.log(req.body)

    console.log(req.body)
    console.log(req.body)
    console.log(req.body)
    console.log(req.body)
    console.log(req.body)
    console.log(req.body)

    const deleted = await Note.findByIdAndDelete(req.body._id)
    console.log(deleted)
    return deleted
})

module.exports = notesRouter