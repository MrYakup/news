import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Container, Grid, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import NewsItem from '../../components/newsItem/NewsItem';
import { GlobalContext } from '../../contexts/GlobalState';

const countryCodes = [
    {
        code: "TR",
        country: "Türkiye"
    },
    {
        code: "US",
        country: "United States"
    },
    {
        code: "GB",
        country: "Birleşik Krallık"
    },
    {
        code: "AE",
        country: "Birleşik Arap Emirlikleri"
    },
    {
        code: "CA",
        country: "Kanada"
    },
    {
        code: "IN",
        country: "Hindistan"
    },
    {
        code: "JP",
        country: "Japonya"
    },
    {
        code: "RU",
        country: "Rusya "
    },
    {
        code: "SA",
        country: "Suudi Arabistan"
    },

]

const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]

function Category() {

    const { name } = useParams()
    const [country, setCountry] = useState('TR');
    const [categoryNews, setCategoryNews] = useState([]);

    const { search } = useContext(GlobalContext)
    let regex = new RegExp(search, 'gi');
    const searchNews = categoryNews.filter((item) => regex.test(item.title))


    const [itemsPerPage, setItemsPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastNews = currentPage * itemsPerPage;
    const indexOfFirstNews = indexOfLastNews - itemsPerPage;
    const currentNews = searchNews?.slice(indexOfFirstNews, indexOfLastNews);
    const pageCount = Math.ceil(searchNews?.length / itemsPerPage);


    const api = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${name}&apiKey=8d8fc178de1741be89da43d8161c27ae`)
            .then(function (response) {
                setCategoryNews(response?.data?.articles)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }

    useEffect(() => {
        api()
    }, [name, country]);


    const handlePageClick = (event, value) => {
        setCurrentPage(value)
    };

    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    };

    return (

        <Grid container spacing={3} sx={{ minHeight: "80vh", mt: "50px" }}>

            <Grid item xs={12} sm={4} md={2}>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        pl: "20px"
                    }}
                >
                    {
                        categories?.map((category, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={`/categories/${category}`}
                                    style={({ isActive }) =>
                                    ({
                                        textDecoration: "none",
                                        color: isActive ? '#000' : '#666',
                                        textTransform: "capitalize",
                                        backgroundColor: isActive ? "#f2f2f2" : "#fff",
                                        width: "100%",
                                        padding: "8px",
                                        fontWeight: isActive ? "600" : "400"
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

                <Box sx={{ m: "22px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">country</InputLabel>
                        <Select
                            defaultValue='TR'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={country}
                            label="country"
                            onChange={handleChangeCountry}
                        >
                            {
                                countryCodes?.map((item) => {
                                    return (
                                        <MenuItem key={item.country} value={item.code}>{item.country}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </Box>

            </Grid>

            <Grid item xs={12} sm={8} md={10}>
                <Container>
                    {
                        search ?
                            <Box sx={{ display: "flex", pb: "20px", pl: "10px", fontSize: "18px" }}>
                                <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>{search}</Typography> : <Typography sx={{ fontSize: "18px", color: "#666", pl: "4px" }}>{currentNews.length < 1 ? (" için sonuç bulunamadı ") : ("için " + currentNews.length + " sonuç bulundu ")}</Typography>

                            </Box>
                            : null
                    }
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }} >
                        {
                            currentNews?.map((item, index) => {
                                return (
                                    <NewsItem item={item} key={index} />
                                )
                            })
                        }
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}>
                        <Pagination onChange={handlePageClick} count={pageCount} variant="outlined" color="primary" />
                    </Box>
                </Container>
            </Grid>

        </Grid>

    )
}

export default Category