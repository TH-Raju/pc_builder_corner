import React from 'react';
import Navbar from '../UI/Navbar';

const RootLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}

        </div>
    );
};

export default RootLayout;