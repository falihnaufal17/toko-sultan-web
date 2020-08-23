import React from 'react';
import seemore from '../../assets/images/see more.png';
import ProductLists from '../../components/ProductLists';

const SectionRekomendasi = ({ rekomendasi }) => {
    return(
        <div id="section-rekomendasi">
            <div className="title-section">
                <h2 className="title">Rekomendasi</h2>
            </div>
            <div className="row row-p">
                {
                    rekomendasi.map((i, k)=>{
                        return(
                            <div className="col-6 col-md-4 col-lg" key={k}>
                                <ProductLists 
                                    image={i.image} 
                                    product_name={i.product_name} 
                                    string_price={i.string_price} 
                                    location={i.location} 
                                    rating={i.rating}
                                    community={i.community}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-center">
                <div className="valign">
                    <div className="inner">
                        <a href="#" className="btn btn-seemore">
                            <img src={seemore} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionRekomendasi;