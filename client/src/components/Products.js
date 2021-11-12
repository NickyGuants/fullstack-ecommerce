import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('api/products');
            setProducts(data);
        }

        fetchProducts();
    }, [])

    return (
        <section className="container">
            <div className="products">
                {products.map((vehicle) => (
                    <div key={vehicle.id} className="card">
                        <Link to={`${vehicle.id}`}>
                            <img src={vehicle.imgSrc} alt={vehicle.name} />
                        </Link>
                        <p>Model: {vehicle.model}</p>
                        <p>Make: {vehicle.make}</p>
                        <p>Price: ${ vehicle.price.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products;
