const mongoose = require("mongoose");

//Creating an instance of Mongo Model Schema
const Schema = mongoose.Schema;


const Products = new Schema({

    isSeries:{
        type:Boolean,
        required:true
    },

    name:{ 
        type:String,
        required:[true,"Lutfen urunun adini belirtiniz."]
    },
    director:{ 
        type:String,
        required:[true,"Lutfen yonetmeni belirtiniz."]
    },
    releaseDate:{
        type:Number,
        required:[true,"Lutfen yayinlanma tarihini belirtiniz."]
    },
    trailer:{
        type:String,
        required:[true,"Lutfen trailer ekleyiniz."]
    },
    writers:{
        type:String,
        required:[true,"Lutfen yazarlari ekleyiniz"]
    },
    
    image:{
        type:String,
        default:"default.jpg"
    },
    producer:{
        type:String,
        required:[true,"Lutfen yapimciyi belirtiniz."]
    },
    actors:{
        type:String,
        required:[true,"Lutfen en az 1 basrol oyuncusu giriniz."]
    },
    imbdScore:{
        type:Number,
        required:[true,"Lutfen IMBD puanini belirtiniz."]
    },
    description:{
        type:String,
        required:[true,"Lutfen aciklama ekleyiniz."]
    },
    time:{
        type:Number,
        default:0
    },
    seasons:{
        type:Number,
        default:0
    },
    type:{
        type:String,
        required:[true,"Lutfen turunu belirtiniz."]
    },
    ageLimit:{
        type:Number
    },
    link:{
        type:String,
        required:[true,"Lutfen link giriniz"]
    }
});


//Exporting Movies Schema & Users Schema
module.exports = mongoose.model("Products",Products);


