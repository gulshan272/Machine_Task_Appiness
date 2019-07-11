const express=require('express');
const router=express.Router();
//Imprt the mongoose connection File
require('../src/db/mongoose')
//Import Product model
const Product = require('../src/models/products')
//Import Category model
const Category=require('../src/models/categories')

//To post data for Category
router.post('/appiness/api/v1.0/categories',(req,res)=>
{
const category=new Category(req.body)
console.log(req.body);
category.save().then(()=>
{
    res.status(201).send(category)
}).catch((e)=>
{
    res.status(400).send(e)
})
})

//To post data for Product
router.post('/appiness/api/v1.0/products',(req,res)=>
{
const product=new Product(req.body)

product.save().then(()=>
{
    res.status(201).send(product)
}).catch((e)=>
{
    res.status(400).send(e)
})
})
//To get data for categrory with count
router.get('/appiness/api/v1.0/allcategories',(req,res)=>
{
     Product.aggregate([
         { $group: { _id: "$category_name", count: { $sum: 1 } } }  ])
    .then((products)=>
  {
          res.send(products);
    })
})

module.exports=router;