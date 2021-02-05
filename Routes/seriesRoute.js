
const express = require("express");
const seriesRoute = express.Router();
const Products = require("../Model/productModels");

//Main Page Routes
seriesRoute.get("/",async (req,res)=>{
   let searchOptions = {};
   if(req.query.name != null && req.query.name !== ""){
       searchOptions.name = new RegExp(req.query.name,'i');
   }
   const product = await Products.find({isSeries:true},searchOptions);
   res.render("series/index",{
      series:product,
      searchOptions:req.query
   })
});



//Exporting the route
module.exports = seriesRoute; 