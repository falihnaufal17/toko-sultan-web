import React from 'react';
import Empty from '../../assets/images/cart-empty.png';
import product from '../../assets/images/S009393897-1.png';
import Bin from '../../assets/images/Bin.png';
import favorite from '../../assets/images/favorite.png';
import { priceDecimal } from '../../assets/helper';

const DropdownCart = () =>{
    const data = [
        {
            id: 1,
            image: product,
            product_name: 'Etrolux Automatic Coffee',
            seller_name: 'Nama Penjual (Toko)',
            price: 3500000,
            qty: 1
        },
        {
            id: 1,
            image: product,
            product_name: 'Etrolux Automatic Coffee',
            seller_name: 'Nama Penjual (Toko)',
            price: 3500000,
            qty: 1
        },
        {
            id: 1,
            image: product,
            product_name: 'Etrolux Automatic Coffee',
            seller_name: 'Nama Penjual (Toko)',
            price: 3500000,
            qty: 1
        }
    ];

    let totalPrice = 0;
    let totalQty = 0;

    totalPrice = data.reduce((total, item)=>{
        return total += item.price
    }, 0);

    totalQty = data.reduce((total, item)=>{
        return total += item.qty;
    }, 0)

    return(
        <div className="dropdown-menu dropdown-cart flex-column justify-content-between" aria-labelledby="navbarDropdown">
            <div className="scrollable-menu">
            {
                data.map((item, key) => {
                    return(
                        <div className="card-item" key={key}>
                            <div className="row">
                                <div className="col-auto">
                                    <img src={item.image} alt={item.product_name} />
                                </div>
                                <div className="col">
                                    <div className="text-title">{item.product_name}</div>
                                    <div className="text-subtitle">{item.seller_name}</div>
                                    <div className="text-sultan-secondary">Rp. {priceDecimal(item.price)}</div>
                                    <div className="form-group">
                                        <div className="row row-p text-center align-items-center justify-content-center">
                                            <div className="col">
                                                <a href="#" className="btn-sultan btn-sultan-secondary btn-count btn-sultan-disabled">-</a>
                                            </div>
                                            <div className="col">
                                                <input type="text" className="form-control form-qty" min={1} name="qty" value={item.qty || 1} />
                                            </div>
                                            <div className="col">
                                                <a href="#" className="btn-sultan btn-sultan-secondary btn-count">+</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <a href="#">
                                        <img src={Bin} alt="trash" />
                                    </a>
                                    <a href="#">
                                        <img src={favorite} alt="favorite" />
                                    </a>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-notes" placeholder="Catatan untuk penjual (Opsional)" />
                            </div>
                        </div>
                    )
                })
            }
            {/* <img src={Empty} alt="empty" />
            <div className="username text-center">Kumpulkan barang yang akan kamu pilih di keranjang!</div>
            <a href="#" className="btn-sultan btn-sultan-secondary">Cari Produk</a> */}
            </div>
            <div className="row align-items-center justify-content-between">
                <div className="col">
                    <div className="text-sultan-info">Total</div>
                    <div className="text-sultan-secondary">Rp. {priceDecimal(totalPrice)}</div>
                </div>
                <div className="col">
                    <div>
                        <a href="#" className="btn-sultan btn-sultan-secondary">Beli ({totalQty})</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropdownCart;