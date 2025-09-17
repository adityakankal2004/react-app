import "./Product.css"
import Price from "./Price";

function Product({title,idx}) {
    let oldPrices = ["12,455","81,000","61,000","74,000"];
    let newPrices = ["10,500","75,999","57,899","69,999"];
    let description = ["Slim Elegant and fun","The greatest MacBook ever","Gaming at it's best","Best for designers and coders"];
        return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
    
}

export default Product;