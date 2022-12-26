const mongoose =require('mongoose');
mongoose.set("strictQuery", false);
const connectDB = ()=>{
    return mongoose.connect(process.env.DBURL).then(result=>{
        console.log("DB connected successfully.........");
    }).catch(error=>{
        console.log("error occure..");

    });
};
module.exports=connectDB;