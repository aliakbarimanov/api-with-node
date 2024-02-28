const express = require("require");
const router = express.Router();

router.get("/getPosts", getPosts);
router.get("/getDetail/:id", getDetail);
router.get("/getUpdate/:id", getUpdate);
router.get("/deletePost/:id", deletePost);

module.exports = router;