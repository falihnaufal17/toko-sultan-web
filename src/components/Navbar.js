import React from 'react';
import Logo from '../assets/images/Logo.png';
import LogoMobile from '../assets/images/mobile-logo.png';
import CartMobile from '../assets/images/mobile-cart.png';
import BubleChatMobile from '../assets/images/mobile-buble-chat.png';
import SearchMobile from '../assets/images/mobile-search.png';
import Cart from '../assets/images/cart.png';
import SearchBar from './SearchBar';
import ProfilePict from '../assets/images/user-profile.png';

const Navbar = props =>{
    let authComp = (
        <li className="nav-item">
            <div className="row align-items-center">
                <div className="col-auto">
                    <img src={ProfilePict} alt="profile-pict" />
                </div>
                <div className="col">
                    <a href="#" className="username">Nama User</a>
                </div>
            </div>
        </li>
    )
    return(
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand d-none d-sm-none d-md-none d-lg-block" href="/">
                    <img src={Logo} />
                </a>
                <a className="navbar-brand d-none d-sm-block d-md-block d-lg-none" href="/">
                    <img src={LogoMobile} />
                </a>
                <div className="d-flex justify-content-between align-items-center w-100 d-sm-none">
                    <a className="navbar-brand" href="/">
                        <img src={LogoMobile} />
                    </a>
                    <a href="#">
                        <img src={SearchMobile} />
                    </a>
                    <a href="#">
                        <img src={BubleChatMobile} />
                    </a>
                    <a href="#">
                        <img src={CartMobile} />
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <SearchBar />
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="valign">
                                <div className="inner">
                                    <a href="#">
                                        <img src={Cart}/>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="valign">
                                <div className="inner">
                                    <div className="vline d-block"/>
                                </div>
                            </div>
                        </li>
                        {/* {authComp} */}
                        <li className="nav-item">
                            <div className="valign">
                                <div className="inner">
                                    <a className="nav-link btn-sultan btn-sultan-primary" href="/login">Masuk</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="valign">
                                <div className="inner">
                                    <a className="nav-link btn-sultan btn-sultan-primary-outline" href="/register">Daftar</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;