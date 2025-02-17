const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError");


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});

// app.use((req,res,next) => {
//     console.log("middleware 1");
//     next();
// });

app.use((req,res,next) => {
    console.log("deafult middleware");
    next();
});

// app.use("/random", (req,res,next)=> {
//     console.log("Random middleware");
//     next();
// });

// note: creating a middleware for verfiy token.

// app.use("/random", (req,res,next) => {
//     let {id} = req.query;

//     if(id === 'access'){
//         console.log("verified");
//         res.send("data");
//     }else{
//         res.send("Access Denied");
//     }
// });

//  mark: paasing middleware as a function.
// .it is function.
const check = (req,res) => {
    let {id} = req.query;

    if(id === "access"){
        res.send("data");
    }else{
        throw new ExpressError(400, "ACCESS DENIED");
    //    throw new Error("Access Denied");
    }
}

app.get("/", (req,res) =>{
    res.send("Root is working");
});


//  note: passing a MIDDLEWARE.
app.get("/random",check, (req,res) => {
    check();
    res.send("Random Route");
});

// mark: Error handling

app.get("/err", (req,res) => {
    abcd = dbcs;
});

app.get("/admin", (req,res) => {
    throw new ExpressError(403, "Access denid to the admin");
});

app.use((err,req,res,next) => {
    let {status = 500, message = "Some Error occured"} = err;
    res.status(status).send(message);
});

app.use((req,res) => {
    res.status(404).send("Page not found!");
});


//  note: next code is written in moongodb with express.