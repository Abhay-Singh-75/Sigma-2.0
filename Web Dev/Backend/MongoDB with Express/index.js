// It is the basic setup in mongoose with express
// Starts Here
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");   
app.use(express.static(path.join(__dirname, "public")));   // Linking CSS or jS (STATIC) ;files
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsaap');
}

app.get("/", (req, res) => {
    res.send("root is working");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});
// Ends Here  


// Index Route
app.get("/chats", async (req,res,next) => {
    try{
        let chats = await Chat.find();
        // console.log(chats);
        res.render("index.ejs", { chats });
    }   catch(err){
        next();
    }
    
});

// New Route for inserting data on database
app.get("/chats/new", (req,res) => {
    res.render("form.ejs");
})

// Create Route OR Inserting data in DB through Page 
app.post("/chats", async (req,res,err) => {
    try{
        let {from, to, message } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            message: message,
            created_at: new Date(),
        });
        res.redirect("/chats");
    
        await newChat.save()
        .then((res) => {
            console.log(res);
            console.log("Inserted Successfully");
        }).catch((err) => {
            console.log(err);
        });
    }
    catch(err){
        next(err);
    }
    
});



// This is Edit route -> in this we edit the chats 
app.get("/chats/:id/edit", async (req,res,next) => {

    try{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", {chat}); 
    }
    catch(err){
        next();
    }
    
});

// Show route
app.get("/chats/:id", asyncWrap(async (req,res,next) => {

        let {id} = req.params;
        let chat = await Chat.findById(id);
    
        if(!chat){
            next(new ExpressError(404, "Chat not found"));
        }
        else{
            res.render("edit.ejs", {chat});
        }
}));

//  This update route 
app.put("/chats/:id", async (req,res,next) => {

    try{
        let {id} = req.params;
        let {message: newMessage} = req.body; //Isme humne {message: newMessage} isley kraa hsi kyuki hum uska naam "message" se badl ke "newMessage" kr rhe haii 
        let updateChat = await Chat.findByIdAndUpdate(id, {message: newMessage}, {runValidator: true, new: true });
        //  isme hamne new true isley kra hai kyuki hume terminal new wali chat print krani haii
        console.log(updateChat);
        res.redirect("/chats");
    }   catch(err){
        next(err);
    }
    
});

// Destroy Route or we Delete chats route

app.delete("/chats/:id", async (req,res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats"); 
    console.log("deleted Successfully");
});

app.use((err,req,res,next) =>{
    console.log(err.name);
    next();
});


app.use((err,req,res,next) => {
    let {status = 500, message= "Some error occured"} = err;
    res.status(status).send(message);
})



function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err) => next(err));
    }
}