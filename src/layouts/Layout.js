import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { GlobalProvider } from '../contexts/GlobalState';
import { Box } from '@mui/material';

function Layout() {

    return (
        <GlobalProvider>
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Header />
                <Outlet />
                <Footer />
            </Box>
        </GlobalProvider>
    )
}

export default Layout