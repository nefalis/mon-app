import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />

            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;