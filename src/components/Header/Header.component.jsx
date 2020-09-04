import React from 'react';

import './Header.styles.css';

import { ReactComponent as NavLogo } from './../../assets/images/logo/facebook.svg';

// MATERIAL UI COMPONENTS

import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

// ICONS

import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';
import FlagIcon from '@material-ui/icons/Flag';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';

const Header = ( props ) => {
    return (
        <div className = 'header'>

            <div className = 'header__left'>

                <NavLogo />

                <div className = 'header__input'>
                    <SearchIcon />
                    <input type = 'text' />
                </div>

            </div>

            <div className = 'header__center'>

                <div className = 'header__option'>
                    <HomeIcon />
                </div>

                <div className = 'header__option'>
                    <FlagIcon />
                </div>

                <div className = 'header__option'>
                    <SubscriptionsOutlinedIcon />
                </div>

                <div className = 'header__option'>
                    <StorefrontOutlinedIcon />
                </div>

                <div className = 'header__option'>
                    <SupervisedUserCircleIcon />
                </div> 

            </div>

            <div className = 'header__right'>

                <div className = 'header__info'>
                    <Avatar />
                    <h4> Akhil </h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>  
                <IconButton>
                    <ForumIcon />
                </IconButton>  
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>            

            </div>

        </div>
    )
};

export { Header };