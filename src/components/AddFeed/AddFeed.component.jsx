import React from 'react';

import './AddFeed.styles.css';

// MATERIAL UI COMPONENTS

import Avatar from '@material-ui/core/Avatar';

// MATERIAL UI ICONS

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';

const AddFeed = () => {

    const handleSubmit = event => {
        event.prevebtDefault();
    }

    return(
        <div className = 'addFeed'>

            <div className = 'addFeed__top'>
                <Avatar />
                <form>
                    <input
                        type = 'text'
                        className = 'addFeed__input'
                        placeholder = {`What's on your mind?`} />

                    <button
                        onClick = { handleSubmit }
                        type = 'submit'>
                            Hidden Submit
                    </button>
                </form>

            </div>

            <div className = 'addFeed__bottom'>

                <div className = 'addFeed__option'>
                    <VideocamIcon style = {{ color: 'red' }} />
                    <h3> Live Video </h3>
                </div>

                <div className = 'addFeed__option'>
                    <PhotoLibraryIcon style = {{ color: 'green' }} />
                    <h3> Photo/Video </h3>
                </div>

                <div className = 'addFeed__option'>
                    <InsertEmoticonIcon style = {{ color: 'orange' }} />
                    <h3> Feeling/Activity </h3>
                </div>

            </div>
        </div>
    )
};

export { AddFeed };