import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Card, CardBody, CardFooter, Divider, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { CourseCardProps } from './interfaces'


const BigCard: FunctionComponent<CourseCardProps> = ({course}) =>{
    
    const navigate = useNavigate()

    const onGoToCourseClick = () => {
        navigate(`/course/${course.id}`)
    }

    return (
        <Card 
            maxW='xl' 
            borderRadius='25px' 
            p='0' 
            bg='#ffffff'
            position='relative'
        > 
            <Box position='absolute' h='100%' w='100%'>
                <Link to={`/course/${course.id}`}>
                    <Box h='100%' w='100%'/>
                </Link>
            </Box>
            
            <CardBody p='0'>
                <Image 
                    src={course.image} 
                    alt={`course-${course.id}`}
                    borderRadius='25px'
                    w='100%'
                />
                <Box
                    position='relative'
                    pb='15px'
                >
                    <Box h='25px' mt='-25px' bg='#ffffff'/>
                    <Text
                        fontSize='16px'
                        fontWeight='bold'
                        color='#000'
                        p='10px 20px'
                    >
                        {course.title}
                    </Text>

                    <Text
                        fontSize='14px'
                        color='gray'
                        p='10px 20px'
                    >
                        {course.author}
                    </Text>
                </Box>
                
            </CardBody>

            <Divider border='1 px dashed gray'/>

            <CardFooter>
                <Flex
                    justifyContent='space-between'
                    w='100%'
                >
                    <Flex
                        alignItems='center'
                    >
                        <Text
                            fontSize='14px'
                            color='gray'
                            textDecor='line-through'
                            p='5px'
                        >
                            {course.oldPrice} ₽
                        </Text>

                        <Text
                            fontSize='18px'
                            fontWeight='bold'
                            color='#000'
                            
                            p='5px'
                        >
                            {course.currentPrice} ₽
                        </Text>
                    </Flex>

                    <IconButton
                        icon={<ArrowForwardIcon h='28px' w='28px'/>}
                        borderRadius='50%'
                        p='5px'
                        bg='#ffffff'
                        boxShadow='0px 4px 20px rgba(117, 117, 117, 0.1)'
                        aria-label='next'
                        onClick={onGoToCourseClick}
                    />

                </Flex>
            </CardFooter>
            
        </Card>
    )
}

export default BigCard