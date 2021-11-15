import React from "react";
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removeItem } from '../redux/actions/cartActions'



const Cart = () => {
    const  cartItems  = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch();
    let subTotal = 0;
    let totalDiscount = 0;


    return (
        <section id="cart-order">
                
                <div className="cart">
                    <div className="heading">
                        <div><h2>Shopping cart</h2></div>
                            <div><h2>Items: { cartItems.length}</h2></div>
                        </div>
                    <div className="table">
                        <table>
                            <tr>
                            <th>Product Details</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Total</th>
                            <th>Remove Item</th>
                        </tr>
                        {cartItems.map((item) => {
                            
                            function getDiscount (){
                                if (item.quantity > 5) {
                                    return item.price * item.quantity * 0.05;
                                }
                                return 0;
                            }
                            let total = (item.price * item.quantity)-getDiscount();
                            subTotal += total;
                            totalDiscount += getDiscount();
                            
                            return (
                            <>
                            <tr>
                                <td><img src={item.imgSrc} alt="" width="200px" /></td>
                                <td><div className="units-1"><button onClick={() => {
                                    if (item.quantity <= 1) {
                                        dispatch(removeItem(item.id));
                                    } else {
                                        dispatch(decrementItem(item.id));
                                    }
                                }}>-</button>
                                    {item.quantity}
                                    <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
                                </div></td>
                                <td>${item.price.toLocaleString()}</td>
                                    <td>${ getDiscount().toLocaleString() }</td>
                                    <td>${ total.toLocaleString()}</td>
                                <td><button id="remove-item" onClick={() => dispatch(removeItem(item.id))}>X</button></td>
                                    </tr>
                                    
                             </>   
                        )})}
                        </table>
                    </div>
                </div>
            <div className="order">
                <div><h1>Order Summary</h1></div>
                <div className="table">
                    <table>
                        <tr>
                            <th>Sub Total:</th>
                            <td>${subTotal.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <th>Total Discount:</th>
                            <td>${totalDiscount.toLocaleString()}</td>
                        </tr>
                       
                        
                    </table>
                </div>
                <div id="links">
                    <button>Checkout</button>
                    <button>Continue shopping</button>
                </div>
            </div>
        </section>
    )
}

export default Cart;