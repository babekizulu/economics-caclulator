import React from 'react';
//components
import Link from './Link';

/* Back Button
* @Desc: A simple back button which uses routing and link functionality 
* to return the user back to the previous directory
* @Props: prevDir 
* - prevDir: Previous directory
*/
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