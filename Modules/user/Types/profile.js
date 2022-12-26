const  {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,GraphQLBoolean,
    GraphQLID
  } = require('graphql');
  const usertype= new GraphQLObjectType({
    name:"usertypes",
    description:"fdf",
    fields:{
        _id:{
            type:GraphQLID
        },
       userName:{
        type:GraphQLString
       },
       password:{
        type:GraphQLString
       },
       
       email:{
        type:GraphQLString
       },
       imageurl:{
        type:GraphQLString
       },
       role:{
        type:GraphQLString
       },
       emailCondirmation:{
        type:GraphQLBoolean
       },
       createdAt:{
        type:GraphQLString
       },
       updatedAt:{
        type:GraphQLString
       },
    }
  });
  module.exports={usertype};