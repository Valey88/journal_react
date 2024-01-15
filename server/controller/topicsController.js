const topicsService = require("../service/topicsService")


class TopicsController {
    async getTopicsBySubjectId(req, res, next) {
        try {
            const subjectId = req.params.subject_id
            const topics = await topicsService.getTopicsBySubjectId(subjectId)
            return res.json(topics)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = new TopicsController()