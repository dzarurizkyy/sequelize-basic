import express from "express"
// import { Op } from "sequelize"
import { User, Post } from "./models/index.js"
import sequelize from "./utils/db.js"

const app = express()
const port = 3000

app.get("/", async (req, res) => {
    try {
        // let data = await Post.findAll({
        //     include: [
        //         {
        //             model: User,
        //             where: {
        //                 email: {
        //                     [Op.like]: "jasper%"
        //                 }
        //             }
        //         }
        //     ],
        //     where: {
        //         title: "This is title"
        //     },
        //     limit: 10,
        //     offset: 0,
        // })

        // const data = await sequelize.query(
        //     'SELECT "User".*, post.title, post.body FROM "User" JOIN post ON "User".user_id=post.user_id WHERE "User".email LIKE \'jasper%\'',
        //     {
        //         type: sequelize.QueryTypes.SELECT,
        //         raw: true,
        //     }
        // )

        const data = await sequelize.query('SELECT * FROM "User"', {
            type: sequelize.QueryTypes.SELECT,
            model: User,
            mapToModel: true,
        })

        const post = async (id) => {
            return await sequelize.query('SELECT * FROM post WHERE user_id=$id', {
                bind: { id: id },
                type: sequelize.QueryTypes.SELECT,
                model: Post,
                mapToModel: true,
            })
        }

        let dtl = await Promise.all(
            data.map(async (user) => {
                return {
                    user,
                    post: await Promise.all(await post(user.userId))
                }
            })
        )

        res.send(dtl)
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