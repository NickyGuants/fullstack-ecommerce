import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { listProducts } from '../redux/actions/productActions';
import { addItem, decrementItem, incrementItem, removeItem } from '../redux/actions/cartActions'

const Products = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList;
    const { cartItems }  = useSelector(state => state.cart)
    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <section className="container">
            {loading ? (
                <h2>Loading</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) :
                <div className="products">
                    {products.map((vehicle) => {
                        const inCart = cartItems.find((item) => item.id === vehicle.id ? true : false);
                        const fetchQuantity = () => {
                            if (cartItems.length === 0) {
                              return 0;
                            } else {
                              return cartItems?.find((car) => car.id === vehicle.id).quantity;
                            }
                          };
                        return (
                            <div key={vehicle.id} className="card">
                                <Link to={`${vehicle.id}`}>
                                    <img src={vehicle.imgSrc} alt={vehicle.name} />
                                </Link>
                                <p>Model: {vehicle.model}</p>
                                <p>Make: {vehicle.make}</p>
                                <p>Price: ${vehicle.price.toLocaleString()}</p>
                                {inCart ? (
                            <div className="buttons">
                                <div className="units">
                                    <button onClick={() => {
                                        if (fetchQuantity() <= 1) {
                                            dispatch(removeItem(vehicle.id));
                                        } else {
                                            dispatch(decrementItem(vehicle.id));
                                        }
                                }}>-</button>
                                    <div class="number">{fetchQuantity()}</div>
                                <button onClick={ () => dispatch(incrementItem(vehicle.id))}>+</button>  
                                </div>
                                <div>
                                    <Link to="/cart"><button>View Cart</button></Link>
                                </div>
                            </div>
                            ) : (
                            <div class="add-to-cart" >
                                <button onClick={
                                    () => dispatch(addItem(vehicle.id))
                                }><AiOutlineShoppingCart className="cart-icon" />Add to Cart </button>
                                
                            <Link to={`/details/${vehicle.id}`}><button>View Details</button></Link>
                            </div>        
                          ) }    
                            </div>
                        )
                    })}
                </div>
            }
        </section>
    )
}

export default Products;
