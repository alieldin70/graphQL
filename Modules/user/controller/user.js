const { usertype } = require("../Types/profile");
const  {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
  } = require('graphql');
const { auth } = require("../../../MiddleWare/auth");
const { endpoint } = require("../user.endpoint");
const userModel = require("../../../DB/Models/User");
const{UserInputError}=require('apollo-server-express');
const validators=require('../user.validation');
const validation = require("../../../MiddleWare/validation");

const userprofile={
    type:usertype,
    args:{
        token:{
            type:GraphQLString
        }
    },
    resolve:async(_,args)=>{
        const {token}=args;
        const authuser =await auth(token,endpoint.profile);
        const user=await userModel.findById(authuser._id);
        return user;
    }
};
const updateprofile={
    type:usertype,
    args:{
        token:{
            type:GraphQLString
        },
        userName:{
            type:GraphQLString
        }
    },
    resolve:async(_,args)=>{
        const {token,userName}=args;
        const error= validation(validators.updateValidators,args);
        if (error) {
            throw new UserInputError('error',{error});
        } else {
        const authuser =await auth(token,endpoint.profile);
        const user=await userModel.findOneAndUpdate({_id:authuser._id},{userName},{new:true});
        return user;
    }}
};
const Deleteuser={
    type:usertype,
    args:{
        token:{
            type:GraphQLString
        }
    },
    resolve:async(_,args)=>{
        const {token}=args;
        const authuser =await auth(token,endpoint.profile);
        const user=await userModel.findOneAndDelete({_id:authuser._id},{new:true});
        return user;
    }
};
const SearchBId={
    type:usertype,
    args:{
        token:{
            type:GraphQLString
        },
        id:{
            type:GraphQLID
        }
    },
    resolve:async(_,args)=>{
        const {token,id}=args;
        const error= validation(validators.SearchValidators,args);
        if (error) {
            throw new UserInputError('error',{error});
        } else {
        const authuser =await auth(token,endpoint.profile);
        const user=await userModel.findById(id);
        if (user) {
        return user;
            
        } else {
           throw new UserInputError("User Not Found") ;
        }}
    }
};
const GetAllUsers={
    type:new GraphQLList(usertype),
    args:{
        token:{
            type:GraphQLString
        }
    },
    resolve:async(_,args)=>{
        const {token}=args;
        const authuser =await auth(token,endpoint.profile);
        const users=await userModel.find({});
        if (users) {
        return users;
            
        } else {
           throw new UserInputError("No Users") ;
        }
    }
};
module.exports={userprofile,updateprofile,Deleteuser,SearchBId,GetAllUsers};