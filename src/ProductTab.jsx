import Product from "./Product.jsx";

function ProductTab () {
    let options = ["Durability","Hitech","Fast"];
    let options2 = {a:"Hi-tech",b:"durable",c:"fast"};
    return (
        <>
            <Product/>
            <Product/>
            <Product/>
        </>
    );
}

export default ProductTab;