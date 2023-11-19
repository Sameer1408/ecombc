import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const BigProduct = () => {

    const product = useSelector(state => state.user.selectedProduct);
    const [qty, setQty] = useState(1);

    console.log(product, "pro")

    const handleAddToWishList =async() => {
        let token = localStorage.getItem('jwtToken');
        const response = await axios.post(
            'http://localhost:4000/product/wishlist/add',
            { productId:product._id},
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        if(response.data.success)
        {
            alert("successfully added to wishList")
        }else{
            alert("already in wish list")
        }
    }

    const handleAddToCart = () => {

    }

    return (
        <div className="productBig">
            <div id="bigImg"
                style={{ backgroundImage: `url(${product.src})` }}
            >
            </div>
            <div id="bigDesc">
                <h1>{product?.name}</h1>
                <p>{product?.description}</p>
                <h4>₹ {" "}{product?.price}</h4>
                <button
                    disabled={qty < product.quantity ? false : true}
                    onClick={(e) => { setQty(qty + 1) }}
                >+</button>
                {qty}
                <button
                    disabled={qty > 0 ? false : true}
                    onClick={(e) => { setQty(qty - 1) }}
                >-</button>
                <button onClick={handleAddToWishList}>Add to WishList</button>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default BigProduct;