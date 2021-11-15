import React, {useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux'

const Hero = () =>{
    const [current, setCurrent] = useState(0);

    const { products } = useSelector(state => state.productList)
    const length = products.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(products) || products.length <= 0) {
    return null;
  }
    

    return (
        <section className="hero">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {products.map((slide, index) => {
                return(
                    
                    <div className={index === current? 'slide active' : 'slide'}
                    key={index} >
                        {index ===current && (
                            <img src={slide.imgSrc} alt="Vehicles" className="image" />
                        )}
                    </div>
                );
            })
            }
        </section>
    );
};

export default Hero;