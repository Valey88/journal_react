const connection = require("../database/db")

class SubjectService {
    async getAllSubjects() {
        const connect = await connection
        const subjects = await connect.execute("SELECT * FROM `subjects`")
        return subjects[0]
    }
}

module.exports = new SubjectService()