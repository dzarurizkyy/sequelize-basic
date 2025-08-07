import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/db.js";

// const User = sequelize.define("User", {
//     user_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false
//     },
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// },
//     {
//         tableName: "users"
//     })

class User extends Model { }
User.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        tableName: "users",
        sequelize
    })

sequelize.sync()

export default User;