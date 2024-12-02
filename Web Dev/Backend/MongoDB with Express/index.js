// It is the basic setup in mongoose with express
// Starts Here
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

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
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsaap');
}

app.get("/", (req, res) => {
    res.send("root is working");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});
// Ends Here  

// Index Route
app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
});

// New Route for inserting data on database
app.get("/chats/new", (req,res) => {
    res.render("form.ejs");
})

// Create Route OR Inserting data in DB through Page 
app.post("/chats", (req,res) => {
    let {from, to, message } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date(),
    });
    res.redirect("/chats");

    newChat.save()
    .then((res) => {
        console.log(res);
        console.log("Inserted Successfully");
    }).catch((err) => {
        console.log(err);
    })
});


// This is Edit route -> in this we edit the chats 
app.get("/chats/:id/edit", async (req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat}); 
});

//  This update route 
app.put("/chats/:id", async (req,res) => {
    let {id} = req.params;
    let {message: newMessage} = req.body; //Isme humne {message: newMessage} isley kraa hsi kyuki hum uska naam "message" se badl ke "newMessage" kr rhe haii 
    let updateChat = await Chat.findByIdAndUpdate(id, {message: newMessage}, {runValidator: true, new: true });
    //  isme hamne new true isley kra hai kyuki hume terminal new wali chat print krani haii
    console.log(updateChat);
    res.redirect("/chats");
});

// Destroy Route or we Delete chats route

app.delete("/chats/:id", async (req,res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats"); 
    console.log("deleted Successfully");
});