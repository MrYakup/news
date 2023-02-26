import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function Layout() {
    return (
        <div style={{ minHeight: '90vh' }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout