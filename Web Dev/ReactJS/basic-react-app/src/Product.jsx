import "./Product.css";
import Price from "./price.jsx";

// function Product({title, price = 5}) {

//     // let isDiscount = price > 30000 ? "Discount of 5%" : null; 
//     // let isDiscount = price > 30000;
//     // let styles = {backgroundColor: isDiscount ? "yellow" : ""};
//     // return (
//     //     <div className="Product" style={styles}>
//     //         <h3>{title}</h3>
//     //         <h5>{price}</h5>
//     //         {/* {price > 30000 ? "Discount of 5%" : null}   */}
//     //         {/* Updated statement of above statement */}
//     //         {isDiscount && <p>Discount of 5%</p>}
//     //     </div>
//     // );


//     return (
//         <div className="Product">
//             <p>Title</p>
//             <p>Description</p>
//             <Price />
//         </div>
//     );
// }

function Product ({title, idx}) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    // let description = ["8,000 DPI", "Design for iPad Pro","intutive surafce", "wrieless"];

    let description = [
        ["8,000 DPI", "5 programmable buttons"],
        ["Design for iPad Pro", "intutive surface"],
        ["intutive surafce", "5 programmable buttons"],
        ["wirelss", "Design for iPad Pro"]
    ];

    return (
        <div className="Product">
            <p>{title}</p>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice= {oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;