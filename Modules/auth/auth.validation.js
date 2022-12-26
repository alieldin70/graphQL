const joi =require('joi');
const signupValidators=joi.object({
    userName:joi.string().required(),
    email: joi.string().email().required(),
    password:joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required(),
    cpassword:joi.string().valid(joi.ref('password')).required(),    
});
const signinValidators=joi.object({
    email: joi.string().email().required(),
    password:joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required(),   
});

module.exports={signupValidators,signinValidators}