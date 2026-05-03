import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <NavBar />

            <main className='my-20 mx-4'>
                {children}
            </main>
        </div>
    );
};

export default Mainlayout;