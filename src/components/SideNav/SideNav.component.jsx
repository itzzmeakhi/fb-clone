import React from 'react';

import { SideNavRow } from './../SideNavRow/SideNavRow.component';

import './SideNav.styles.css';

// MATERIAL UI ICONS

import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';

const SideNav = () => {
    return(
        <div className = 'sideNav'>

            <SideNavRow
                src = 'https://avatars1.githubusercontent.com/u/22185174?s=460&u=0f80ecec9cf9c93a8c460c10307887f209bcf38d&v=4'
                title = 'Akhil' />
            <SideNavRow 
                Icon = { LocalHospitalIcon }
                title = 'COVID-19 Information Center' />
            <SideNavRow 
                Icon = { EmojiFlagsIcon }
                title = 'Pages' />
            <SideNavRow 
                Icon = { PeopleIcon } 
                title = 'Friends' />
            <SideNavRow
                Icon = { ChatIcon }
                title = 'Messenger' />
            <SideNavRow
                Icon = { StorefrontIcon }
                title = 'Marketplace' />
            <SideNavRow
                Icon = { VideoLibraryIcon }
                title = 'Videos' />
            <SideNavRow
                Icon = { ExpandMoreOutlinedIcon }
                title = 'Expand More' />

        </div>
    )
};

export { SideNav };