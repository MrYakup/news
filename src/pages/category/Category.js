import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Grid } from '@mui/material'
import NewsItem from '../../components/newsItem/NewsItem';


function Category() {
    const { name } = useParams()
    const [categoryNews, setCategoryNews] = useState([]);
    const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]

    const api = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=${name ?? "general"}&apiKey=8d8fc178de1741be89da43d8161c27ae`)
            .then(function (response) {
                setCategoryNews(response?.data?.articles)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }


    useEffect(() => {
        api()
    }, [name]);

    return (
        <Grid container spacing={3} sx={{ minHeight: "80vh" }}>

            <Grid item xs={12} sm={4} md={2}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                    {
                        categories?.map((category) => {
                            return (
                                <NavLink
                                    to={`/categories/${category}`}
                                    style={({ isActive }) =>
                                    ({
                                        textDecoration: "none",
                                        color: isActive ? 'blue' : 'black'
                                    })
                                    }
                                >
                                    {
                                        category
                                    }
                                </NavLink>
                            )
                        })
                    }
                </Box>
            </Grid>

            <Grid item xs={12} sm={8} md={10}>
                {
                    categoryNews.map((item) => {
                        return (
                            <NewsItem item={item} />
                        )
                    })
                }
            </Grid>

        </Grid>
    )
}

export default Category