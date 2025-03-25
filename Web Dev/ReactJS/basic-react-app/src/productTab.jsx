import Product from "./Product";


function productTab() {
    // return (
    //     <>
    //         <Product title="phone" price={30000}/>
    //         <Product title="laptop" price={40000}/>
    //         <Product title="pen" />
    //     </>
    // );

    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <div style={styles}>
            <Product title="Logitech MX Master" idx={0}/>
            <Product title="Apple Pencil (2nd Gen)" idx={1}/>
            <Product title="Zebronics Zeb-transformer" idx={2}/>
            <Product title="Protronics tod 23" idx={3}/>
        </div>
    )
}

export default productTab;