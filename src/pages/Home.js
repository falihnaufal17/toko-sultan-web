import React from 'react';
import Slider from "react-slick";

import Navbar from '../components/Navbar';
import banner from '../assets/images/banner web-01.png';
import mesinkopi from '../assets/images/S009393897-1.png';
import caparight from '../assets/images/capa-right.png';
import tokoresmi from '../assets/images/speecial limit edisi web.png';
import promosultan from '../assets/images/sepeda banner web-01.png';
import mesinkopilarge from '../assets/images/product-large.png';

import '../assets/styles/home.scss';

import ProductLists from '../components/ProductLists';

const Home = p =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                centerMode: false,
              }
            }
        ]
    };
    
    const palingBanyakDicari = [
        {
            image: mesinkopi,
            product_name: 'Mesin Kopi',
            count: 10000,
            string_count: '10rb produk'
        },
        {
            image: mesinkopi,
            product_name: 'Mesin Kopi',
            count: 10000,
            string_count: '10rb produk'
        },
        {
            image: mesinkopi,
            product_name: 'Mesin Kopi',
            count: 10000,
            string_count: '10rb produk'
        },
        {
            image: mesinkopi,
            product_name: 'Mesin Kopi',
            count: 10000,
            string_count: '10rb produk'
        }
    ]

    const kategori = ["T-Shirt", "Celana", "Sepeda", "Hijab", "Sneakers", "Handphone"];

    const rekomendasi = [
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20
        },
    ]

    return (
        <div>
            <Navbar/>
            <div id="content-home">
                <Slider {...settings}>
                    <div>
                        <a href="#">
                            <img src={banner} className="d-block w-100" alt="banner" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={banner} className="d-block w-100" alt="banner" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={banner} className="d-block w-100" alt="banner" />
                        </a>
                    </div>
                </Slider>
                <div className="container">
                    <div id="section-paling-banyak-dicari">
                        <div className="row">
                            <div className="col">
                                <h2 className="title">Paling Banyak Dicari</h2>
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
                                palingBanyakDicari.map((i, k)=>{
                                    return (
                                        <div className="col-6 col-md col-lg" key={k}>
                                            <a href="#">
                                                <div className="card card-paling-dicari">
                                                    <div className="row">
                                                        <div className="col-auto">
                                                            <img src={i.image} />
                                                        </div>
                                                        <div className="col">
                                                            <div className="title">{i.product_name}</div>
                                                            <div className="count">{i.string_count}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div id="section-toko-promo">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
                                <h2 className="title">Toko Resmi</h2>
                                <a href="#">
                                    <img src={tokoresmi}/>
                                </a>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <h2 className="title">Promo Sultan</h2>
                                <a href="#">
                                    <img src={promosultan}/>
                                </a>
                            </div>
                        </div>
                    </div>

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

                    <div id="section-rekomendasi">
                        <h2 className="title">Rekomendasi</h2>
                        <div className="row row-p">
                            {
                                rekomendasi.map((i, k)=>{
                                    return(
                                        <div className="col-6 col-md col-lg" key={k}>
                                            <ProductLists 
                                                image={i.image} 
                                                product_name={i.product_name} 
                                                string_price={i.string_price} 
                                                location={i.location} 
                                                rating={i.rating}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;