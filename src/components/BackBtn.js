import React from 'react';
//components
import Link from './Link';

const BackBtn = ({prevDir}) => {
    return (
        <Link href={prevDir} className="back-btn-container">
            <header className='back-btn'>
                <h3>
                    back
                </h3>
            </header>
        </Link>
    );
};

export default BackBtn;