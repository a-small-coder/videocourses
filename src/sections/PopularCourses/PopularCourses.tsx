import { Box, Heading } from "@chakra-ui/react"
import { faker } from "@faker-js/faker"
import { useEffect, useMemo, useState } from "react"
import CourseCard from "../../components/CourseCard/Card"
import { ICourseCard } from "../../components/CourseCard/interfaces"
import getCardsData from "../../components/CourseCard/utils"
import CourseCarousel from "../../components/CourseCarousel/CourseCarousel"


const PopularCourses = (): JSX.Element => {

    useEffect(() => {
        // get by category
        setCardsData(getCardsData(10))
    }, [])

    const [cardsData, setCardsData ] = useState<ICourseCard[]>([])

    const courses = useMemo<JSX.Element[]>(
        () => cardsData.map(cd => (
            <CourseCard key={`course-${cd.id}`} course={cd}/>
        )), 
    [cardsData])

    const settings = {
        currentSlide: 1,
        howSlidesShow: 5,
        slidesCount: courses.length,
        children: courses
    }

    const heading = faker.lorem.lines(1)

    return (
        <Box
            w='100%'
            h='100%'
            display='flex'
            flexDir='column'
            p='40px 0'
        >
            <Heading as='h3' fontSize='24px' mb='30px'>
                {heading}
            </Heading>
            <CourseCarousel settings={settings}/>
        </Box>

    )
}

export default PopularCourses