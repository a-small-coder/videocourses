import { Box, Button, Flex, Image } from "@chakra-ui/react"
import { faker } from "@faker-js/faker"
import { FC } from "react"
import BlockWithGradient from "../../components/TextBlocks/BlockWithGradient"
import { IBlockWithGradient } from "../../components/TextBlocks/interfaces"
import { colors } from "../../theme"

import mainBg from './../../assets/images/mainBgBallet.png'


const getMainActionCallData = (): IBlockWithGradient => (
    {
        title: faker.lorem.lines(1),
        description: faker.lorem.lines(3)
    }
)


const LendingStart: FC<{height: string}> = (props): JSX.Element => {

    const textPreviewData: IBlockWithGradient = getMainActionCallData()

    return (
        <Box
            height={`calc(100vh - ${props.height})`}
            w='100%'
            flex='1 0'
            display='flex'
            justifyContent='flex-end'
            position='relative'
        >

            <Image 
                src={mainBg}
                maxH={`calc(100vh - ${props.height})`}
                w='100%'
                position='absolute'
                zIndex='5'
            />
            <Box 
                
                maxW='60%'
                height='100%'
                zIndex='10'
            >
                <Flex
                    w='100%'
                    height='100%'
                    flexDir='column'
                    justifyContent='center'
                >
                    <Box maxW='700px' mr='100px'>
                        <BlockWithGradient gradient={textPreviewData}/>

                        <Button
                            minW={{base: '120px', lg:'200px', xl:'240px'}}
                            borderRadius='25px'
                            p='10px 30px'
                            textAlign='center'
                            textTransform='capitalize'
                            color='White'
                            bg={colors.gradient}
                            display={'block'}
                            m='0 auto'
                        >
                            Login
                        </Button>
                    </Box>
                    
                </Flex>
                
            </Box>
            
        </Box>
    )
}

export default LendingStart