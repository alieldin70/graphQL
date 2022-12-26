const  {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
  } = require('graphql');
const helloroot={
    type:GraphQLString,
    resolve:()=>{
        return "hello";
    }

}
module.exports={helloroot};