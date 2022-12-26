const express =require('express');
const app=express();
app.use(express.json());
const port= 3000;
require('dotenv').config();
const  {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
  } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
 const indexschema=require('./Modules/index.Schema');
 const DBconnect= require('./DB/connection');
 DBconnect();
app.use(
    '/graphql',
    graphqlHTTP({
      schema: indexschema.rootSchema,
      graphiql: true,
    }),
  );app.use(
    '/auth',
    graphqlHTTP({
      schema: indexschema.authSchema,
      graphiql: true,
    }),
  );
  app.use(
    '/user',
    graphqlHTTP({
      schema: indexschema.userSchema,
      graphiql: true,
    }),
  );

app.listen(port,_=>{
console.log(`server is running......${port}`);
});