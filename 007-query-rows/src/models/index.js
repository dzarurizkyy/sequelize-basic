import db from "../utils/db.js"
import UserAttributes from "./user-model-2.js"

const User = db.define("User", UserAttributes, {
    underscored: true,
    freezeTableName: true,
    timestamps: false,
    indexes: [
        {
            fields: ["email"],
            unique: true
        }
    ]
})
db.sync()

export { db, User };