/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <Box className="nav">
      <a href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <Typography >
          Home
        </Typography>
      </a>
      <a href="#summary"
        onClick={() => setActiveNav('#summary')}
        className={activeNav === '#summary' ? 'active' : ''}
      >
        <Typography>
          Summary
        </Typography>
      </a>
      <a href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}
      >
        <Typography>
          Projects
        </Typography>
      </a>
      <a href="#professional"
        onClick={() => setActiveNav('#professional')}
        className={activeNav === '#professional' ? 'active' : ''}
      >
        <Typography>
          Professional
        </Typography>
      </a>
    </Box>
  );
};

export default SideNavbar;