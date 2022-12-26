const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const validation=require('../../../MiddleWare/validation');
const validators=require('../auth.validation');
const{UserInputError}=require('apollo-server-express');
const  {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
  } = require('graphql');
const userModel = require('../../../DB/Models/User');
const { signintype } = require('../Types/Signintypes');
  const signup= {
    type:GraphQLString,
    args: {
        userName:{
            type: new GraphQLNonNull(GraphQLString),
        },email:{
            type: new GraphQLNonNull(GraphQLString),
        },password:{
            type: new GraphQLNonNull(GraphQLString)
    },cpassword:{
        type: new GraphQLNonNull(GraphQLString)
},},
    
    resolve:async(_,args)=>{
        const {userName,cpassword,email,password}=args;
        const error= validation(validators.signupValidators,args);
        if (error) {
            throw new UserInputError('error',{error});
        } else {
            const finduser= await userModel.findOne({email});
            if (finduser) {
                return "User Exist";
            } else { 
              const newuser= new userModel( {userName,cpassword,email,password});
              await newuser.save();
              return "User Added";
    
            }
        }
       
    }
  };
  const signin= {
    type:signintype,
    args: {
        email:{
            type: new GraphQLNonNull(GraphQLString),
        },password:{
            type: new GraphQLNonNull(GraphQLString)
    }},
    
    resolve:async(_,args)=>{
        const {email,password}=args;
        const finduser= await userModel.findOne({email});
        if (!finduser) {
            return {Message:"User Not Exist"};
        } else { 
            const error= validation(validators.signinValidators,args);
        if (error) {
            throw new UserInputError('error',{error});
        } else {
            const comperedpass=await bcrypt.compare(password,finduser.password);
            if (!comperedpass) {
            return {Message:"password mismatch"};
                
            } else {
               const token= jwt.sign({id:finduser._id},process.env.tokenSecret); 
            return{Message:"Login",token};
        }
        }}
    }
  };
  module.exports= {signup,signin};