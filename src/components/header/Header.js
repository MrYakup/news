import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, Typography } from '@mui/material';
import { GlobalContext } from '../../contexts/GlobalState';

function Header() {

    const { search, setSearch } = useContext(GlobalContext)

    return (
        <Box sx={{ borderBottom: "2px solid #f2f2f2", marginBottom: "30px" }}>
            <Box className="headerTop">
                <Typography sx={{fontSize:{xs:"16px", sm:"18px"}, fontWeight:"600" }}>Onur KORDOĞAN</Typography>
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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
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
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>

                <NavLink
                    to="/"
                    style={({ isActive }) =>
                    ({
                        textDecoration: "none",
                        color: isActive ? '#000' : '#666',
                        textTransform: "capitalize",
                        backgroundColor: isActive ? "#f2f2f2" : "#fff",
                        width: "200px",
                        padding: "8px",
                        fontWeight: isActive ? "600" : "400",
                        textAlign: "center",
                    })
                    }
                >
                    Home
                </NavLink>


                <NavLink
                    to="/categories/general"
                    style={({ isActive }) =>
                    ({
                        textDecoration: "none",
                        color: isActive ? '#000' : '#666',
                        textTransform: "capitalize",
                        backgroundColor: isActive ? "#f2f2f2" : "#fff",
                        width: "200px",
                        padding: "8px",
                        fontWeight: isActive ? "600" : "400",
                        textAlign: "center",
                    })
                    }
                >
                    Cotegories
                </NavLink>


                <NavLink
                    to="aboutUs"
                    style={({ isActive }) =>
                    ({
                        textDecoration: "none",
                        color: isActive ? '#000' : '#666',
                        textTransform: "capitalize",
                        backgroundColor: isActive ? "#f2f2f2" : "#fff",
                        width: "200px",
                        padding: "8px",
                        fontWeight: isActive ? "600" : "400",
                        textAlign: "center",
                    })
                    }
                >
                    AboutUs
                </NavLink>

            </Box>
        </Box>
    )
}

export default Header