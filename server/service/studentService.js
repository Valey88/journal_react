const connection = require("../database/db")
const ApiError = require("../exceptions/apiError")

class StudentService {
    async getStudentById(id) {
        if(id) {
            throw ApiError.BadRequest(`Некорректный запрос`)
        }else{
            const connect = await connection
            const student = await connect.execute("SELECT * FROM `students` WHERE `student_id`=?", [id])
            return student[0]
        }
    }

    async getStudentsByClassId(classId) {
        const connect = await connection
        const students = await connect.execute("SELECT * FROM `students` WHERE `class_id`=?", [classId])
        return students[0]
    }
}

module.exports = new StudentService()