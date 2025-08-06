import express from "express"
import sequelize from "./utils/db.js"

const app = express()
const port = 3000

app.get("/", (req, res) => {
    sequelize.authenticate().then(() => {
        res.send("connected..")
    }).catch((err) => {
        res.send(`connection failed: ${err}`)
    })
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})