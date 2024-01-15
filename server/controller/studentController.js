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

    async academicPerformance(req, res, next) {
        try {
            const { student_id, lesson_id, attendance_status, progress_value } = req.body
            const academicPerformance = await studentService.academicPerformance(student_id, lesson_id, attendance_status, progress_value)
            return res.json(academicPerformance)
        } catch(error) {
            next(error)
        }
    }
}


module.exports = new StudentController()