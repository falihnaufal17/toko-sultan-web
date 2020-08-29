import React from 'react';
import theme404 from '../assets/images/page404theme.png';
import img404 from '../assets/images/page404.png';
import img404Mobile from '../assets/images/page404Mobile.png';

const NotFound = p =>{
    return(
        <div>
            <div className="theme-404 d-none d-sm-none d-md-none d-lg-block">
                <img src={theme404} />
            </div>
            <section className="section-404">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-12 col-md-12 col-lg order-1 order-lg-0 ">
                            <h2 className="title-404">Walah, yang kamu cari gak ada!</h2>
                            <p className="subtitle-404">mungkin salah alamat, coba dicari lagi.</p>
                            <a href="/" className="btn-sultan btn-sultan-secondary">Kembali ke Beranda</a>
                        </div>
                        <div className="col-12 col-md-12 col-lg order-0 order-lg-1">
                            <div className="d-none d-sm-block">
                                <img src={img404} />
                            </div>
                            <div className="d-block d-sm-none">
                                <img src={img404Mobile} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotFound;