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
    },
    age: {
        type: Sequelize.INTEGER
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    }
}

export default User;