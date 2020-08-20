import React from 'react';
import searchIcon from '../assets/images/search.png';
import '../assets/styles/search.scss'

const SearchBar = props =>{
    return(
        <div className="search mega-search">
            <div className="prepend mega-prepend">
                <div className="valign">
                    <div className="inner">
                        <img src={searchIcon} alt="cari"/>
                    </div>
                </div>
            </div>
            <div>
                <input type="text" placeholder="Cari Produk, Merk, dan Toko" className="form-control mega-form-control" />
            </div>
        </div>
    )
}

export default SearchBar;