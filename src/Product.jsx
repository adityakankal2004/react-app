import "./Product.css"

function Product({title,price,features=[],features2}) {
    // const list = features.map((feature) => <li>{feature}</li>);
        let styles = {backgroundColor: price > 30000 ? "yellow" : ""};
        let style1 = {backgroundColor:"green",borderRadius:"20px"};
        let style2 = {color:"white"};
        return (
        <div className = "Product" style={styles}>
            <h3 style={style1}>{title}</h3>
            <h3 style={style2}>Price-{price}</h3>
            <p>{features}</p>
            {price > 30000 ? <p style={style2}>Discount of 5%</p> : null}
        </div>
    );
    
}

export default Product;