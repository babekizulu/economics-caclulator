//libraries
import React from 'react';
//components
import Logo from './Logo';
import Route from './Route';

const Header = () => {
    return (
        <div className='header-container'>
            <Logo/>
            <Route path='/'>
                <Logo/>
            </Route>
        </div>
    );
};

export default Header;