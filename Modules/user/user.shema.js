const  {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
  } = require('graphql');
const {userprofile,updateprofile,Deleteuser, SearchBId, GetAllUsers}=require('./controller/user');
    const userSchema= new GraphQLSchema({
      query: new GraphQLObjectType ({
          name:"userquery",
          description:"user",
          fields:{
            userprofile:userprofile,
            SearchBId:SearchBId,
            GetAllUsers:GetAllUsers
          }
      }),
      mutation: new GraphQLObjectType ({
        name:"usermutation",
        description:"user",
        fields:{
          updateprofile:updateprofile,
          Deleteuser:Deleteuser
         
        }
    })
  })
  module.exports =userSchema;