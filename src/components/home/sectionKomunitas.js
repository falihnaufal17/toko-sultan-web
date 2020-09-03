import React from 'react';
import seemore from '../../assets/images/see more.png';

const SectionKomunitas = ({ komunitas }) =>{
    return(
        <div id="section-komunitas">
            <div className="title-section">
                <h2 className="title">Komunitas</h2>
            </div>
            <div className="row row-p">
                {
                    komunitas.map((i, k)=>{
                        return (
                            <div className="col-6 col-md-6 col-lg-auto" key={k}>
                                <a href="#">
                                    <div className="card card-komunitas">
                                        <div className="row">
                                            <div className="col-auto">
                                                <img src={i.image} />
                                            </div>
                                            <div className="col">
                                                <div className="valign">
                                                    <div className="inner">
                                                        <div className="title">{i.name}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
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

export default SectionKomunitas;