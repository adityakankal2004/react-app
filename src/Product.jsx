import "./Product.css"
import Price from "./Price";

function Product({title,idx}) {
    let oldPrices = ["12,455","81,000","61,000","74,000"];
    let newPrices = ["10,500","75,999","57,899","69,999"];
        return (
        <div className="Product">
            <h4>{title}</h4>
            <p>Description</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
    
}

export default Product;