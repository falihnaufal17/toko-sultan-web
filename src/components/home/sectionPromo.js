import React from 'react';

const SectionPromo = ({tokoresmi, promosultan}) => {
    return(
        <div id="section-toko-promo">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="title-section">
                        <h2 className="title">Limited Edition</h2>
                    </div>
                    <a href="#">
                        <img src={tokoresmi}/>
                    </a>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="title-section">
                        <h2 className="title">Promo Sultan</h2>
                    </div>
                    <a href="#">
                        <img src={promosultan}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SectionPromo;