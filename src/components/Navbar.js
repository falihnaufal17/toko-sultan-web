import React from 'react';
import Logo from '../assets/images/Logo.png';
import Cart from '../assets/images/cart.png';
import SearchBar from './SearchBar';

const Navbar = props =>{
    return(
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <img src={Logo} />
                </a>
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
                        <li className="nav-item">
                            <div className="valign">
                                <div className="inner">
                                    <a className="nav-link btn-sultan btn-sultan-primary" href="#">Masuk</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="valign">
                                <div className="inner">
                                    <a className="nav-link btn-sultan btn-sultan-primary-outline" href="#">Daftar</a>
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