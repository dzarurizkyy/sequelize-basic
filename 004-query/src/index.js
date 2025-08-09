import express from "express"
import { User } from "./models/index.js"
import { Op } from "sequelize"

const app = express()
const port = 3000

app.get("/", async (req, res) => {
    try {
        // let data = await User.findAll({
        //     attributes: ["email", "userName"]
        // })

        // let data = await User.findAll({
        //     attributes: [
        //         ["user_name", "username"],
        //         ["email", "user_email"],
        //     ]
        // })

        // let data = await User.findAll({
        //     attributes: [
        //         [sequelize.fn("count", sequelize.col("age")), "total"]
        //     ]
        // })

        // let data = await User.findAll({
        //     attributes: ["userName", "email", "age"],
        //     where: {
        //         age: {
        //             [Op.eq]: 18,
        //         },
        //     },
        // })

        // let data = await User.findAll({
        //     attributes: ["userName", "email", "age"],
        //     where: {
        //         [Op.and]: [
        //             { age: 22 },
        //             { email: "dzarurizkybusiness@gmail.com" }
        //         ]
        //     }
        // })

        // let data = await User.findAll({
        //     attributes: ["userName", "email", "age"],
        //     where: {
        //         [Op.or]: [
        //             { age: 22 },
        //             { isActive: true }
        //         ]
        //     }
        // })

        // let data = await User.findAll({
        //     attributes: ["userName", "email", "age"],
        //     where: {
        //         age: {
        //             [Op.or]: [18, 22]
        //         }
        //     }
        // })

        let data = await User.findAll({
            where: {
                userId: [0, 1, 2],
                [Op.and]: {
                    email: {
                        [Op.like]: "dzaru%"
                    }
                }
            }
        })

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