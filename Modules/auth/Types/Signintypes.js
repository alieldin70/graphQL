const  {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
  } = require('graphql');
  const signintype= new GraphQLObjectType({
    name:"types",
    description:"fdf",
    fields:{
        Message:{
            type:GraphQLString
        },
        token:{
            type:GraphQLString
        },
    }
  });
  module.exports={signintype};