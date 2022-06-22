import React from 'react';

import './MainHeader.css';


const MainHeader = props => {
    return <header className='main-header'>{props.children}</header>//props.children is the placeholder for MainNavigation Child
};

export default MainHeader;