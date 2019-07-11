//Import Mongoose Instance
const mongoose=require('mongoose')

//Import Validator 
const validator = require('validator')

const Product=mongoose.model('Product',{
    product_name:{
        type:String,
        required:true
    },
    created_by:{
  type:String,
  required:true
    },
    created_on:
    {type: Date, 
    default: Date.now
  },
category_name:{
    type:String,
    required:true
},
modified_on:{
    type:Date,
    default:Date.now
},
modified_by:{
    type:String,
    required:true
},
user_name:{
     type:String,
required:true
}
})
module.exports=Product;