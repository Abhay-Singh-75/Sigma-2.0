const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test'); 
// It is first method to use mongo with JS

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.find({age: {$gt: 47}}).then((res) => {
    console.log(res[0].name);
}).catch(err => {console.log(err)}); 

// const user1 = new User({
//     name: "Adam", 
//     email: "adam@yahoo.in", 
//     age: 48
// });

// user1.save();
// This is insert one value at time.

// now inserting multiple values in single step

// User.insertMany([
//     {
//         name:"Tony",
//         email:"tony@gmail.com",
//         age: 50,
//     },

//     {
//         name:"Bruce",
//         email:"bruce@yahoo.in",
//         age: 47,
//     },

//     {
//         name:"Peter",
//         email: "peter@gmail.com",
//         age: 30,
//     }
// ]).then( (res) => {
//     console.log(res);
// }); 






