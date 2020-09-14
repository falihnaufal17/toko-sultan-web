import React from 'react';

import staroff from '../assets/images/star-off.png'

const ProductLists = ({image, product_name, string_price, location, rating, community, product_slug, store_slug}) =>{
    return(
        <a href={store_slug + '/' + product_slug}>
            <div className="card card-product">
                <div className="image">
                    <img src={image} />
                    <div className="badge-community">{community}</div>
                </div>
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