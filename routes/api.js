const express = require("express");
const router = express.Router();
//import students
const StudentController =  require("../controllers/StudentController");

//routing home
router.get("/", (req, res) => {
    res.send("Hello Express Nodemon");
});



router.get("/students", StudentController.index);
router.put("/students/:id", StudentController.update);
router.post("/students", StudentController.store);
router.delete("/students/:id", StudentController.destroy);


//export
module.exports = router;