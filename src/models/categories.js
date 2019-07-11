
//Import Mongoose Instance
const mongoose=require('mongoose');
//Import Validator 
const validator = require('validator')

const Category=mongoose.model('Category',{
    category_name:{
        type:String,
        required:true
},
created_by:{
    type:String
},
modified_by:{
    type:String
},
user_name:{
     type:String,
     required:true
},
created_on:{
    type: Date, 
default: Date.now
},
modified_on:{
    type:Date,
    default:Date.now,
    required:true
},
})
module.exports=Category;