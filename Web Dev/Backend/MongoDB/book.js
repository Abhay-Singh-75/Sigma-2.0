const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String, 
    },
    price: {
        type: Number,
        min: [1, "Price is too low for selling"],    //handling error accordingly  
    },
    discount: {
        type: Number,
        default: 0,
    },
});

const Book = mongoose.model("Book", bookSchema);

let Book1 = new Book({
    title: "marvel Comics",
    price: -499,
});

Book1
    .save()
    .then((res) => {
        console.log(res);
        console.log("Inserted Successfully");
    })
    .catch((err) => {
        console.log(err.errors.price.properties.message);
    });

