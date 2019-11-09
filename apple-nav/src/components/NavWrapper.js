import React from 'react';
import BlackStyledDiv from './StyledDiv';
import { Link } from 'react-router-dom';



export const NavWrapper = () => {

    return (
        <BlackStyledDiv>
            <Link to='/'>Home</Link>
            <Link to='/mac'>Mac</Link>
            <Link to='/ipad'>iPad</Link>
            <Link to='/iphone'>iPhone</Link>
        </BlackStyledDiv>
    );
};

