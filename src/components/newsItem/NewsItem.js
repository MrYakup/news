import { Box, Typography } from '@mui/material'
import React from 'react'

function NewsItem({ item }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'center', sm: 'flex-start' },

                // backgroundColor: '#f1f1f1',
                // boxShadow: '1px 1px 20px 0px #ddd',
                gap: '10px',
                // borderRadius: '8px',
                overflow: 'hidden',
                height: { xs: 'auto', sm: '200px' },
                cursor: 'pointer',
                transitionDuration: '0.1s',

                '&:hover': {
                    transform: 'scale(1.01)',
                    boxShadow: '5px 5px 20px 2px #bbb',
                },
                '&:active': {
                    transform: 'scale(1)',
                    boxShadow: '5px 5px 20px 2px #bbb',
                },
                // '&  img': {
                //     borderRadius: '8px',

                // },
                // '&:hover  img': {
                //     borderRadius: '0px',

                // }
            }}
        >

            <Box
                sx={{
                    width: { xs: '100%', sm: '200px' },
                    height: { xs: '100px', sm: '100%' },
                    flex: { xs: "0 0 200px", sm: "0 0 200px", md: "0 0 300px" },
                    overflow: 'hidden',
                    // borderRadius: '8px',
                }}
            >
                <img
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src={item?.urlToImage ?? "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    alt=""
                />
            </Box>


            <Box
                sx={{
                    p: { xs: '16px', sm: '8px 16px' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: { sm: 'space-between' },
                    height: { sm: '90%' },
                    gap: '8px',
                }}
            >

                <Typography
                    sx={{
                        fontFamily: 'poppins',
                        fontSize: { xs: "16px", sm: '18px', md: '20px' },
                        lineHeight: { xs: "22px", sm: '26px' },
                        fontWeight: '600'
                    }}
                >
                    {item?.title?.slice(0, 100) ?? "lorem ipsum dolor sit amet"} {item?.title?.length > 0 ? "..." : ""}
                </Typography>

                <Typography
                    sx={{
                        fontFamily: 'poppins',
                        fontSize: { xs: "12px", sm: '14px' },
                        lineHeight: { xs: "18px", sm: '20px' },
                        fontWeight: '400',
                        color: '#333'
                    }}
                >
                    {item?.content ?? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam."}
                </Typography>

                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'poppins',
                            fontSize: { xs: "10px", sm: '12px' },
                            lineHeight: { xs: "16px", sm: '16px' },
                            fontWeight: '500',
                            color: '#111'
                        }}
                    >
                        Dave Rogers <span>in</span> News
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: 'poppins',
                            fontSize: { xs: "10px", sm: '12px' },
                            lineHeight: { xs: "16px", sm: '16px' },
                            fontWeight: '400',
                            color: '#666'
                        }}
                    >
                        Jun 14 • 3 min read
                    </Typography>
                </Box>

            </Box>

        </Box>
    )
}

export default NewsItem