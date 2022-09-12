const app = require("./setup")



const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`App running at ${port}`)
})
