import express from "express"
import db from "./models/index.js"

const app = express()

app.get('/', async (req, res) => {
    const data = await db.User.findAll()
    res.json(data)
})

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000")
})
