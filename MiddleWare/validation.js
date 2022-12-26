const validation= (schema,args)=>{
const {error,value}= schema.validate(args,{abortEarly:false});
return error;
}
module.exports=validation;