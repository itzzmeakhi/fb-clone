import React from 'react';

import './Post.styles.css';

// MATERIAL UI COMPONENTS

import Avatar from '@material-ui/core/Avatar';

// MATERIAL UI ICONS

import NearMeIcon from '@material-ui/icons/NearMe';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Post = ({ profilePicSrc, image, postedBy, timestamp, message }) => {
    return(
        <div className = 'post'>

            <div className = 'post__top'>
                <Avatar src = { profilePicSrc } className = 'post__avatar' />

                <div className = 'post__topInfo'>
                    <h3> { postedBy } </h3>
                    <p> Timestamp... </p>
                </div>

            </div>

            <div className = 'post__bottom'>
                <p> { message } </p>
            </div>

            <div className = 'post__image'>
                <img src = { image } alt = '' />
            </div>

            <div className = 'post__options'>

                <div className = 'post__option'>
                    <ThumbUpIcon />
                    <p> Like </p>
                </div>

                <div className = 'post__option'>
                    <ChatBubbleOutlinedIcon />
                    <p> Comment </p>
                </div>

                <div className = 'post__option'>
                    <NearMeIcon />
                    <p> Share </p>
                </div>

                <div className = 'post__option'>
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>

            </div>

        </div>
    )
};

export { Post };