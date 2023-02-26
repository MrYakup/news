import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { GlobalProvider } from '../contexts/GlobalState';

function Layout() {

    return (
        <div style={{ minHeight: '90vh' }}>
            <GlobalProvider>
                <Header />
                <Outlet />
                <Footer />
            </GlobalProvider>
        </div>
    )
}

export default Layout