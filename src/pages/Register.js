import React from 'react';
import Logo from '../assets/images/Logo.png';
import '../assets/styles/auth.scss';

const Register = p =>{
    return(
        <div className="container">
            <div className="d-flex justify-content-center mb-4 mt-3">
                <a href="/">
                    <img src={Logo} />
                </a>
            </div>
            <div className="d-flex justify-content-center">
                <div className="card text-center">
                    <h2 className="title-register">Daftar Sekarang</h2>
                    <p className="label mb-3">Sudah punya akun Toko Sultan? <a href="/login" className="label text-secondary">Masuk</a></p>
                    <div className="label text-info" href= "#">Buat Toko anda sendiri dengan</div>
                    
                    <div className="mb-2 mt-4">
                        <a href="#" className="btn-sultan btn-sultan-primary btn-shadow">Buka Toko disini</a>
                    </div>

                    <div className="row align-items-center mb-5 mt-5">
                        <div className="col d-none d-sm-block">
                            <div className="hline"/>
                        </div>
                        <div className="col-12 col-md-auto col-lg-auto">
                            <div className="label text-info">Atau daftar sebagai Pembeli</div>
                        </div>
                        <div className="col d-none d-sm-block">
                            <div className="hline"/>
                        </div>
                    </div>

                    <form className="text-left mb-3">
                        <div className="form-group">
                            <label className="label">Nomor Ponsel Atau Email</label>
                            <input type="text" className="form-control"/>
                            <small className="label text-info">Contoh: email@tokosultan.com</small>
                        </div>
                        <button className="btn-sultan btn-sultan-secondary">Daftar</button>
                    </form>

                    <div className="label text-info">Dengan mendaftar, saya menyetujui</div>
                    <div className="label text-info"><a href="#" className="label text-secondary">Syarat dan Ketentuan</a> serta <a href="#" className="label text-secondary">Kebijakan Privasi</a></div>
                </div>
            </div>
        </div>
    )
}

export default Register;