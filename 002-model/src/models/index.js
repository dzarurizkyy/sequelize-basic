import db from "../utils/db.js"
import UserAttributes from "./user-model-2.js"

const User = db.define("User", UserAttributes, { tableName: "users" })
db.sync()

export { db, User };