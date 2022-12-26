const  {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
  const controller= require('./controller/root');
  const rootSchema= new GraphQLSchema({
    query: new GraphQLObjectType ({
        name:"rootquery",
        description:"root",
        fields:{
            hello:controller.helloroot
        }
    })
})
module.exports=rootSchema;