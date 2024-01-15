const studentService = require("../service/studentService")

class StudentController {
    async getStudentById(req, res, next) {
        try {
            const id = req.params.id
            const student = await studentService.getStudentById(id)
            return res.json(student)
        } catch (error) {
            next(error)
        }
    }

    async getStudentsByClassId(req, res, next) {
        try {
            const class_id = req.params.class_id
            const students = await studentService.getStudentsByClassId(class_id)
            return res.json(students)
        } catch (error) {
            next(error)
        }
    }

    async attendance(req, res, next) {
        try {
            const { student_id, lesson_id, attendance_status } = req.body
            const attendance = await studentService.attendance(student_id, lesson_id, attendance_status)
            return res.json(attendance)
        } catch(error) {
            next(error)
        }
    }
}


module.exports = new StudentController()