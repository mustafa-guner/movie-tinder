
//Importing the dependencies
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//Requiring the seperated header and footer part
const expressLayouts = require("express-ejs-layouts");
//Requiring the view engine (EJS)
const ejs = require("ejs");
const path = require("path");

//--------------------------------------------------


//---SETTING THE ENVIRONMENT VARIABLES---
dotenv.config({ path: "./config/dotenv/.env" });
const port = process.env.PORT || 3000;


//--------------------------------------------------

//---CONNECTING THE DATABASE---
mongoose.connect(`${process.env.DB_CONNECT}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log(err);
});

//--------------------------------------------------

//---INITIALIZING & SETTING THE APPLICATION---- 
const app = express();

//Setting the view engine
app.set("view engine", 'ejs');
app.set("views", path.join(__dirname + "/views"));
app.set("layout", path.join(__dirname + "/views/layouts/layout"));
app.use(expressLayouts);

//Rendering the public folders
app.use(express.static("public"));
//Bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//--------------------------------------------------


//-----ROUTES-------
//Importing app routes
const movieRoute = require("./Routes/movieRoute");
const seriesRoute = require("./Routes/seriesRoute");
const mainPageRoute = require("./Routes/mainPageRoute");

const getAll = require("./Routes/getAll");

//---IMPORTED MIDDLEWARES---
app.use("/", mainPageRoute);
app.use("/filmler", movieRoute);
app.use("/diziler", seriesRoute);

app.use("/filmler-diziler",getAll);

//--------------------------------------------------

//Listening the port
app.listen(port, () => {
    console.log(`Server is running on PORT:${port}.`);
});