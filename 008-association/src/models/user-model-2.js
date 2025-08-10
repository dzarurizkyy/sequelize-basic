import { Sequelize } from "sequelize"
import { encrypt } from "../utils/bcript.js"

const User = {
    userId: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        validate: { isUUID: 4 },
        defaultValue: Sequelize.UUIDV4
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
    },
    fullName: {
        type: Sequelize.VIRTUAL,
        get() { return `${this.firstName} ${this.lastName}` }
    },
    age: {
        type: Sequelize.INTEGER
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isEmail: true },
        set(value) { this.setDataValue("email", value.toLowerCase()) }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { is: /^[0-9a-f]{64}$/i },
        set(value) { this.setDataValue("password", encrypt(value)) }
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    }
}

export default User;