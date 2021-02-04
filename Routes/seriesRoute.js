
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


seriesRoute.post("/diziKaydet",async(req,res)=>{
   const { name, director, releaseDate, trailer,
      writers, image, producer, actors, imbdScore, description,
      seasons, type } = req.body;

      const product = await Series.create({
         name,
         director,
         releaseDate,
         trailer,
         writers,
         image,
         producer,
         actors,
         imbdScore,
         description,
         seasons,
         type
      });

     res.send({
        message:`${product.name} is added [series]`
     })

})



//Exporting the route
module.exports = seriesRoute; 