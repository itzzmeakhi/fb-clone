import React from 'react';

import { Stories } from './../Stories/Stories.component';
import { AddFeed } from './../AddFeed/AddFeed.component';

import './Feed.styles.css';

const Feed = () => {
    return(
        <div className = 'feed'>
            <Stories />
            <AddFeed />
        </div>
    )
};

export { Feed };