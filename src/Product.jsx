import "./Product.css"

function Product({title,price,features=[],features2}) {
    // const list = features.map((feature) => <li>{feature}</li>);
    return (
        <div className = "Product">
            <h3>{title}</h3>
            <h3>Price-{price/2}</h3>
            <p>{features}</p>
            <p>
                {features.map((feature) => (
                    <li>{feature}</li>
                ))}</p>
        </div>
    );
}

export default Product;