import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { FC } from "react";
import { colors } from "../../theme";


import giftImg from '../../assets/images/gift.png'


interface ICallToActionImage {

    headingText: string,
    descriptionText: string,
    buttonText: string,
    image: string
}

interface ICallToActionImageProps {
    props: ICallToActionImage
}

export const getCallToActionImageData = (): ICallToActionImage => {
    const data: ICallToActionImage = {
        headingText: faker.lorem.lines(1).slice(0, 30),
        descriptionText: faker.lorem.lines(4),
        buttonText: faker.lorem.lines(1).slice(0, 20),
        image: giftImg
    }

    return data
}

const CallToActionImage: FC<ICallToActionImageProps> = ({props}) => {
   return (
      <Box
        bg={colors.gradient}
        p='60px'
        w='100%'
        position='relative'
        overflowX='unset'
      >
        <Container
            maxW={{ base: "calc(100% - 14px)", md: "100%", xl: "1240px" }}
            
        >
            <Flex
                flexDir='column'
                maxW='30%'
                gap='30px'
            >
                <Heading
                >
                    {props.headingText}
                </Heading>

                <Text
                    textAlign='justify'
                >
                    {props.descriptionText}
                </Text>

                <Button
                    w='100%'
                    borderRadius='25px'
                    p='10px 30px'
                    textAlign='center'
                    textTransform='capitalize'
                    color='White'
                    bg={colors.gradient}
                    display={'block'}
                    m='0 auto'
                >
                    {props.buttonText}
                </Button>

            </Flex>
        </Container>

        <Image 
            src={props.image}
            position='absolute'
            bottom='0'
            left='auto%'
            right='50px'
        />

      </Box>
   );
};

export default CallToActionImage
