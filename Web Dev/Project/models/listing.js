// This file is used to create the schema for the listing collection in the database

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type : String,
        required : true,
    },
    description: {
        type : String,
    },
    image: {
        type: String, 
        defaut: 'https://unsplash.com/photos/white-house-under-maple-trees-1ddol8rgUH8',
    },
    price: {
        type : Number,

    },
    location: {
        type : String,
        
    },
    country: {
        type : String,
        
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;