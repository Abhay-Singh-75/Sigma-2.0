const express = require("express");
const app = express();
const port = 8000;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(methodOverride("_method"));

let posts = [
    {
        id: uuidv4(),
        username: "ApnaCollege",
        content: "I love Coding"
    },

    {
        id: uuidv4(),
        username: "Abhay Singh",
        content: "I got selected for my first internship"
    }, 

    {
        id: uuidv4(),
        username: "Rahul Kumar",
        content: "Hard Work is important"
    }
];


app.use(express.urlencoded({extends: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`The app was listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Server is working well");
})

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
    
});

app.get("/posts/new", (req,res) => {
    res.render("form.ejs");
});

app.post("/posts", (req,res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id ,username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    let post = posts.find((post) => id == post.id);
    res.render("show.ejs", {post});
    
});

app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((post) => id == post.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((post) => id == post.id);
    res.render("edit.ejs", {post});
})

app.delete("/posts/:id", (req,res) => {
    let {id} = req.params;
    posts = posts.filter((post) => id != post.id);
    res.redirect("/posts");
})