import React from 'react'
import { Container, Link, Typography, Box } from '@mui/material'
import ResumePDF from '../../../assets/OnurKordoğan.pdf';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function Index() {
  return (
    <Container id="#" sx={{ minHeight: "100vh" }}>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center",alignItems:"center", paddingTop: "100px" }}>
        <Link
          href={`${ResumePDF}`}
          target='_blank'
          sx={{
            textDecoration: "none",
            textAlign: "center",
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <CloudDownloadIcon sx={{
            fontSize: "60px",
            color: "#666",
            '&:hover': {
              transform: 'scale(1.2)',
              color: "#ec704c",
              transition: "all",
              transitionDuration: "500ms"
            },
          }} />
          <Typography sx={{ fontSize: "18px", color: "#666" }}>
            resume
          </Typography>
        </Link>

        <Link href="#summary"
          sx={{
            textDecoration: "none",
            textAlign: "center",
            position: "absolute",
            top: "84%",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <KeyboardDoubleArrowDownIcon
            sx={{
              fontSize: "36px",
              color: "#666",
              '&:hover': {
                transform: 'scale(1.2)',
                color: "#ec704c",
                transition: "all",
                transitionDuration: "500ms"
              },
            }}
          />
          <Typography sx={{ fontSize: "18px", color: "#666" }}>
            Summary
          </Typography>
        </Link>

      </Box>

    </Container>
  )
}

export default Index