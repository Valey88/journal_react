const Router = require('express').Router

// Controllers
const SubjectController = require("../controller/subjectController")
const StudentController = require("../controller/studentController")
const TopicsController = require("../controller/topicsController")
const router = new Router()

// subject
router.get("/get_all_subjects", SubjectController.getAllSubjects)

// student
router.get("/student/:id", StudentController.getStudentById)
router.get("/students/:class_id", StudentController.getStudentsByClassId)

router.post("/academic_performance", StudentController.academicPerformance)

// topic
router.get("/topics/:subject_id", TopicsController.getTopicsBySubjectId)

module.exports = router