import express from "express"
import { User } from "./models/index.js"
import { Op } from "sequelize"

const app = express()
const port = 3000

app.get("/", async (req, res) => {
    try {
        // let data = await User.findByPk(1)

        // let data = await User.findOne({
        //     where: { age: 18 }
        // })

        // let data = await User.findOrCreate({
        //     where: {
        //         userName: "kirito",
        //         email: "kirigayakazuto@gmail.com",
        //         age: 17
        //     }
        // })

        // let data = await User.findAndCountAll({
        //     where: {
        //         [Op.and]: [
        //             {
        //                 userId: {
        //                     [Op.in]: [1, 2, 3]
        //                 }
        //             },
        //             {
        //                 email: {
        //                     [Op.like]: "dzaru%"
        //                 }
        //             }
        //         ]
        //     }
        // })
        res.send(data)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

app.get("/insert", async (req, res) => {
    await User.bulkCreate([
        {
            userName: "dzarurizky",
            email: "dzarurizkybusiness@gmail.com",
            age: 22,
            isActive: true
        },
        {
            userName: "jasper",
            email: "jasperbusiness2022@gmail.com",
            age: 18,
            isActive: true
        }
    ]).then((data) => {
        res.send(data)
    })
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})