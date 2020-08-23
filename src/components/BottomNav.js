import React from 'react';
import HomeIcon from '../assets/images/nav-home.png';
import FavoriteIcon from '../assets/images/nav-favorite.png';
import CommunityIcon from '../assets/images/nav-community.png';
import ProfileIcon from '../assets/images/nav-profile.png';
import HomeIconActive from '../assets/images/nav-home-active.png';
import FavoriteIconActive from '../assets/images/nav-favorite-active.png';
import CommunityIconActive from '../assets/images/nav-community-active.png';
import ProfileIconActive from '../assets/images/nav-profile-active.png';

const BottomNav = p =>{
    const urlTab = [
        {
            url: '/',
            icon: HomeIcon,
            icon_active: HomeIconActive
        },
        {
            url: '/favorite',
            icon: FavoriteIcon,
            icon_active: FavoriteIconActive
        },
        {
            url: '/community',
            icon: CommunityIcon,
            icon_active: CommunityIconActive
        },
        {
            url: '/profile',
            icon: ProfileIcon,
            icon_active: ProfileIconActive
        }
    ];

    console.log(p);

    let urlPath = p.location.pathname;

    return(
        <nav className="navbar fixed-bottom bottom-nav">
            <div className="container-fluid">
                {
                    urlTab.map((item, key) => {
                        return(
                        <a href={item.url} key={key}>
                            <img src={urlPath == item.url ? item.icon_active : item.icon} />
                        </a>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default BottomNav;