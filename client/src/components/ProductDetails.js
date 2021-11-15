import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../redux/actions/productActions';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } =productDetails;
   
    useEffect(() => {
        dispatch(listProductDetails(id));

    }, [dispatch, id])
    
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
                        </div>
                    </div>
                )
            }
        
     </section>
    )
}

export default ProductDetails;
