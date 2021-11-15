import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listProducts } from '../redux/actions/productActions';

const Products = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList;
    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <section className="container">
            {loading ? (
                <h2>Loading</h2>
            ) : error ? (
                    <h2>{ error }</h2>
            ) :
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
        </div>}
            
        </section>
    )
}

export default Products;
