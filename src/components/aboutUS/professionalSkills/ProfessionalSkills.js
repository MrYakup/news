import { Container, Typography, Box, List, ListItem } from '@mui/material'
import React from 'react'

function ProfessionalSkills() {
  return (
    <Container id="professional"
      sx={{
        minHeight: "60vh",
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "100px",
        paddingLeft: "60px",
        background:"rgba(6, 12, 34, 0.01)",
        boxShadow:"6px 6px 10px #f2f2f2"
      }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>TECHNICAL SKILLS</Typography>
        <List>
          <ListItem>✓ HTML5, CSS3, JavaScript</ListItem>
          <ListItem>✓ React.js, Redux</ListItem>
          <ListItem>✓ SASS, SCSS, Bootstrap, Material.UI</ListItem>
          <ListItem>✓ Python</ListItem>
          <ListItem>✓ SQL</ListItem>
          <ListItem>✓ Git, GitHub</ListItem>
          <ListItem>✓ APIs & RESTful APIs</ListItem>
          <ListItem>✓ Agile, Jira, SDLC</ListItem>
          <ListItem>✓ Linux Basic, VS Code</ListItem>
          <ListItem>✓ OOP</ListItem>
        </List>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>SOFT SKILLS</Typography>
        <List>
          <ListItem>✓ Analytical Thinking, Creativity</ListItem>
          <ListItem>✓ Time Management</ListItem>
          <ListItem>✓ Idea Exchange</ListItem>
          <ListItem>✓ Self-discipline</ListItem>
          <ListItem>✓ Problem-solving Abilities</ListItem>
          <ListItem>✓ Self-motivated, Strong Communication</ListItem>
          <ListItem>✓ Ability Asking to Google</ListItem>
          <ListItem>✓ Collaboration & Teamwork</ListItem>
          <ListItem>✓ Coaching Mindset</ListItem>
          <ListItem>✓ Resilience</ListItem>
        </List>
      </Box>
    </Container>
  )
}

export default ProfessionalSkills