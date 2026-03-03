
exports.getRooms = async (req,res)=>{
  res.json({rooms:[]});
};

exports.createRoom = async (req,res)=>{
  res.json({message:"Room Created"});
};
