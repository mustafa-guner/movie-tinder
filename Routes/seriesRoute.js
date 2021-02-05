
const express = require("express");
const seriesRoute = express.Router();
const Products = require("../Model/productModels");

//Main Page Routes
seriesRoute.get("/",async (req,res)=>{

   let query = Products.find({isSeries:true});

   //Searching for names
   if(req.query.name !=null && req.query.name !== ""){
       let query = query.regex("name",new RegExp(req.query.name,"i"));
   };

   //Searching for categories
   if(req.query.types){
      query = query.regex("type",new RegExp(req.query.type,"i"));
   }

   //Searching for producers
   if(req.query.producers){
      query = query.regex("producer",new RegExp(req.query.producers,"i"));
   }

   const product = await query.exec();
   res.render("series/index",{
      series:product,
      searchOptions:req.query
   })
});



//Exporting the route
module.exports = seriesRoute; 