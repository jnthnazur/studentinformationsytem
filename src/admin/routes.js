const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getStudents);
router.get("/strand", controller.getStrand);
router.get("/section", controller.getSection);
router.get("/level", controller.getLevel);
router.post("/strand", controller.addStrand);
router.post("/section", controller.addSection);
router.post("/level", controller.addLevel);
router.post("/", controller.addStudent);
module.exports = router;
