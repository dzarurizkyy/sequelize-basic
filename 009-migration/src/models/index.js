import db from "../db/config/db.js"
import User from "./user.js"

db.define("User", User, { tableName: "Users" })

export default db.models