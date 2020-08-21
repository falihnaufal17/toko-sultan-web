import React from 'react';
import caparight from '../../assets/images/capa-right.png';

const SectionKategori = ({kategori}) =>{
    return(
        <div id="section-kategori">
            <div className="row">
                <div className="col">
                    <h2 className="title">Kategori</h2>
                </div>
                <div className="col-auto">
                    <div className="valign">
                        <div className="inner">
                            <a href="#" className="link-more">Lihat Lainnya <img src={caparight}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    kategori.map((i, k)=>{
                        return(
                            <div className="col-6 col-md col-lg" key={k}>
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