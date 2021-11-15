import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`api/products/${id}`);
            setProduct(data);
        }
        fetchProduct();
    }, [id])

    return (
    <section id="details-page">
        <h1 id="heading">Details</h1>
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
     </section>
    )
}

export default ProductDetails;
