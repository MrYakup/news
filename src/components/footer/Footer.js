import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

function Footer() {
    return (
        <Box sx={{ paddingTop: "100px", paddingBottom: "20px", display: "flex", flexDirection: "column", gap: "50px", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-around", alignItems: "center", height: "200px", width: "100%", backgroundColor: "#f8f9fa" }}>
                <Box sx={{ width: { xs: "60%", sm: "30%" }, display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "flex-start" } }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>Newsletter Subcribe</Typography>
                    <Typography sx={{ fontSize: "12px", textAlign: { xs: "center", sm: "left" } }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: '10px',
                        border: '1px solid #ddd',
                        backgroundColor: "#fff",
                        p: { xs: '2px' },
                        pl: { xs: '15px' },
                        borderRadius: '50px',
                        width: { xs: '200px' }
                    }}
                >
                    <input
                        placeholder='Enter your email'
                        style={{
                            border: 'none',
                            outline: 'none',
                            width: '100%',
                            flex: 1,
                        }}
                    />
                    <IconButton>
                        <SendIcon sx={{ color: '#ddd' }} />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ textAlign: "center" }}>Copyright ©2023 All rights reserved | This template is made with by <a style={{ textDecoration: "none", color: "green" }} href="https://www.linkedin.com/in/onur-kordogan">Onur KORDOĞAN</a></Box>
        </Box >
    )
}

export default Footer