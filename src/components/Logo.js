//libraries
import React from 'react';
//components
import Link from './Link';
//icons
import FormuliiiLogo from '../icons/formuliii_logo.png';
const Logo = () => {
    return (
        <Link href='/' className="logo-container">
            <img src={FormuliiiLogo} alt='Formuliii Logo' className='logo'/>
        </Link>
    );
};

export default Logo;