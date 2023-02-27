import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Link } from '@mui/material';
import "./slider.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function Slider({ news }) {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = news ? news.slice(0, 3).length : 3


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ paddingX: { xs: "20px", sm: "40px", md: "50px" } }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {news?.slice(0, 3).map((step, index) => (
                    <Box key={index}
                        sx={{
                            height: "100%"
                        }}
                    >
                        {Math.abs(activeStep - index) <= 2 ? (

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    gap: "10px",
                                    height: "100%",
                                    backgroundColor: "#f2f2f2"
                                }}
                            >
                                <Box sx={{ width: { xs: "100%", sm: "50%" }, height: "100%" }}>
                                    {
                                        step?.urlToImage ?
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    objectPosition: "center"
                                                }} src={step?.urlToImage} />

                                            :
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    objectPosition: "center"
                                                }}
                                                src={"https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} />
                                    }
                                </Box>
                                <Box sx={{ width: { xs: "100%", sm: "50%" }, height: "100%", display: "flex", flexDirection: "column", gap: "40px", }}>
                                    <div>
                                        <p>Source Of News: <b>{step?.author ? step.author : "Unknown"}</b></p>
                                        <h3>{step?.title}</h3>
                                    </div>
                                    <Typography sx={{ fontSize: { sx: "12px", lg: "20px" } }}> {step?.content ?? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati veniam soluta, repellendus explicabo fuga neque porro, perspiciatis architecto tempore iure consequuntur omnis, non a illo facilis in quo incidunt magni sint aut voluptatem. Sint inventore deserunt harum eligendi incidunt."}</Typography>

                                    <Link href={step?.url}
                                        sx={{
                                            textDecoration: "none",
                                            color: "black",
                                            backgroundColor: "#999",
                                            padding: "5px",
                                            borderRadius: "10px",
                                            width: "200px",
                                            '&:hover': {
                                                transform: 'scale(1.01)',
                                                boxShadow: '5px 5px 20px 2px #bbb',
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: { sx: "12px", sm: "18px" },
                                                textAlign: "center",
                                                color: "white",
                                            }}>Show more details...</Typography>
                                    </Link>

                                </Box>
                            </Box>

                        ) : null}
                    </Box>
                ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />

        </Box>
    );
}

export default Slider;