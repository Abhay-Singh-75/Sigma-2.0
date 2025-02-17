const mongoose = require("mongoose");

main()
.then(() => console.log("Connection Sucessfull"))
.catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
    console.log("Database Connected");
}

const {Schema} = mongoose;

const userSchema = new Schema({
    username: String,

    addresses: [
        {
            _id : false,
            location : String,
            city : String,
        }
    ]
});

const user = mongoose.model("user", userSchema);


const addUsers = async() => {
    let user1 = new user({
        username : "sherlockems",

        addresses : [
            {
                location : "221B Baker Street",
                city : "London",
            },
        ],
    });

    user1.addresses.push({
        location : "P32 Wallstreet",
        city : "London",
    });

    await user.deleteMany({});
    let result = await user1.save();
    console.log(result);
}

addUsers();