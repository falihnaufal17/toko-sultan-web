import React, {lazy, Suspense} from 'react';
import Slider from "react-slick";

import banner from '../assets/images/banner web-01.png';
import pks from '../assets/images/PKS.png';
import mtr from '../assets/images/MTR.png';
import xbank from '../assets/images/XBank.png';
import lariba from '../assets/images/Lariba.png';
import tokoresmi from '../assets/images/speecial limit edisi web.png';
import promosultan from '../assets/images/sepeda banner web-01.png';
import mesinkopilarge from '../assets/images/product-large.png';

import '../assets/styles/home.scss';

const SectionKomunitas = lazy(()=>import('../components/home/sectionKomunitas'));
const SectionPromo = lazy(()=>import('../components/home/sectionPromo'));
const SectionKategori = lazy(()=>import('../components/home/sectionKategori'));
const SectionRekomendasi = lazy(()=>import('../components/home/sectionRekomendasi'));
const FloatButtonChat = lazy(()=>import('../components/home/floatButtonChat'))

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
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                centerMode: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                centerMode: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
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
    
    const komunitas = [
        {
            image: pks,
            name: 'PKS'
        },
        {
            image: lariba,
            name: 'Lariba Islamic Indonesia'
        },
        {
            image: xbank,
            name: 'X BANK'
        },
        {
            image: mtr,
            name: '#Masyarakat Tanpa Riba'
        },
        {
            image: pks,
            name: 'PKS'
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

    return (
        <Suspense>
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
                    <SectionKomunitas komunitas={komunitas} />
                    <div className="d-none d-sm-block">
                        <SectionPromo tokoresmi={tokoresmi} promosultan={promosultan} />
                    </div>
                    <SectionKategori kategori={kategori} />
                    <SectionRekomendasi rekomendasi={rekomendasi} />
                </div>
                <div className="d-none d-sm-block">
                    <FloatButtonChat />
                </div>
            </div>
        </Suspense>
    )
}

export default Home;