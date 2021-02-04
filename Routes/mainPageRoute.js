const express = require("express");
const mainPageRouter = express.Router();
const Products = require("../Model/productModels");

//Importing timer schedule package
const cron = require("node-cron");

//Requiring the Helper Functions
const { movieOfTheDay,recommendedMovies} = require("../Helpers/helperMovie");

//Main Page Routes

//--Movie of the day--
mainPageRouter.get("/", async (req, res) => {
    let searchOptions = {};
    if(req.query.name != null && req.query.name !== ""){
        searchOptions.name = new RegExp(req.query.name,'i');
    }
    try {
        const product = await Products.find({isSeries:false},searchOptions);
        //Getting day of the movie (imbd >=7 )
        // const movieDay = setInterval(function(){movieOfTheDay(product);},86400000) 
        // const stopMovieDay = setTimeout(function(){clearInterval(movieDay)},1000)
        const movieDay = movieOfTheDay(product);
       
        //Listing recommended movies (films,imbd)
        const recommendedMoviesList = recommendedMovies(product,5);

        res.render("index",{
            movieOfDay:movieDay,
            searchOptions:req.query,
            products:product,
            recommended:recommendedMoviesList,
        });
    } catch {
        res.redirect("/");
    };
});



//Exporting the route
module.exports = mainPageRouter; 