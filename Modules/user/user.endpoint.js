const { roles } = require("../../MiddleWare/auth");

const endpoint={
    profile:[roles.User,roles.Admin]
}
module.exports={endpoint}