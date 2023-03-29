import Header from "../components/Header/Header";
import { Box, Container, Flex} from "@chakra-ui/react";
import LendingStart from "../sections/LandingStart/LandingStart";
import PopularCourses from "../sections/PopularCourses/PopularCourses";
import { useEffect, useRef, useState } from "react";
import CoursesByCategories from "../sections/PopularCourses/CoursesByCategories";
import AuthorsCarousel from "../sections/Authors/AuthorsCarousel";
import CallToActionWithAnnotation from "../sections/Authors/GetStarted";
import Features from "../sections/LandingStart/Features";
import BasicStatistics from "../sections/LandingStart/BasicStatistics";
import ReviewsLending from "../sections/Reviews/ReviewsLending";
import CallToActionImage, { getCallToActionImageData } from "../sections/Actions/CallToActionImage";
import { colors } from "../theme";
import Footer from "../sections/Footer/Footer";
import FAQ from "../sections/FAQ/FAQ";





function Home(): JSX.Element {

    const [headingHeight, setHeadingHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        // @ts-ignore
        setHeadingHeight(ref.current.clientHeight)
        console.log(headingHeight)
        
      })

    return (
        <Box
            height='100%'
            display='flex'
            flexDir='column'
        >
            <Box ref={ref}>
                <Header />
            </Box>

            


            <Box
                flex='1 0'
            >
                <LendingStart height={`${headingHeight}px`}/>

                
                <Container
                    maxW={{base: 'calc(100% - 14px)', md: '100%', xl: '1240px'}}
                >
                    <PopularCourses/>

                    <PopularCourses/>

                    <CoursesByCategories/>

                    <CallToActionWithAnnotation/>

                    <Box mt='-450px' mb='450px' position='relative'>
                        <Box 
                            position='absolute'
                            maxW='100vw'
                            left={{
                                base: '',
                                md: '-20px',
                                xl: 'calc((100vw - 1240px) / 2 *-1 - 30px)'
                            }}
                            bg='#fff'
                        >
                            <AuthorsCarousel/>
                        </Box>
                        
                    </Box>

                    <Features/>

                </Container>

                <Box my='120px'>
                    <CallToActionImage props={getCallToActionImageData()}/>
                </Box>

                <Container
                    maxW={{base: 'calc(100% - 14px)', md: '100%', xl: '1240px'}}
                >

                    <Box
                        my='120px'
                    >
                        <BasicStatistics/>
                    </Box>
                    
                    <Flex>

                        <ReviewsLending/>

                        <Box
                            p='10% 0px'
                            display='flex'
                            flexDir='column'
                            justifyContent='center'
                        >
                            <Box w='10px' h='30%' bg='gray.200' borderRadius='5px'/>
                            <Box m='10px 0' w='10px' h='30%'  bg='gray.200' borderRadius='5px'/>
                            <Box w='10px' h='30%' bg={colors.control} borderRadius='5px'/>
                        </Box>

                    </Flex>
                    
                    <Box
                        my='100px'
                        display='flex'
                        justifyContent='flex-start'
                        maxW='80%'
                    >
                        <FAQ/>
                    </Box>

                </Container>
                

            </Box>

            <Footer/>

            
        </Box>
    )
}

export default Home
