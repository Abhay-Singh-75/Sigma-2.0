const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "/views"));

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public/CSS")));
app.use(express.static(path.join(__dirname, "public/JS")));

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})

app.get("/", (req, res) => {
    // res.send("This is root");
    res.render("home.ejs");
})

app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { num });
})

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    // console.log(instaData);
    if(data){
        res.render("IG.ejs", { data });
    }   else{
        res.render("error.ejs");
    }
    
});