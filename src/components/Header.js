import React, { Fragment } from 'react';
import {NavLink} from 'react-router-dom'; // => Link With .active;
// import {Link} from 'react-router-dom'; => Link Without .active;
import bgImg from '../img/header.png';

const Header = _ => {
    return (
        <Fragment>
            <header>
                <h4 className='brand'>
                    <a href='al'>Brand</a>
                </h4>
                <nav>
                    <ul>
                        <li><NavLink activeClassName='selected' 
                        exact to='/'>Home</NavLink></li>
                        <li><NavLink activeClassName='selected'
                        exact to='/items'>Items</NavLink></li>
                        <li><NavLink activeClassName='selected' 
                        exact to='/forms'>Forms</NavLink></li>
                        <li><NavLink activeClassName='selected' 
                        exact to='/blog'>Blog</NavLink></li>
                    </ul>
                </nav>
            </header>
            <div className='hero'>
                <img src={bgImg} alt='header bg' />
            </div>
        </Fragment>
    );
}

export default Header;