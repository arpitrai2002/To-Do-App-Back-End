//import the model
const Todo=require("../models/Todo");

//define route handler

exports.getTodo=async(req,res)=>{
    try{
        const todo=await Todo.find({});

        res.status(200).json({
            success:true,
            data:todo,
            message:"Entire data is fatched",
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