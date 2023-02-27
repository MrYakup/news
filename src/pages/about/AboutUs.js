import React from 'react'
import { Box } from '@mui/system'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';
import "./about.css";



function AboutUs() {
    return (
        <Box>

            <Box sx={{ width: "200px" }}>
                <Box
                    className="avatarContainer"
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",

                    }}>
                    <img src="https://avatars.githubusercontent.com/u/81565373?v=4"
                        alt="Onur KORDOĞAN"
                        style={{
                            position: "absolute",
                            height: "200px",
                            width: "auto",
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                    />
                    <Box
                        className="details"
                        sx={{
                            height: "200px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "30px",
                            background: "rgba(6, 12, 34, 0.70)",
                            position: "absolute",
                            left: 0,
                            bottom: "-150px",
                            right: 0,
                            textAlign: "center",
                            paddingTop: "10px",
                            transition: "all 500ms cubic-bezier(0.645, 0.045, 0.355, 1)"
                        }}>

                        <Link href=""
                            sx={{
                                textDecoration: "none",
                                color: "#fff",
                                fontSize: "16px",
                                fontWeight: "600",
                                marginBottom: "5px",
                                "&:hover": {
                                    color: "red",
                                    transition: "all",
                                    transitionDuration: "300ms"
                                }
                            }}
                        >
                            Onur KORDOĞAN
                        </Link>

                        <Box sx={{ height: "30px", display: "flex", justifyContent: "center", gap: "8px" }}>
                            <Link href="">
                                <InstagramIcon sx={{
                                    "&:hover": {
                                        color: "red",
                                        transition: "all",
                                        transitionDuration: "300ms"
                                    }
                                }} />
                            </Link>
                            <Link href="">
                                <TwitterIcon sx={{
                                    "&:hover": {
                                        color: "red",
                                        transition: "all",
                                        transitionDuration: "300ms"
                                    }
                                }} />
                            </Link>
                            <Link href="https://github.com/OnurKor">
                                <GitHubIcon sx={{
                                    "&:hover": {
                                        color: "red",
                                        transition: "all",
                                        transitionDuration: "300ms"
                                    }
                                }} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/onur-kordogan">
                                <LinkedInIcon sx={{
                                    "&:hover": {
                                        color: "red",
                                        transition: "all",
                                        transitionDuration: "300ms"
                                    }
                                }} />
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Box >
                        <Link sx={{ textDecoration: "none" }} href="tel:+90 537 625 48 93">+90 537 625 48 93</Link>
                    </Box>

                    <Box >
                        <Link sx={{ textDecoration: "none" }} href="mailto:onurkordogan@gmail.com">onurkordogan@gmail.com</Link>
                    </Box>
                </Box>
            </Box>

           

        </Box>
    )
}

export default AboutUs