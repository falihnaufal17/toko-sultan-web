import React from 'react';
import caparight from '../../assets/images/capa-right.png';

const SectionKategori = ({kategori}) =>{
    return(
        <div id="section-kategori">
            <div className="row">
                <div className="col">
                    <div className="valign">
                        <div className="inner">
                            <h2 className="title">Kategori</h2>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="valign">
                        <div className="inner">
                            <a href="#" className="link-more">Lihat Lainnya <img src={caparight} className="d-none d-sm-block"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-p">
                {
                    kategori.map((i, k)=>{
                        return(
                            <div className="col-3 col-md-6 col-lg" key={k}>
                                <a href="#">
                                    <div className="card card-category">
                                        <div className="title">{i}</div>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SectionKategori;