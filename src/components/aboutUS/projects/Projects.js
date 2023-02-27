import { Container, List, ListItem, Box, Typography } from '@mui/material'
import React from 'react'

function Projects() {
  return (
    <Container id="projects"
      sx={{
        minHeight: "100vh",
        paddingTop: "100px",
        marginBottom: "90px",
        background: "rgba(6, 12, 34, 0.01)",
        boxShadow: "6px 6px 10px #f2f2f2"
      }}>
      <Box sx={{ textAlign: "center", pl:{xs:"10px", sm:"60px"} }}>


        <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>HTML-CSS</Typography>
        <List>
          <ListItem>
            ● Parallax Web Site : Our goal in this project was to improve the use of the parallax effect on the site,
            Skills/Tools : HTML CSS Frameworks
          </ListItem>
          <ListItem>
            ● Google Landing Page : Our aim in this project is to repeat the CSS and HTML skills by creating the google
            homepage digital twin. Skills/Toolls : HTML CSS Frameworks.
          </ListItem>
        </List>


        <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>JAVASCRIPT</Typography>
        <List>
          <ListItem>
            ● Ios Calculator : In this project, the goal is to make a functional and visual clone of the calculator of an iOS
            device. Skills/Tools : HTML, CSS Frameworks, JS Dom Manipulation and Event Listeners.
          </ListItem>
          <ListItem>
            ● To - Do App : In this project, a simple To-Do application was made using the array structure. User can add
            task from bowser, mark tasks as completed and delete them. Completed/total number of tasks can be
            displayed with a counter. Skills/Tools : JS Dom Manipulation and Event Listeners.
          </ListItem>
          <ListItem>
            ● Checkout Page : Our goal was to develop a real e-commerce website's checkout page for that project.
            There is a cart for buying products, and we can increase or decrease the number of products. By changing
            a parameter in the cart, our js functions calculate the cart total price. DOM, iterator, callback functions,
            string-array functions and events are used in our page. Additionally, we can remove products from the cart
            by clicking the remove button and decreasing the amount to "0". In that case, our page asks us to delete
            the product from the cart. As soon as you confirm the deletion, the sour chart total is recalculated by the js
            functions. Skills/Tools : DOM, Iterator, Callback functions, String-array functions and Events.
          </ListItem>
          <ListItem>
            ● Find Number : In this project, the goal is for a player to guess a randomly determined number.
            Skills/Tools: HTML, CSS Frameworks, JS Dom Manipulation and Event Listeners.
          </ListItem>
          <ListItem>
            ● Lottery Game : In this project, the aim is to determine the lotto numbers as many as 1 to 8 numbers
            received from the user. Skills/Tools: HTML, CSS Frameworks, JS Dom Manipulation and Event Listeners.
          </ListItem>
        </List>



        <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>REACT JS</Typography>
        <List>
          <ListItem>
            ● Language Card : In this Project , IT language card is desinged using React.js useState and hooks,
            Skills/Tools: React, CSS
          </ListItem>
          <ListItem>
            ● Tour App : In this Project , tour guide is desinged using React useState and hooks, Skills/Tools:
            React,SCSS
          </ListItem>
          <ListItem>
            ● Recipe App : In this Project , recipe is designed using React useState and hooks, I got from data from API
            with fetch. Skills/Tools: React,CSS,Fetch
          </ListItem>
          <ListItem>
            ● Movie App : In this project, it is aimed to display cinema posters by using the tmdb api. There is a search
            feature according to the entered word. Skills/Tools : React-router library, Bootstrap library, Axios library and
            Firebase
          </ListItem>
          <ListItem>
            ● Task Tracker : In this Project , recipe is desinged using React useState and hooks, Skills/Tools:
            React,CSS
          </ListItem>
        </List>

      </Box>
    </Container>
  )
}

export default Projects