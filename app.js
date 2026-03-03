
const express = require("express");
const cors = require("cors");
const roomRoutes = require("./routes/room.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/rooms", roomRoutes);

app.get("/", (req,res)=>res.json({status:"GayScape API Online"}));

module.exports = app;
