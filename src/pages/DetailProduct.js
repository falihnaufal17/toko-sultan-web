import React from 'react';
import Slider from "react-slick";
import Product from '../assets/images/detail/S009393897-1 (2).png';

import '../assets/styles/detail_product.scss';

const DetailProduct = p =>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="container" id="content-detail">
            <div className="row">
                <div className="col">
                    <div className="w-494">
                        <Slider {...settings}>
                                <img src={Product} alt="banner" />
                                <img src={Product} alt="banner" />
                                <img src={Product} alt="banner" />
                        </Slider>
                    </div>
                </div>
                <div className="col">
                    <div>section Detail harga</div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct;