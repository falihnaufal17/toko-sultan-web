import React from 'react';

import staroff from '../assets/images/star-off.png'

const ProductLists = ({image, product_name, string_price, location, rating}) =>{
    return(
        <a href="#">
            <div className="card card-product">
                <img src={image} />
                <div>
                    <div className="title">{product_name}</div>
                    <div className="price">{string_price}</div>
                    <div className="location">{location}</div>
                    <div className="row rating-row">
                        <div className="col-auto">
                            <div className="valign">
                                <div className="inner">
                                    <img src={staroff} />
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="valign">
                                <div className="inner">
                                    <img src={staroff} />
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="valign">
                                <div className="inner">
                                    <img src={staroff} />
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="valign">
                                <div className="inner">
                                    <img src={staroff} />
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="valign">
                                <div className="inner">
                                    <img src={staroff} />
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="valign">
                                <div className="inner">
                                    <div className="rating-count">{rating}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ProductLists;