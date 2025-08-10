import db from "../utils/db.js"
import UserAttributes from "./user-model-2.js"
import SalesAttributes from "./sales-model.js"
import CityAttributes from "./city-model.js"
import PostAttributes from "./post-model.js"
import StudentAttributes from "./student-model.js"
import CourseAttributes from "./course-model.js"

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

const Sales = db.define("Sales", SalesAttributes, {
    tableName: "sales",
    underscored: true
})

const City = db.define("City", CityAttributes, {
    tableName: "city",
    underscored: true
})

const Post = db.define("Post", PostAttributes, {
    tableName: "post",
    underscored: true,
    timestamps: false
})

const Student = db.define("Student", StudentAttributes, {
    tableName: "student",
    underscored: true
})

const Course = db.define("Course", CourseAttributes, {
    tableName: "course",
    underscored: true
})

City.hasOne(Sales, {
    foreignKey: "CityId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
})

Sales.belongsTo(City, {
    foreignKey: "CityId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
})

User.hasMany(Post, {
    foreignKey: "userId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
})

Post.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
})

Student.belongsToMany(Course, {
    through: "StudentCourse",
    foreignKey: "StudentId",
    otherKey: "CourseId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
})

Course.belongsToMany(Student, {
    through: "StudentCourse",
    foreignKey: "StudentId",
    otherKey: "CourseId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
})

db.sync()

export { db, User, Post };