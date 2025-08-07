import db from "../utils/db.js"
import User from "./user-model-2.js"

scrollBy.define("User", User, { tableName: "users" })
db.sync()

export default scrollBy;