const express = require('express');
const app = express();
const path = require("path");
const methodOverride =require("method-override");
const ejsMate = require("ejs-mate");

const mongoose = require('mongoose');
const Listing = require("./models/listing");
const {listingSchema} = require("./schema.js");

const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

app.set('view engine', 'ejs');
app.set("views", path.join( __dirname, "views"));


app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

app.engine('ejs', ejsMate);

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});

const validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }   else{
        next();
    }
}

// !: Root Route
app.get('/', (req,res) => {
    res.send('It is a root route');
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

main()
.then(() => console.log('Database Connected'))
.catch((err) => {
    console.log(err);
});

// !: Index Route
app.get("/listings", wrapAsync(async (req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
    // console.log(allListings);
}));

// !: New Route
app.get("/listings/new", (req,res) => {
    res.render('listings/new.ejs');
})

// !: Show Route
app.get("/listings/:id", wrapAsync(async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
}));

// !: Create Route
app.post("/listings",   validateListing ,wrapAsync( async (req,res,next) => {
    // !: Old Method
    // const {title, description, image, price, location, country} = req.body.listing; 

    // !: New Method
    const newListing = new Listing(req.body.listing);
    console.log(newListing);
    await newListing.save();
    res.redirect('/listings');

}));

// !: Edit Route
app.get("/listings/:id/edit", wrapAsync( async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
}));

// !: Update Route
app.put("/listings/:id", wrapAsync( async (req,res) => {
    let {id} = req.params;
    let editListing = req.body.listing;
    const updateListing = await Listing.findByIdAndUpdate(id, editListing);
    res.redirect(`/listings/${id}`);
}));

// !: Delete Route
app.delete("/listings/:id", wrapAsync( async (req,res) =>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));


app.all("*", (req,res,next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// mark: error middleware //

app.use((err,req,res,next) => {
    
    let {status = 499 , message = "Something Went Wrong!"} = err;
    res.render("listings/error.ejs", {status, message});
});