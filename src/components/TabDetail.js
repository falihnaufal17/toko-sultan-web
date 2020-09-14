import React, {lazy, Suspense} from 'react';
import share from '../assets/images/detail/share.png';

import '../assets/styles/home.scss';

const SectionRekomendasi = lazy(()=>import('../components/home/sectionRekomendasi'));

const TabDetail = p =>{
    return(
        <Suspense fallback={<div/>}>
            <div className="hline" />
            <div className="row">
                <div className="col">
                    <ul className="nav nav-tabs vertical-xs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="deskripsi-tab" data-toggle="tab" href="#deskripsi" role="tab" aria-controls="deskripsi" aria-selected="true">Deskripsi</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="ulasan-tab" data-toggle="tab" href="#ulasan" role="tab" aria-controls="ulasan" aria-selected="false">Ulasan (0)</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="rekomendasi-tab" data-toggle="tab" href="#rekomendasi" role="tab" aria-controls="rekomendasi" aria-selected="false">Rekomendasi</a>
                        </li>
                    </ul>
                </div>
                <div className="col-auto">
                    <a href="#" className="card card-category">Laporkan Produk</a>
                </div>
                <div className="col-auto">
                    <a href="#" className="card card-category btn-share">
                        <img src={share} alt="share" /> <span>Bagikan</span>
                    </a>
                </div>
            </div>
            <div className="hline"/>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="deskripsi" role="tabpanel" aria-labelledby="deskripsi-tab">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do euismod tempor 
                    incididunt uit labore et dolors magna aluiqa. Dapibus ultricess in laculis nunc sed
                    alugue lacus. Quam nulla portitor massa id neque aliquam.Dapibus ultricess in laculis nunc sed Dapibus ultricess in laculis nunc sed alugue lacus. Quam nulla portitor massa id neque aliquam. Dapibus ultricess in laculis nunc sed
                    alugue lacus. Quam nulla portitor massa id neque aliquam. Dapibus ultricess in laculis nunc sed alugue lacus. Quam nulla portitor massa id neque aliquam.
                </div>
                <div className="tab-pane fade" id="ulasan" role="tabpanel" aria-labelledby="ulasan-tab">
                    <div className="label">Belum ada ulasan</div>
                    <form>
                        <div className="form-box">
                            <div className="form-group">
                                <label>Tulis sesuatu yang ingin anda tanyakan...</label>
                                <textarea className="form-control" rows={3}></textarea>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn-sultan btn-sultan-secondary">Kirim</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="tab-pane fade" id="rekomendasi" role="tabpanel" aria-labelledby="rekomendasi-tab">
                    <SectionRekomendasi rekomendasi={p.rekomendasi} />
                </div>
            </div>
        </Suspense>
    )
}

export default TabDetail;