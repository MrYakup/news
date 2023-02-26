import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import "./home.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import { Box, Container, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import NewsItem from '../../components/newsItem/NewsItem';
import { GlobalContext } from '../../contexts/GlobalState';
import Slider from '../../components/slider/Slider';

function Home() {
    const [news, setNews] = useState([]);

    const { search } = useContext(GlobalContext)
    // var regex = /deprem/i;
    const slicedNews = news.slice(3);
    let regex = new RegExp(search, 'gi');
    const searchNews = slicedNews.filter((item) => regex.test(item.title))


    const [itemsPerPage, setItemsPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastNews = currentPage * itemsPerPage;
    const indexOfFirstNews = indexOfLastNews - itemsPerPage;
    const currentNews = searchNews?.slice(indexOfFirstNews, indexOfLastNews);
    const pageCount = Math.ceil(searchNews?.length / itemsPerPage);

    const api = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=tr&apiKey=8d8fc178de1741be89da43d8161c27ae')
            .then(function (response) {
                setNews(response.data.articles)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }


    useEffect(() => {
        api()
    }, []);

    const handlePageClick = (event, value) => {
        setCurrentPage(value)
    };


    return (
        <Box>

            <Box
                sx={{
                    mb: { xs: '30px', sm: '100px' }
                }}
            >
                {/* <Swiper
                    style={{ height: "40vh" }}
                    spaceBetween={1}
                    slidesPerView={1}
                >
                    {
                        news?.slice(0, 3).map((item, index) => {
                            return (
                                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'red' }} key={index} >
                                    <div className="newsContainer">
                                        {
                                            item?.urlToImage ? <img className="sliderImage" src={item?.urlToImage} /> :
                                                <img className="sliderImage" src={"https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} />
                                        }
                                        <div className="newsContent">
                                            <p>Source Of News: <b>{item?.author ? item.author : "Unknown"}</b></p>
                                            <h3>{item?.title}</h3>
                                            <p>{item?.content}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper> */}

                <Slider news={news} />
            </Box>



            <Container>
                {
                    search ?
                        <Box sx={{ display: "flex", pb: "20px", fontSize: "18px" }}>
                            <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>{search}</Typography> : <Typography sx={{ fontSize: "18px", color: "#666", pl: "4px" }}>{currentNews.length < 1 ? (" için sonuç bulunamadı ") : ("için " + currentNews.length + " sonuç bulundu ")}</Typography>

                        </Box>
                        : null
                }
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                    }}
                >
                    {
                        currentNews?.map((item, index) => {

                            return (<NewsItem item={item} key={index} />)
                        })
                    }
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}>
                    <Pagination onChange={handlePageClick} count={pageCount} variant="outlined" color="primary" />
                </Box>
            </Container>
        </Box>
    )
}


export default Home