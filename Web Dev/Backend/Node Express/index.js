const express = require("express");
const app = express();

// console.dir(app);

let port = 3000; //8080

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
});

// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>Fruits</h1<ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// })

app.get("/", (req, res) => {
    res.send("Hello I am Root path");
})

// app.get("/help", (req, res) => {
//     res.send("This is help path");
// })

// app.get("/search",(req, res) => {
//     res.send("This is a search path");
// })

// app.get("*", (req, res) => {
//     res.send("<h1>Page not found</h1>");
// })

// app.get("/:username", (req,res) => {
//     console.log(req.params);
//     res.send("This is a root");
// })

app.get("/search", (req,res) => {
    let {q} = req.query;
    res.send(`These are the result for: ${q}`);
})