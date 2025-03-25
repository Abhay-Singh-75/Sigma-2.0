export default function Price({oldPrice, newPrice}) {

    let OldPriceStyles = {
        textDecoration: "line-through",
        color: "grey",
    }

    let newPriceStyles = {
        fontWeight: "bold",
    }

    let styles = {
        backgroundColor: "#e0c367",
        borderBottomLeftRadius: "11px",
        borderBottomRightRadius: "11px",
    }

    return (
        <div style={styles}>
            <span style={OldPriceStyles}>{oldPrice}</span>

            &nbsp;&nbsp;

            <span style={newPriceStyles}>{newPrice}</span>
        </div>
    )
}