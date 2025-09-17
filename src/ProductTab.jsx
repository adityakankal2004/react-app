import Product from "./Product.jsx";

function ProductTab () {
    let styles = {
        display:"flex",
        flexWrap:"wrap",
    };
    return (
        <div style={styles}>
            <Product title="Asus SlimBook V405" idx={0}/>
            <Product title="MacBook M4 air" idx={1}/>
            <Product title="Acer Predator Helios Neo 16" idx={2}/>
            <Product title="Asus Vivobook" idx={3}/>
        </div>
    );
}

export default ProductTab;