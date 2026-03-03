
module.exports = (io)=>{
  io.on("connection", socket=>{
    console.log("User connected");
    socket.on("bridge-message", data=>{
      io.emit("bridge-message", data);
    });
  });
};
