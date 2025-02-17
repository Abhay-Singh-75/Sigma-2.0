const mongoose = require("mongoose");
const {Schema} = mongoose;

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main()
.then(() => console.log("Connection Successful"))
.catch(err => console.log(err));

const userSchema = new Schema({
    username : String,
    email : String,
});

const postSchema = new Schema({
    content : String,
    likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref : "user",
    }
});

const user = mongoose.model("user", userSchema);
const post = mongoose.model("post", postSchema);

const addData = async() => {

    let user1 = await user.findOne({username : "Rahul"});

    let post2 = new post({
        content : "bye bye", 
        likes : 10,
    });

    post2.user = user1;

    let res2 = await post2.save();
    console.log(res2);
}

const getData = async() => {
    let result = await post.findOne({}).populate("user");
    console.log(result);
}

getData();