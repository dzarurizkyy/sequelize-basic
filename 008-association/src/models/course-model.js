import { DataTypes } from "sequelize"

const Course = {
    CourseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

export default Course