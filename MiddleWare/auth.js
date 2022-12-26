const{UserInputError}=require('apollo-server-express');
const userModel = require('../DB/Models/User');
const jwt=require('jsonwebtoken');
const roles={
    User:'User',
    Admin:'Admin',
    HR:'HR'
};
const auth= async(bearertoken,roleaccess)=>{
  try {
    const token =bearertoken.split("Bearer ")[1];
if (!token) {
    throw new UserInputError('invalid-token');
} else {
  const decoded= jwt.verify(token,process.env.tokenSecret);
  if (!decoded) {
    throw new UserInputError('invalid-token');
    
  } else {
    const user = await userModel.findById(decoded.id).select('email role');
    if (!user) {
    throw new UserInputError('userNot found');
        
    } else {
        if (!roleaccess.includes(user.role)) {
    throw new UserInputError('userNot autharized');
            
        } else {
         return user   
        }
    }
  }
}
  } catch (error) {
    throw new UserInputError('catch error',{error});
    
  }
};
module.exports={auth,roles};