

import React from 'react';
import NavBar from '../components/NavBar';

const Mainlayout = ({children}) => {
    return (
        <div>
             <NavBar/>
            {children}
        </div>
    );
};

export default Mainlayout;