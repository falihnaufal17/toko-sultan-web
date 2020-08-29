import React from 'react';
import FloatChatIcon from '../../assets/images/float-chat-icon.png';
import CapaTop from '../../assets/images/capa-top.png';

const FloatButtonChat = p =>{
    return(
        <a href="#">
            <div className="float-button">
                <div className="float-content">
                    <img src={FloatChatIcon} />
                    <div className="text">Chat</div>
                    <img src={CapaTop} />
                </div>
            </div>
        </a>
    )
}

export default FloatButtonChat;