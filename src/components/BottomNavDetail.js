import React from 'react';
import UserProfile from '../assets/images/detail/user-profile.png';
import favorites from '../assets/images/detail/favorites.png';
import plusSecondary from '../assets/images/detail/plus-secondary.png';
import cart from '../assets/images/detail/cart.png';

const BottomDetailNav = p =>{
    return(
        <nav className="navbar fixed-bottom bottom-nav">
            <div className="container-fluid">
                <div className="row align-items-center d-none d-sm-block">
                    <div className="col-auto">
                        <div className="position-relative">
                            <img src={UserProfile} alt="user" />
                            <div className="online">
                                <div className="online-sign"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="title">Nama Penjual (Toko)</div>
                        <div className="row align-items-center row-location">
                            <div className="col">
                                <div className="subtitle">Jakarta Selatan</div>
                            </div>
                            <div className="col-auto">
                                <div className="elipse" />
                            </div>
                            <div className="col">
                                <div className="subtitle community-name">#MasyarakatTanpaRiba</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Ikuti</button>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <div className="subtitle">Total</div>
                        <div className="title price">Rp. {p.priceDecimal(3500000)}</div>
                    </div>
                    <div className="col-auto">
                        <a className="btn-favorite">
                            <img src={favorites} alt="favorites" />
                        </a>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="btn-sultan btn-sultan-secondary">Beli Sekarang</a>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="btn-sultan btn-sultan-secondary-outline">
                            <img src={plusSecondary} alt="plus-secondary"/>
                            <img src={cart} alt="cart"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default BottomDetailNav;