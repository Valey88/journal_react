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

    async academicPerformance(studentId, lessonId, attendanceStatus, progressValue) {
        const connect = await connection
        if(!studentId || !lessonId || !attendanceStatus) {
            throw ApiError.BadRequest(`Не все поля заолненны`)
        }
        if(progressValue == undefined) {
            progressValue = null
        }
        await connect.execute("INSERT INTO `academic_performance` (`student_id`, `lesson_id`, `attendance_status`, `progress_value`) VALUES(?,?,?,?)", [studentId, lessonId, attendanceStatus, progressValue])
        return {studentId, lessonId, attendanceStatus, progressValue}
    }
}

module.exports = new StudentService()