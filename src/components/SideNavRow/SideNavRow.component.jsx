import React from 'react';

import './SideNavRow.styles.css';

// MATERIAL UI COMPONENTS

import Avatar from '@material-ui/core/Avatar';

const SideNavRow = ({ src, Icon, title, ...otherProps }) => {
    return(
        <div className = 'sideNavRow'>

            { src && <Avatar src = { src } /> }
            { Icon && <Icon /> }
            <h4> { title } </h4>

        </div>
    )
};

export { SideNavRow };