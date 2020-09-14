import React from 'react';
import share from '../assets/images/detail/share.png';

const TabDetail = p =>{
    return(
        <>
            <div className="hline" />
            <div className="row">
                <div className="col">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Deskripsi</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Ulasan (0)</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Rekomendasi</a>
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
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do euismod tempor 
                    incididunt uit labore et dolors magna aluiqa. Dapibus ultricess in laculis nunc sed
                    alugue lacus. Quam nulla portitor massa id neque aliquam.Dapibus ultricess in laculis nunc sed Dapibus ultricess in laculis nunc sed alugue lacus. Quam nulla portitor massa id neque aliquam. Dapibus ultricess in laculis nunc sed
                    alugue lacus. Quam nulla portitor massa id neque aliquam. Dapibus ultricess in laculis nunc sed alugue lacus. Quam nulla portitor massa id neque aliquam.
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do euismod tempor 
                    incididunt uit labore et dolors magna aluiqa. Dapibus ultricess in laculis nunc sed
                    alugue lacus. Quam nulla portitor massa id neque aliquam.Dapibus ultricess in laculis nunc sed Dapibus ultricess in laculis nunc sed alugue lacus. Quam nulla portitor massa id neque aliquam. Dapibus ultricess in laculis nunc sed
                    alugue lacus. Quam nulla portitor massa id neque aliquam. Dapibus ultricess in laculis nunc sed alugue lacus. Quam nulla portitor massa id neque aliquam.
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do euismod tempor 
                    incididunt uit labore et dolors magna aluiqa. Dapibus ultricess in laculis nunc sed
                    alugue lacus. Quam nulla portitor massa id neque aliquam.Dapibus ultricess in laculis nunc sed Dapibus ultricess in laculis nunc sed alugue lacus. Quam nulla portitor massa id neque aliquam. Dapibus ultricess in laculis nunc sed
                    alugue lacus. Quam nulla portitor massa id neque aliquam. Dapibus ultricess in laculis nunc sed alugue lacus. Quam nulla portitor massa id neque aliquam.
                </div>
            </div>
        </>
    )
}

export default TabDetail;