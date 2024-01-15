const subjectService = require("../service/subjectService")

class SubjectController {
    async getAllSubjects(req, res, next) {
        try {
            const subjects = await subjectService.getAllSubjects()
            return res.json(subjects)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = new SubjectController()