import React from 'react';

const SectionPromo = ({tokoresmi, promosultan}) => {
    return(
        <div id="section-toko-promo">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <h2 className="title">Toko Resmi</h2>
                    <a href="#">
                        <img src={tokoresmi}/>
                    </a>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <h2 className="title">Promo Sultan</h2>
                    <a href="#">
                        <img src={promosultan}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SectionPromo;