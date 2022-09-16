const User = require("./models/user")
const Note = require("./models/Note")
const notesRouter = require("express").Router()

notesRouter.route("/").get(async (req, res) => {
    const notes = await Note.find({user: req.query.id}).sort({"createdAt": -1})
    console.log(notes)
    console.log(req.query.id)
    console.log("HIHHIHIHIHIHI")
    return res.json(notes)
  
}).post(async (req, res) => {
    const note = await Note.create({description: req.body.description, title: req.body.title, user: req.body._id})
    console.log(note)
    return res.status(200).json(note)
}).delete(async (req, res) => {
    const deleted = await Note.findByIdAndDelete(req.body._id)
    return res.status(200).json(deleted)
}).patch(async (req, res) => {
    const updated = await Note.findByIdAndUpdate(req.body._id, {title: req.body.title, description: req.body.description})

    updated.save()
    return res.status(200).json(updated)
})

module.exports = notesRouter