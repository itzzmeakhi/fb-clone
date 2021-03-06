import React from 'react';

import './Story.styles.css';

// MATERIAL UI COMPONENTS

import Avatar from '@material-ui/core/Avatar';

const Story = ({ storySrc, profilePicSrc, postedBy }) => {
    return(
        <div className = 'story' style = {{ backgroundImage: `url(${ storySrc })` }}>

            <Avatar src = { profilePicSrc } className = 'story__avatar' />
            <h4> { postedBy } </h4>

        </div>
    )
};

export { Story };