const authenticationRouter = require("express").Router()
const User = require("./models/User")
const jwt = require("jsonwebtoken")
require('dotenv').config()
authenticationRouter.route("/login").get((req, res) => {
    return res.json({login: "this is login"})
}).post(async (req, res) => {

    const verified = await User.findOne({username: req.body?.username ?? "", password: req.body?.password ?? ""})
    return res.status(200).json({ "verified" : "" + Boolean(verified), user: {username: verified?.username, password: verified?.password, email: verified?.email, _id: verified?._id}} )
})


authenticationRouter.route("/register").get((req, res) => {
    return res.json({register: "this is register"})
}).post(async (req, res) => {
    const user = await User.create({username: req.body.username, email: req.body.email, password: req.body.password})
    res.status(200).json(user)
})

authenticationRouter.route("/auth").post((req, res) => {

})
function authenticatetoken(req, res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return re.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = authenticationRouter