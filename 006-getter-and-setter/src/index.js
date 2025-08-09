import express from "express"
import { User } from "./models/index.js"
import { Op } from "sequelize"

const app = express()
const port = 3000

app.get("/", async (req, res) => {
    try {
        let data = await User.findAll()
        res.send(data)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

app.get("/insert", async (req, res) => {
    try {
        await User.bulkCreate([
            {
                firstName: "Dzaru",
                lastName: "Rizky",
                userName: "dzarurizkyy",
                email: "dzarurizkybusiness@GMAIL.COM",
                password: "dzaru1234",
                age: 22,
                isActive: true
            }
        ]).then((data) => {
            res.send(data)
        })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})