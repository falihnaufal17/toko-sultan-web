import React, {useState} from 'react';
import Logo from '../assets/images/Logo.png';
import Back from '../assets/images/Back.png';
import eyeoff from '../assets/images/eye-off.png';
import '../assets/styles/auth.scss';
import { queryByDisplayValue } from '@testing-library/react';

const Biodata = p =>{

    const [hide, setHide] = useState(true);
    const [data, setData] = useState({
        form:{
            name: '',
            gender: '',
            password: ''
        }
    })

    const displayPassword = (e) => {
        e.preventDefault()
        if(hide){
            setHide(false)
        }else{
            setHide(true);
        }
    }
    
    const goBack = () =>{
        p.history.goBack();
    }

    const onSubmit = () =>{
        let {name, gender, password} = data.form;
        if(name != '' && gender != '' && password != ''){
            localStorage.removeItem('isRegister');
            window.location.href = '/register/choose-community'
        }else{
            return false;
        }
    }

    const handleChange = e =>{
        let target = e.target
        let value = target.value;
        let name = target.name;
        console.log(value)
        setData({form: {...data.form, [name]: value}})
    }

    console.log(data);

    return(
        <div className="container">
            <div className="d-flex justify-content-center mb-4 mt-3">
                <a href="/">
                    <img src={Logo} />
                </a>
            </div>
            <div className="d-flex justify-content-center">
                <div className="card text-center card-login">
                    <div className="row">
                        <div className="col-auto">
                            <a onClick={() => goBack()}>
                                <img src={Back} />
                            </a>
                        </div>
                        <div className="col">
                            <h2 className="title-register">Daftar Dengan Email</h2>
                        </div>
                    </div>

                    <div className="label text-info">email@tokosultan.com</div>

                    <div className="text-left mb-3 card-body">
                        <div className="form-group">
                            <label className="label">Nama Lengkap</label>
                            <input type="text" className="form-control" name="name" value={data.form.name || ''} onChange={(e) => handleChange(e)} required/>
                        </div>
                        <div className="form-group">
                            <label className="label">Jenis Kelamin</label>
                            <select className="form-control" value={data.form.gender || ''} name="gender" onChange={(e) => handleChange(e)} required>
                                <option value=""></option>
                                <option value="pria">Pria</option>
                                <option value="wanita">Wanita</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="label">Kata Sandi</label>
                            <div className="form-prepend">
                                <div className="prepend">
                                    <div className="valign">
                                        <div className="inner">
                                            <a href="#" onClick={(e) => displayPassword(e)}>
                                                <img src={eyeoff} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <input type={hide ? "password":"text"} className="form-control mega-form-control" name="password" value={data.form.password || ''} onChange={(e) => handleChange(e)} required />
                                </div>
                            </div>
                            <small className="label text-info">Minimum 8 karakter</small>
                        </div>
                        <button type="submit" className="btn-sultan btn-sultan-secondary" onClick={() => onSubmit()}>Daftar</button>
                    </div>

                    <div className="label text-info">Dengan mendaftar, saya menyetujui</div>
                    <div className="label text-info"><a href="#" className="label text-secondary">Syarat dan Ketentuan</a> serta <a href="#" className="label text-secondary">Kebijakan Privasi</a></div>
                </div>
            </div>
        </div>
    )
}

export default Biodata;