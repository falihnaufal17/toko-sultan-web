import React from 'react';
import FloatChatIcon from '../../assets/images/float-chat-icon.png';
import CapaTop from '../../assets/images/capa-top.png';

const FloatButtonChat = p =>{
    return(
        <div className="dropup">
            <a href="#" className="dropdown-toggle float-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                
                    <div className="float-content">
                        <img src={FloatChatIcon} />
                        <div className="text">Chat</div>
                        <img src={CapaTop} />
                    </div>
            </a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
            </div>
        </div>
    )
}

export default FloatButtonChat;