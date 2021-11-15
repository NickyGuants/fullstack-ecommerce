import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../redux/actions/productActions';
import { addItem, decrementItem, incrementItem, removeItem } from '../redux/actions/cartActions'

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;
    
    const cartItems = useSelector((state) => state.cart.cartItems);
    const inCart = cartItems.find((item) => item.id === product.id ? true : false);
   
    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [dispatch, id])
    
    const fetchQuantity = () => {
        if (cartItems.length === 0) {
          return 0;
        } else {
          return cartItems?.find((car) => car.id === product.id).quantity;
        }
    };
    
    return (
        <section id="details-page">
            <h1 id="heading">Details</h1>
            {loading ? <h1>Loading product details  </h1> : error ? <h2>{error}</h2>
                :
                (
                <div id="details">
                        <div id="details-image">
                            <img src={product.imgSrc} alt={product.name} />
                        </div>
                        <div className="details-text">
                            <div>
                                <p>Name: {product.name}</p>
                                <p>Year: {product.year}</p>
                                <p>Price: ${product.price?.toLocaleString()}</p>
                            </div>
                            <div className="details-items">
                                <div className="details-item">
                                    <h4>Make</h4>
                                    <p className="text-success">{product.make}</p>
                                </div>
                                <div className="details-item">
                                    <h4>Model</h4>
                                    <p className="text-success">{product.model}</p>
                                </div>
                                <div className="details-item">
                                    <h4>Fuel</h4>
                                    <p className="text-success">{product.fuelCapacity}</p>
                                </div>
                                <div className="details-item">
                                    <h4>Transmission</h4>
                                    <p className="text-success">{product.transmission}</p>
                                </div>
                                <div className="details-item">
                                    <h4>Engine size</h4>
                                    <p className="text-success">{product.engineSize}</p>
                                </div>
                            </div>
                            
                                {inCart ? (
                                    <div className="buttons">
                                        <div className="units">
                                            <button onClick={() => {
                                                if (fetchQuantity() <= 1) {
                                                    dispatch(removeItem(product.id));
                                                } else {
                                                    dispatch(decrementItem(product.id));
                                                }
                                        }}>-</button>
                                            <div class="number">{ fetchQuantity()}</div>
                                        <button onClick={ () => dispatch(incrementItem(product.id))}>+</button>  
                                        </div>
                                        <div className="view-cart">
                                            <Link to="/cart"><button>View Cart</button></Link>
                                        </div>
                                    </div>
                                    ) : (
                                    <div class="add-to-cart" >
                                        <button onClick={
                                            () => dispatch(addItem(product.id))
                                        }><AiOutlineShoppingCart className="cart-icon" />Add to Cart </button>
                                    </div>        
                                ) } 
                    </div>
                </div>
                )}
     </section>
    )
}

export default ProductDetails;
