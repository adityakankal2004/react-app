import Product from "./Product.jsx";

function ProductTab () {
    let options = ["Durability","Hitech","Fast"];
    let options2 = {a:"Hi-tech",b:"durable",c:"fast"};
    return (
        <>
            <Product title="Phone" price={30000}/>
            <Product title="Laptop" price={50000}/>
            <Product title="Ipad" price={15000}/>
        </>
    );
}

export default ProductTab;