const express = require("express");
const app = express(); 
const Listing = require("./models/listing.js");

const mongoose = require("mongoose");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

const path = require("path");


main().then(() => {
    console.log("Connected with Database");
})
.catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(mongo_url);
}

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.listen(8080, () => {
    console.log("Server is listening at port: 8080");
});

// app.get("/testListing", async (req,res) => {
//     let sampleListing = new Listing({
//         title: "My new Villa",
//         description: "By the beach",
//         price: 399999,
//         location: "Calangue, Goa",
//         country: "India",
//     });

//     await sampleListing.save()
//     .then((res) => {
//         console.log(res);
//         console.log("Data was Saved");
//     }).catch((err) => {
//         console.log(err);
//     });
// });

// Setting views engine , ejs and path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});