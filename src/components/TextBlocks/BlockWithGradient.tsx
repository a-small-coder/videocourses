import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import { FC } from "react";
import { colors } from "../../theme";
import { IBlockWithGradientProps } from "./interfaces";



const BlockWithGradient: FC<IBlockWithGradientProps>  = ({gradient}) => {

    return (
        <Box
            display='flex'
            p='10px'
            minH='400px'
            minW='600px'
            gap='30px'
        >
            <Flex
                flexDir='column'
                gap='30px'
            >
                <Text
                    fontSize='48px'
                    bgGradient={colors.gradient}
                    bgClip='text'
                >
                    {gradient.title}
                </Text>

                <Text
                    fontSize='20px'
                    // bgGradient='linear-gradient(to-l, #6AFBDE, #FDDF34)'
                    color='#000'
                    // bgClip='text'
                >
                    {gradient.description}
                </Text>

                

            </Flex>

            <Box>
                <Box w='10px' h='30%' bg={colors.control} borderRadius='5px'/>
                <Box m='10px 0' w='10px' h='30%'  bg='gray.200' borderRadius='5px'/>
                <Box w='10px' h='30%' bg='gray.200' borderRadius='5px'/>
            </Box>

        </Box>
    )
}

export default BlockWithGradient