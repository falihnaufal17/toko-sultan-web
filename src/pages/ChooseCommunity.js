import React, {useState} from 'react';
import Slider from "react-slick";

import Lariba from '../assets/images/Lariba.png';
import PKS from '../assets/images/PKS.png';
import XBank from '../assets/images/XBank.png';
import MTR from '../assets/images/MTR.png';
import Logo from '../assets/images/Logo.png';
import '../assets/styles/auth.scss';

const ChooseCommunity = p =>{

    const [data, setData] = useState({
        community: null
    })

    const komunitas = [
        {
            id: 1,
            community_name: "Lariba",
            image: Lariba
        },
        {
            id: 2,
            community_name: "PKS",
            image: PKS
        },
        {
            id: 3,
            community_name: "XBank",
            image: XBank
        },
        {
            id: 4,
            community_name: "#Masyarakat Tanpa Riba",
            image: MTR
        },
        {
            id: 5,
            community_name: "Lariba",
            image: Lariba
        },
        {
            id: 6,
            community_name: "PKS",
            image: PKS
        },
        {
            id: 7,
            community_name: "XBank",
            image: XBank
        },
        {
            id: 8,
            community_name: "#Masyarakat Tanpa Riba",
            image: MTR
        }
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        responsive:[
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    variableWidth: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,    
                    infinite: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: true,
                }
            }
        ]
    }

    const handleChange = e =>{
        // let target = e.target;
        // let value = target.value;
        // let name = target

        setData({community: e.target.value});
    }

    const onSubmit = () =>{
        // let {community} = data;

        if(data.community !== null){
            setData({community: null})
            window.location.href = '/';
        }
    }

    return(
        <div className="container">
            <div className="d-flex justify-content-center mb-4 mt-3">
                <a href="/">
                    <img src={Logo} />
                </a>
            </div>
            <div className="d-flex justify-content-center">
                <div className="card text-center card-choose-community">
                    <div className="card-body">
                        <h2 className="title-register">Pilih satu (1) komunitas</h2>
                        <form onSubmit={() => onSubmit()}>
                            <Slider {...settings}>
                                {
                                    komunitas.map((d, i)=>{
                                        return(
                                            <div className="form-group d-block" key={i}>
                                                <input type="radio" id={d.id} name="community_id" onChange={e => handleChange(e)} value={d.id} required/>
                                                <div className="d-flex justify-content-center">
                                                    <div className="card-item">
                                                        <label for={d.id}>
                                                            <div className="valign">
                                                                <div className="inner">
                                                                    <img src={d.image} alt={d.community_name} />
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                            <button className="btn-sultan btn-sultan-secondary" onClick={() => onSubmit()}>Pilih</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseCommunity;
