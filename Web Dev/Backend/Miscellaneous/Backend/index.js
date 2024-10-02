const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Listening to port ${port}`); 
})

app.get("/register", (req,res) => {
    let {user, pass} = req.query;
    console.log(user);
    console.log(pass);
    res.send("Standard GET response");
});

app.use(express.urlencoded({ extened: true}));

app.post("/register", (req,res) => {
    console.log(req.body);
    res.send("Standard POST response");
})