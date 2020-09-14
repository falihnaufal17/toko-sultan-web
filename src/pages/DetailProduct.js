import React, {useState, lazy, Suspense} from 'react';
import Slider from "react-slick";
import Product from '../assets/images/detail/S009393897-1 (2).png';
import starson from '../assets/images/detail/starson.png';
import starsoff from '../assets/images/detail/starsoff.png';
import XBank from '../assets/images/XBank.png';
import Delivery from '../assets/images/detail/Delivery.png';
import minus from '../assets/images/minus.png';
import plus from '../assets/images/plus.png';
import mesinkopilarge from '../assets/images/product-large.png';

import { priceDecimal } from '../assets/helper';

import '../assets/styles/detail_product.scss';

const FloatButtonChat = lazy(()=>import('../components/home/floatButtonChat'));
const BottomNavDetail = lazy(()=>import('../components/BottomNavDetail'));
const TabDetail = lazy(()=>import('../components/TabDetail'));

const DetailProduct = p =>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const [qty, setQty] = useState(1);

    const rekomendasi = [
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba',
            store_slug: 'uhe-store',
            product_slug: 'etrolux-automatic-coffee'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba',
            store_slug: 'uhe-store',
            product_slug: 'etrolux-automatic-coffee'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba',
            store_slug: 'uhe-store',
            product_slug: 'etrolux-automatic-coffee'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba',
            store_slug: 'uhe-store',
            product_slug: 'etrolux-automatic-coffee'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba',
            store_slug: 'uhe-store',
            product_slug: 'etrolux-automatic-coffee'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba',
            store_slug: 'uhe-store',
            product_slug: 'etrolux-automatic-coffee'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba',
            store_slug: 'uhe-store',
            product_slug: 'etrolux-automatic-coffee'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba',
            store_slug: 'uhe-store',
            product_slug: 'etrolux-automatic-coffee'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba',
            store_slug: 'uhe-store',
            product_slug: 'etrolux-automatic-coffee'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba',
            store_slug: 'uhe-store',
            product_slug: 'etrolux-automatic-coffee'
        },
    ]

    return(
        <Suspense fallback={<div/>}>
            <div className="container" id="content-detail">
                <div className="row mb-5">
                    <div className="col">
                        <div className="w-494">
                            <Slider {...settings}>
                                <div>
                                    <img src={Product} className="d-block w-100" alt="banner" />
                                    </div>
                                    <div>
                                    <img src={Product} className="d-block w-100" alt="banner" />
                                    </div>
                                    <div>
                                    <img src={Product} className="d-block w-100" alt="banner" />
                                    </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <h1 className="title">Etrolux Automatic Coffee</h1>
                                <div className="row row-rating">
                                    <div className="col-auto"><img src={starson} alt="starson"/></div>
                                    <div className="col-auto"><img src={starsoff} alt="starson"/></div>
                                    <div className="col-auto"><img src={starsoff} alt="starson"/></div>
                                    <div className="col-auto"><img src={starsoff} alt="starson"/></div>
                                    <div className="col-auto"><img src={starsoff} alt="starson"/></div>
                                    <div className="col-auto"><span className="total-rating">20</span></div>
                                </div>
                                <h3 className="price">Rp. {priceDecimal(3500000)}</h3>
                            </div>
                            <div className="col-auto">
                                <div className="card">
                                    <img src={XBank} alt="xbank" />
                                </div>
                                <div className="lbl-community">X Bank</div>
                            </div>
                        </div>
                        <div className="hline"/>
                        <div className="lbl-kategori">Kategori</div>
                        <div className="row">
                            <div className="col-auto">
                                <a href="#" className="card card-category">Elektronik</a>
                            </div>
                            <div className="col-auto">
                                <a href="#" className="card card-category">Alat Kopi</a>
                            </div>
                        </div>
                        <div className="hline" />
                        <div className="row align-items-center">
                            <div className="col-auto"><div className="lbl-jumlah">Jumlah</div></div>
                            <div className="col"><div className="count-stok">Stok sisa &lt; 5</div></div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col">
                                <div className="row row-qty">
                                    <div className="col-auto">
                                        <button className="btn-sultan btn-sultan-secondary btn-count">
                                            <img src={minus} alt="minus" />
                                        </button>
                                    </div>
                                    <div className="col-auto">
                                        <input type="tel" className="form-control qty" value={qty} onChange={e => {
                                            if(isNaN(e.target.value)){
                                                return;
                                            }else{
                                                setQty(e.target.value)
                                            }
                                        }} />
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn-sultan btn-sultan-secondary btn-count">
                                            <img src={plus} alt="plus" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="btn-kurir">
                            <img src={Delivery} alt="Delivery"/>
                            <span>Cek kurir dan ongkos kirim</span>
                        </a>
                    </div>
                </div>
                <TabDetail {...p} rekomendasi={rekomendasi} />
            </div>
            <FloatButtonChat {...p}/>
            <BottomNavDetail {...p} priceDecimal={priceDecimal}/>
        </Suspense>
    )
}

export default DetailProduct;