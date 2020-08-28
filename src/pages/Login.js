import React, {useState} from 'react';
import Logo from '../assets/images/Logo.png';
import Back from '../assets/images/Back.png';
import eyeoff from '../assets/images/eye-off.png';
import '../assets/styles/auth.scss';

const Login = p =>{

    const [hide, setHide] = useState(true);
    const [data, setData] = useState({
        emailPhone: '',
        password: '',
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
        let {emailPhone, password} = data;
        if(emailPhone != '' && password != ''){
            window.location.href = '/verification'
        }
    }

    const handleChange = e => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        setData({...data, [name]: value})
    }

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
                            <h2 className="title-register">Silahkan Masuk</h2>
                        </div>
                    </div>
                    <div className="text-left mb-3 card-body">
                        <div className="form-group">
                            <label className="label">Nomor Ponsel Atau Email</label>
                            <input type="text" className="form-control" value={data.emailPhone || ''} name="emailPhone" onChange={e => handleChange(e)} required/>
                        </div>
                        <div className="form-group">
                            <label className="label">Kata Sandi</label>
                            <input type={hide ? "password" : "text"} className="form-control" value={data.password || ''} name="password" onChange={e => handleChange(e)} required/>
                            <a href="#" className="prepend-form" onClick={(e) => displayPassword(e)}>
                                <img src={eyeoff} />
                            </a>
                            <small className="label text-info">Minimum 8 karakter</small>
                        </div>
                        <button type="submit" className="btn-sultan btn-sultan-secondary" onClick={()=>onSubmit()}>Masuk</button>
                        <small>
                            <a href="#">Lupa Password?</a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;