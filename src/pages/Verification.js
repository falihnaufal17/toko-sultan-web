import React,{ useRef, useState } from 'react';
import BackWhite from '../assets/images/Back-white.png';
import EmailIcon from '../assets/images/email icon.png';
import '../assets/styles/auth.scss';

const Verification = p =>{

    const [data, setData] = useState({
        pin0: '',
        pin1: '',
        pin2: '',
        pin3: ''
    })

    const goBack = () =>{
        p.history.goBack();
    }

    const pin0 = useRef(null);
    const pin1 = useRef(null);
    const pin2 = useRef(null);
    const pin3 = useRef(null);

    const onVerify = () =>{
        const {pin0, pin1, pin2, pin3} = data;

        let isRegister = localStorage.getItem('isRegister')
        if(pin0 != '' && pin1 != '' && pin2 != '' && pin3 != ''){
            if(isRegister){
                window.location.href = '/register/biodata';
            }else{
                window.location.href = '/';
            }
        }
    }

    const handleChange = e =>{
        let target = e.target;
        let value = target.value;
        let name = target.name;

        setData({[name]: value})

        if(name == 'pin0' && value != ''){
            pin1.current.focus();
        }
        
        if(name == 'pin1' && value != ''){
            pin2.current.focus();
        }else if(name == 'pin1' && value == ''){
            pin0.current.focus();
        }

        if(name == 'pin2' && value != ''){
            pin3.current.focus();
        }else if(name == 'pin2' && value == ''){
            pin1.current.focus();
        }
        if(name == 'pin3' && value != ''){
            onVerify();
        }else if(name == 'pin3' && value == ''){
            pin2.current.focus()
        }
    }

    return(
        <div>
            <nav className="navbar navbar-dark">
                <div className="container d-flex justify-content-between">
                        <a onClick={() => goBack()}>
                            <img src={BackWhite} alt="" loading="lazy" />
                        </a>
                        <div className="title-bar">Verifikasi</div>
                    <div />
                </div>
            </nav>
            <div className="container justify-content-center d-flex">
                <div className="card text-center align-items-center mt-5 card-verify">
                    <div className="title-register mt-5">Masukan Kode Verifikasi</div>
                    <div className="mb-4">
                        <img src={EmailIcon} />
                    </div>
                    <div>
                        <p className="label text-info mb-4">Kode verifikasi telah dikirimkan melalui email ke <span className="label label-email">email@tokosultan.com</span></p>
                    </div>
                    <div className="label mb-4">Kode Verifikasi</div>
                    <form className="w-100">
                        <div className="form-group mb-5">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <input type="tel" max="1" name="pin0" ref={pin0} maxLength="1" className="form-control" onChange={(e)=>handleChange(e)} required />
                                </div>
                                <div className="col-auto">
                                    <input type="tel" max="1" name="pin1" ref={pin1} maxLength="1" className="form-control" onChange={(e)=>handleChange(e)} required />
                                </div>
                                <div className="col-auto">
                                    <input type="tel" max="1" name="pin2" ref={pin2} maxLength="1" className="form-control" onChange={(e)=>handleChange(e)} required />
                                </div>
                                <div className="col-auto">
                                    <input type="tel" max="1" name="pin3" ref={pin3} maxLength="1" className="form-control" onChange={(e)=>handleChange(e)} required />
                                </div>
                            </div>
                        </div>
                        <button className="btn-sultan btn-sultan-secondary mb-4" onClick={() => onVerify()}>Verifikasi</button>
                    </form>
                    <div className="label text-info">Tidak Menerima Kode ?</div>
                    <div className="label text-info"><a className="label text-secondary">Kirim Ulang</a> atau <a href="/register" className="label text-secondary">Daftar</a> dengan <a href="#" className="label text-secondary">Nomor Ponsel</a></div>
                </div>
            </div>
        </div>
    )
}

export default Verification;