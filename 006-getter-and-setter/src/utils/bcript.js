import bcript from "bcrypt"

const saltRoounds = 10;

const encrypt = (password) => bcript.hashSync(password, saltRoounds)
const verify = (password, hash) => bcript.compareSync(password, hash)

export { encrypt, verify }