const joi =require('joi');
const updateValidators=joi.object({
    userName:joi.string().required(),  
    token: joi.string().required()  
});
const SearchValidators=joi.object({
    id:joi.string().required().min(24).max(24),
    token: joi.string().required()
        
});

module.exports={updateValidators,SearchValidators}