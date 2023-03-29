import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, IconButton, SimpleGrid } from "@chakra-ui/react"
import { FC, useMemo, useState } from "react";
import CourseCard from "../CourseCard/Card";


interface ISliderSettings {

    currentSlide: number,
    howSlidesShow: number,
    slidesCount: number,
    children: JSX.Element[]
}

interface ISliderSettingsProps {
    settings: ISliderSettings
}


const CourseCarousel: FC<ISliderSettingsProps> = ({settings}) => {


    const courses = useMemo<JSX.Element[]>(
        () => {
            const slides: JSX.Element[] = []
            settings.children.forEach((course, index) => {
                
                if (index >= settings.currentSlide && 
                    index < settings.currentSlide + settings.howSlidesShow
                ) {
                    slides.push(course)
                }
            })

            return slides
        }, 
    [settings])

    const [currentSlides, setCurrentSlides] = useState<JSX.Element[]>([])



    return (
        <Box
            position='relative'
            w='100%'
            h='100%'
            minH='48px'
        >
            <Flex
                position='absolute'
                w='100%'
                top='15%'
                justifyContent='space-between'
            >   
                <IconButton
                    aria-label="prev"
                    h='48px'
                    w='48px'
                    ml='-24px'
                    zIndex='10'
                    borderRadius='50%'
                    color='blue.300'
                    icon={<ChevronLeftIcon fontSize='24px' />}
                />

                <IconButton
                    aria-label="next"
                    h='48px'
                    w='48px'
                    mr='-24px'
                    zIndex='10'
                    borderRadius='50%'
                    color='blue.300'
                    icon={<ChevronRightIcon fontSize='24px' />}
                />

            </Flex>


            <Grid 
                templateColumns={`repeat(${settings.howSlidesShow}, 1fr)`} 
                templateRows='1fr'
                gap={6}
            >
                {courses}
            </Grid>

        </Box>
    )
}

export default CourseCarousel