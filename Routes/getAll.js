const express = require("express");
const getAll = express.Router();

//DATABASE MODEL
const Products = require("../Model/productModels");

getAll.get("/", async (req, res) => {
    let searchOptions = {};
    if (req.query.name != null && req.query.name !== "") {
        searchOptions.name = new RegExp(req.query.name, 'i');
        console.log(req.query)
    }
    try {
        const product = await Products.find(searchOptions);
       res.render("products/product",{
           product:product,
           searchOptions:req.query

       })

    } catch {
        res.redirect("/");
    }
});

//GET


getAll.post("/urunKaydet", async (req, res) => {

    const { isSeries, name, director, releaseDate, trailer,
        writers, image, producer, actors, imbdScore, description,
        time, type, seasons } = req.body;

    const product = await Products.create({
        isSeries, 
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
        time, 
        type, 
        seasons
    });

    res.send({
        message:`${product.name} is added.[${product.isSeries}]`
    })

})


module.exports = getAll;