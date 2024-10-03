//import the model
const Todo=require("../models/Todo");

//define route handler

exports.deleteTodo=async(req,res)=>{
    try{
        const id=req.params.id;
        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"Data Deleted",
        }); 
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        });
    }
}