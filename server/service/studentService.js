const connection = require("../database/db")
const ApiError = require("../exceptions/apiError")

class StudentService {
    async getStudentById(id) {
        const connect = await connection
        const student = await connect.execute("SELECT * FROM `students` WHERE `student_id`=?", [id])
        return student[0]
    }

    async getStudentsByClassId(classId) {
        const connect = await connection
        const students = await connect.execute("SELECT * FROM `students` WHERE `class_id`=?", [classId])
        return students[0]
    }

    async attendance(studentId, lessonId, attendanceStatus) {
        const connect = await connection
        if(!studentId || !lessonId || !attendanceStatus) {
            throw ApiError.BadRequest(`Не все поля заолненны`)
        }
        await connect.execute("INSERT INTO `attendance`(`student_id`, `lesson_id`, `attendance_status`) VALUES(?,?,?)", [studentId, lessonId, attendanceStatus])
        return {studentId, lessonId, attendanceStatus}
    }
}

module.exports = new StudentService()