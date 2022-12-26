const  {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
  } = require('graphql');
const controller=require('./controller/auth');
    const authSchema= new GraphQLSchema({
      query: new GraphQLObjectType ({
          name:"rootquery",
          description:"root",
          fields:{
           startMessage:{
            type:GraphQLString,
            resolve:()=>{
           return "hi";
            }
           }
          }
      }),
      mutation: new GraphQLObjectType ({
        name:"rootmutation",
        description:"roodt",
        fields:{
          signupp:controller.signup,
          signin:controller.signin
        }
    })
  })
  module.exports =authSchema;