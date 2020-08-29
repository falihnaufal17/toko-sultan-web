import React, {useState, useEffect} from 'react';
import Logo from '../assets/images/Logo.png';
import eyeoff from '../assets/images/eye-off.png';
import '../assets/styles/auth.scss';

const OpenStore = p =>{
    const [data, setData] = useState({
        store_name: '',
        store_url: '',
        store_domicile: '',
        store_postcode: '',
        store_emailPhone: '',
        store_password: '',
        store_condition_terms: ''
    });
    const [hide, setHide] = useState(true);

    const displayPassword = (e) => {
        e.preventDefault()
        if(hide){
            setHide(false)
        }else{
            setHide(true);
        }
    }

    const handleChange = e => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        setData({...data, [name]: value})
    }

    const onSubmit = () =>{
        Object.keys(data).map((item)=>{
            if(item != ''){
                setData({[item]: ''});
                window.location.href = '/';
            }
        })
    }

    return(
        <div className="container">
            <div className="d-flex justify-content-center mb-4 mt-3">
                <a href="/">
                    <img src={Logo} alt="logo-toksul" />
                </a>
            </div>
            <div className="d-flex justify-content-center">
                <div className="card text-center card-login">
                    <h2 className="title-register">Silahkan isi detail toko disini</h2>
                    <div className="text-left mb-3 card-body">
                        <form onSubmit={() => onSubmit()}>
                            <div className="form-group">
                                <label className="label">Nama Toko</label>
                                <input type="text" className="form-control" max="24" maxLength="24" value={data.store_name || ''} name="store_name" onChange={e => handleChange(e)} required/>
                                <div className="row justify-content-between">
                                    <div className="col">
                                        <small className="label text-info">Nama tidak bisa diubah lagi</small>
                                    </div>
                                    <div className="col-auto">
                                        <small className="label text-info">{data.store_name ? data.store_name.length:0}/24</small>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="label">Link Toko</label>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <small className="label text-info">www.tokosultan.com/</small>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" max="16" maxLength="16" value={data.store_url || ''} name="store_url" onChange={e => handleChange(e)} required/>
                                    </div>
                                </div>
                                <small className="label text-info float-right">{data.store_url ? data.store_url.length:0}/16</small>
                            </div>
                            <div className="form-group">
                                <label>Kota atau Kecamatan</label>
                                <input type="text" className="form-control" value={data.store_domicile || ''} name="store_domicile" onChange={e => handleChange(e)} required/>
                            </div>
                            <div className="form-group">
                                <label>Kode Pos</label>
                                <input type="number" className="form-control" value={data.store_postcode || ''} name="store_postcode" onChange={e => handleChange(e)} required/>
                            </div>
                            <div className="form-group">
                                <label>Nomor Ponsel atau Email</label>
                                <input type="text" className="form-control" value={data.store_emailPhone || ''} name="store_emailPhone" onChange={e => handleChange(e)} required/>
                            </div>
                            <div className="form-group mb-4">
                                <label className="label">Kata Sandi</label>
                                <div className="form-prepend">
                                    <div className="prepend">
                                        <div className="valign">
                                            <div className="inner">
                                                <a href="#" onClick={(e) => displayPassword(e)}>
                                                    <img src={eyeoff} alt="icon-eye-off" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <input type={hide ? "password":"text"} className="form-control mega-form-control" name="store_password" value={data.store_password || ''} onChange={(e) => handleChange(e)} required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <input type="checkbox" className="form-check" value="1" name="store_condition_terms" onChange={e => handleChange(e)} required/>
                                    </div>
                                    <div className="col pl-2">
                                        <div className="label text-info">Saya setuju dengan <a href="#" className="label text-secondary">Syarat dan Ketentuan</a> serta <a href="#" className="label text-secondary">Kebijakan Privasi</a> Toko Sultan</div>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn-sultan btn-sultan-secondary" onClick={()=>onSubmit()}>Daftar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenStore;