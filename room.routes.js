
const router = require("express").Router();
const controller = require("../controllers/room.controller");

router.get("/", controller.getRooms);
router.post("/", controller.createRoom);

module.exports = router;
