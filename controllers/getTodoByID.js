//import the model
const Todo=require("../models/Todo");

//define route handler

exports.getTodoByID=async(req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findById({_id: id});

        if(!todo){
            return res.status(404).json({
            success:false,
            message:"Id Not found",
            });
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data is fetched`,
        }); 
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Error in Server",
        });
    }
}