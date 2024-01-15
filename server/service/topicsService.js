const connection = require("../database/db")

class TopicsService {
    async getTopicsBySubjectId(subjectId) {
        const connect = await connection
        const topics = await connect.execute("SELECT * FROM `topics` WHERE `subject_id`=?", [subjectId])
        return topics[0]
    }
}

module.exports = new TopicsService()