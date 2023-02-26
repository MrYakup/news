import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./home.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Container, Typography } from '@mui/material';
import NewsItem from '../../components/newsItem/NewsItem';

function Home() {
    const [news, setNews] = useState([]);

    const api = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=tr&apiKey=8d8fc178de1741be89da43d8161c27ae')
            .then(function (response) {
                setNews(response.data.articles)
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
    }, []);

    // console.log(news)
    return (
        <Box>
            <Box
                sx={{
                    mb: { xs: '30px', sm: '150px' }
                }}
            >
                <Swiper
                    style={{ height: "40vh" }}
                    spaceBetween={1}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}

                >
                    {
                        news?.slice(0, 3).map((item, index) => {
                            return (
                                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'red' }} key={index} >
                                    <div className="newsContainer">
                                        <div className="newsImage">
                                            {
                                                item?.urlToImage ? <img className="sliderImage" src={item?.urlToImage} /> :
                                                    <img className="sliderImage" src={"https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} />
                                            }

                                        </div>
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
                </Swiper>
            </Box>

            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                    }}
                >
                    {
                        news?.slice(3)?.map((item, index) => {

                            return (<NewsItem item={item} key={index} />)
                        })
                    }
                </Box>
            </Container>
        </Box>
    )
}


export default Home