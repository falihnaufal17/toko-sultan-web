import React from 'react';
import Slider from "react-slick";

import Navbar from '../components/Navbar';
import banner from '../assets/images/banner web-01.png';
import pks from '../assets/images/PKS.png';
import mtr from '../assets/images/MTR.png';
import xbank from '../assets/images/XBank.png';
import lariba from '../assets/images/Lariba.png';
import tokoresmi from '../assets/images/speecial limit edisi web.png';
import promosultan from '../assets/images/sepeda banner web-01.png';
import mesinkopilarge from '../assets/images/product-large.png';

import '../assets/styles/home.scss';

import SectionKomunitas from '../components/home/sectionKomunitas';
import SectionPromo from '../components/home/sectionPromo';
import SectionKategori from '../components/home/sectionKategori';
import SectionRekomendasi from '../components/home/sectionRekomendasi';

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
            community: 'Lariba'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba'
        },
        {
            image: mesinkopilarge,
            product_name: 'Etrolux Automatic Coffee',
            price: 3500000,
            string_price: 'Rp.3.500.000',
            location: 'Jakarta Selatan',
            rating: 20,
            community: 'Lariba'
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
                    <SectionKomunitas komunitas={komunitas} />
                    <div className="d-none d-sm-block">
                        <SectionPromo tokoresmi={tokoresmi} promosultan={promosultan} />
                    </div>
                    <SectionKategori kategori={kategori} />
                    <SectionRekomendasi rekomendasi={rekomendasi} />
                </div>
            </div>
        </div>
    )
}

export default Home;