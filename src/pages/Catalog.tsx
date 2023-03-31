import { Box, Container, Flex, Heading } from "@chakra-ui/react"
import { faker } from "@faker-js/faker"
import { useEffect, useRef, useState } from "react"
import BigCard from "../components/CourseCard/BigCard"
import { ICourseCard } from "../components/CourseCard/interfaces"
import getCardsData from "../components/CourseCard/utils"
import Header from "../components/Header/Header"
import { ISimpleMenuItem } from "../components/Menu/SimpeMenuItem"
import SimpleMenu from "../components/Menu/SimpleMenu"
import CallToActionImage, { getCallToActionImageData } from "../sections/Actions/CallToActionImage"
import Footer from "../sections/Footer/Footer"
import PopularCourses from "../sections/PopularCourses/PopularCourses"


const getCatalogCategories = (): ISimpleMenuItem[] => {

    const data: ISimpleMenuItem[] = []

    const handleClick = (currentItemid: number): void => {
        console.log(currentItemid)
    }

    for (let i = 0; i < 25; i++) {
        data.push({
            id: i,
            text: faker.lorem.lines(1).slice(0, 20),
            link: faker.lorem.lines(1).slice(0, 20),
            handleClick
        })
        
    }

    return data
}




const CatalogPage = (): JSX.Element => {

    const [headingHeight, setHeadingHeight] = useState(0)

    const [bigCourse, setBigCourse] = useState<ICourseCard[]>([])

    const [menuCategories, setMenuCategories] = useState<ISimpleMenuItem[]>([])

    useEffect(() => {
        setMenuCategories(getCatalogCategories())
        setBigCourse(getCardsData(1))
    }, [setMenuCategories])

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
                display='flex'
                flexDir='column'
                flex='1 0'
            >
                <Container maxW={{base: 'calc(100% - 14px)', md: '100%', xl: '1240px'}}>

                    <Flex
                        flexDir='column'
                        my='60px'
                    >
                        <Heading as='h2' fontSize='26'>
                            menu heading
                        </Heading>

                        <SimpleMenu menuData={menuCategories}/>
                    </Flex>

                    <Box my='120px'>
                        <CallToActionImage props={getCallToActionImageData()}/>
                    </Box>

                    <PopularCourses/>

                    { bigCourse.length > 0 ? (
                        <BigCard course={bigCourse[0]}/>
                    ) : null
                    }

                    <PopularCourses/>

                </Container>

            </Box>

            <Footer/>

            
        </Box>
    )
}

export default CatalogPage