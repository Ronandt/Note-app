const mongoose = require("mongoose")
const noteSchema = new mongoose.Schema({
    title: String,

    description:String,
    user: {type: mongoose.SchemaTypes.ObjectId, ref:"User"},
    


    //otherNote: mongoose.SchemaTypes.ObjectId (if it's for another note)
    //otherStuff: [String]
    //userNotes: userSchema (define the schema)


}, {timestamps: true})

/*async function run() {
    await User.create({title: "test", description: "hi"})
}*/

module.exports =  mongoose.models.Note || mongoose.model("Note", noteSchema)

