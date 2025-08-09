import express from "express"
import { User } from "./models/index.js"
import sequelize from "./utils/db.js"

const app = express()
const port = 3000

app.get("/", async (req, res) => {
    try {
        // let data = await sequelize.query('SELECT * FROM "User"', {
        //     type: sequelize.QueryTypes.SELECT
        // })

        // let data = await sequelize.query('SELECT * FROM "User"', {
        //     model: User,
        //     mapToModel: true,
        // })

        // let data = await sequelize.query('select 1 as "foo.bar.baz"', {
        //     nest: true,
        //     type: sequelize.QueryTypes.SELECT,
        // })

        // let data = await sequelize.query('SELECT * FROM "User" WHERE is_active=?', {
        //     replacements: [true],
        //     type: sequelize.QueryTypes.SELECT
        // })

        let data = await sequelize.query('SELECT * FROM "User" WHERE is_active=$status', {
            bind: { status: true },
            type: sequelize.QueryTypes.SELECT
        })

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
                firstName: "Jasper",
                lastName: "Business",
                userName: "jasper",
                email: "jasperbusiness2022@gmail.com",
                password: "jasper1234",
                age: 18,
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