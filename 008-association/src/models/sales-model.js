import { DataTypes } from "sequelize"

const Sales = {
    SalesId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Address: {
        type: DataTypes.STRING,
        alllowNull: false,
    }
}

export default Sales