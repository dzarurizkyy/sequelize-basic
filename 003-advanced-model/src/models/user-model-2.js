import { Sequelize } from "sequelize"

const User = {
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        // unique: true
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    }
}

export default User;