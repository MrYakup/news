import React from 'react'
import { NavLink } from "react-router-dom";
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton } from '@mui/material';

function Header() {

    // let activeStyle = {
    //     textDecoration: "underline",
    // };

    // let activeClassName = "underline";

    return (
        <div>
            <div className="headerTop">
                <h2>Onur KORDOĞAN</h2>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: '10px',
                        border: '1px solid #ddd',
                        p: { xs: '2px' },
                        pl: { xs: '15px' },
                        borderRadius: '50px',
                        width: { xs: '200px' }
                    }}
                >
                    <input
                        // className="headerSearch" 
                        placeholder='search..'
                        style={{
                            border: 'none',
                            outline: 'none',
                            width: '100%',
                            flex: 1,
                        }}
                    />
                    <IconButton>
                        <SearchIcon sx={{ color: '#ddd' }} />
                    </IconButton>
                </Box>
            </div>
            <nav>
                <ul className="headerLinkContainer">
                    <li className="headerLink">
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                            ({
                                textDecoration: "none",
                                color: isActive ? 'blue' : 'black'
                            })
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="headerLink">
                        <NavLink
                            to="/categories"
                            style={({ isActive }) =>
                            ({
                                textDecoration: "none",
                                color: isActive ? 'blue' : 'black'
                            })
                            }
                        >
                            Cotegories
                        </NavLink>
                    </li>
                    <li className="headerLink">
                        <NavLink
                            to="aboutUs"
                            style={({ isActive }) =>
                            ({
                                textDecoration: "none",
                                color: isActive ? 'blue' : 'black'
                            })
                            }
                        >
                            AboutUs
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header