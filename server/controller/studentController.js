const studentService = require("../service/studentService")

class StudentController {
    async getStudentById(req, res, next) {
        try {
            const id = req.params.id
            const subjects = await studentService.getStudentById(id)
            return res.json(subjects)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = new StudentController()