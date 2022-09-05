import React from 'react';
//components
import Link from './Link';

const BackBtn = ({prevDir}) => {
    return (
        <Link href={prevDir} className="back-btn-container">
            <p className='back-btn'>
                back
            </p>
        </Link>
    );
};

export default BackBtn;