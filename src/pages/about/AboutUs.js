import React from 'react'
import { Box } from '@mui/system'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link, Typography } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import "./about.css";
import SideNavbar from '../../components/aboutUS/sideNav/SideNavbar'
import Summary from '../../components/aboutUS/summary/Summary'
import Projects from '../../components/aboutUS/projects/Projects'
import ProfessionalSkills from '../../components/aboutUS/professionalSkills/ProfessionalSkills'
import Home from '../../components/aboutUS/home/Index'



function AboutUs() {
    return (
        <Box>

            <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: 2 }}>
                <Box
                    className="avatarContainer"
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        border: "2px solid #ec704c"
                    }}>
                    <img src="https://avatars.githubusercontent.com/u/81565373?v=4"
                        alt="Onur KORDOĞAN"
                        style={{
                            position: "absolute",
                            height: "150px",
                            width: "auto",
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                    />
                    <Box
                        className="details"
                        sx={{
                            height: "150px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "30px",
                            background: "rgba(6, 12, 34, 0.70)",
                            position: "absolute",
                            left: 0,
                            bottom: "-110px",
                            right: 0,
                            textAlign: "center",
                            paddingTop: "10px",
                            transition: "all 500ms cubic-bezier(0.645, 0.045, 0.355, 1)"
                        }}>

                        <Link href=""
                            sx={{
                                textDecoration: "none",
                                color: "#fff",
                                fontSize: "12px",
                                fontWeight: "600",
                                marginBottom: "5px",
                                "&:hover": {
                                    color: "#ec704c",
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
                                        color: "#ec704c",
                                        transition: "all",
                                        transitionDuration: "300ms"
                                    }
                                }} />
                            </Link>
                            <Link href="">
                                <TwitterIcon sx={{
                                    "&:hover": {
                                        color: "#ec704c",
                                        transition: "all",
                                        transitionDuration: "300ms"
                                    }
                                }} />
                            </Link>
                            <Link href="https://github.com/OnurKor">
                                <GitHubIcon sx={{
                                    "&:hover": {
                                        color: "#ec704c",
                                        transition: "all",
                                        transitionDuration: "300ms"
                                    }
                                }} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/onur-kordogan">
                                <LinkedInIcon sx={{
                                    "&:hover": {
                                        color: "#ec704c",
                                        transition: "all",
                                        transitionDuration: "300ms"
                                    }
                                }} />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                position: "absolute",
                right: "10px",
                top: "150px",
                background: "rgba(6, 12, 34, 0.01)",
                boxShadow: "6px 6px 10px #f2f2f2",
                textAlign: "center",
                paddingY: "50px",
                paddingX:"6px"
            }}>
                <Typography>Onur KORDOĞAN</Typography>
                <Typography>Full Stack Developer</Typography>

                <ContactMailIcon color='primary' fontSize='large' />
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Box >
                        <Link sx={{ textDecoration: "none" }} href="tel:+90 537 625 48 93">+90 537 625 48 93</Link>
                    </Box>

                    <Box >
                        <Link sx={{ textDecoration: "none" }} href="mailto:onurkordogan@gmail.com">onurkordogan@gmail.com</Link>
                    </Box>
                </Box>
            </Box>

            <SideNavbar />

            <Home />
            <Summary />
            <Projects />
            <ProfessionalSkills />

        </Box>
    )
}

export default AboutUs