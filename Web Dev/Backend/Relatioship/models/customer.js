const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));


// mark: Creating Schema
const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
    name : String,
    orders : [
        {
            type : Schema.Types.ObjectId,  // note: To give 'id' in schema we used populate
            ref : "order",
        }
    ]
});

// mark: Creating middleware

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async (cust) => {
  if(cust.orders.length){
    let result = await order.deleteMany({ _id : { $in : cust.orders}})
  }
});

//  mark: Creating Model
const order = mongoose.model("order", orderSchema);
const customer = mongoose.model("customer", customerSchema);


// mark: Adding details 

const addCust = async () =>{

  let newCust = new customer({
    name : "Karan Arjun",
  });

  let newOrder = new order({
    item : "Burger",
    price : 250
  });

  newCust.orders.push(newOrder);
  await order.deleteOne({item : "Burger"});
  await newOrder.save();
  await newCust.save();

  console.log("New customer added");   
}

// addCust();

const delCust = async () => {
  let res = await customer.findByIdAndDelete("67b20086e015a6545b050318");
  console.log(res);
}

delCust();







// delCust();
// const addCustomer = async() => {
//     let cust1 = new customer({
//         name: "Rahul",
//     });

//     let order1 = await order.findOne({item : "Samosa"});
//     let order2 = await order.findOne({item : "Chips"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let res = await cust1.save();
//     console.log(res);
// }

// addCustomer();

// const addOrders = async () => {
//   let res = await order.insertMany([
//     {
//       item: "Samosa",
//       price: 10,
//     },

//     {
//       item: "Pao-Bhaji",
//       price: 90,
//     },

//     {
//       item: "Chips",
//       price: 10,
//     }
//   ]);
//   console.log(res);
// };

// addOrders();
