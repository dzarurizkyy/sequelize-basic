import express from "express"
import db from "./models/index.js"
// import User from "./models/user-model-2.js"

const User = db.models.User

const app = express()
const port = 3000

app.get("/", (req, res) => {
    try {
        User.findAll().then((data) => { res.send(data) })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

app.get("/insert", (req, res) => {
    User.create({
        username: "dzarurizky",
        email: "dzarurizkybusiness@gmail.com",
    }).then((data) => {
        res.send(data)
    })
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})