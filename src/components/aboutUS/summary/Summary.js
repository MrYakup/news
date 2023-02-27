import { Container, Typography, Box } from '@mui/material'
import React from 'react'

function Summary() {
  return (
    <Container id="summary"
      sx={{
        minHeight: "60vh",
        paddingTop: "100px",
        marginBottom: "200px",
        background:"rgba(6, 12, 34, 0.01)",
        boxShadow:"6px 6px 10px #f2f2f2"
      }}>
      <Box sx={{ pl: {xs:"18px", sm:"60px"} }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", textAlign: "center" }}>Summary</Typography>
        <Typography sx={{ textIndent: "70px" }}>
          +2 years experienced in IT and a diligent front-end developer. Have one of the most vital skills in
          the 21st century which is the self-learning. Eager to widen algorithmic horizons by exploring new
          programming techniques. Always tend to collaborate, enjoy verbal communications with colleagues, and
          highly value experience sharing. Able to grasp both new IT trends and upcoming innovations. Not only
          develop projects that are assigned to me but also desire to contribute the efficiency of projects since
          holding the Bachelor Degree at the Industrial Engineering. Looking forward to enhancing my knowledge of
          backend frameworks along with frontend technologies focused on User Interface applications by gaining
          qualified experiences. Especially interested in the Front end/Web Development, HTML, CSS, JS, React.
          Excited to learn new things and improve, lifetime student.
        </Typography>
      </Box>
    </Container>
  )
}

export default Summary