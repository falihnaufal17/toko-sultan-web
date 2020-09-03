import React from 'react';
import Empty from '../../assets/images/cart-empty.png';

const DropdownCart = () =>{
    return(
        <div className="dropdown-menu dropdown-cart" aria-labelledby="navbarDropdown">
            <img src={Empty} alt="empty" />
            <div className="username text-center">Kumpulkan barang yang akan kamu pilih di keranjang!</div>
            <a href="#" className="btn-sultan btn-sultan-secondary">Cari Produk</a>
        </div>
    )
}

export default DropdownCart;