import { Box, Button, Text } from "@chakra-ui/react"
import { FC } from "react"


export interface ISimpleMenuItem {
    id: number,
    text: string,
    link: string,
    handleClick: (currentMenuIteIid: number) => void
}

const SimpleMenuItem: FC<ISimpleMenuItem> = (props): JSX.Element => {

    return (
        <Box
                whiteSpace='nowrap'
                p='10px 20px'
                textTransform='capitalize'
                color={'black'}
                bg='none'
                textDecor='underline'
                cursor='pointer'
                onClick={() => {props.handleClick(props.id)}}
                _active={{bg:'inherit'}}
                _focus={{bg:'inherit'}}
                _hover={{bg: 'inherit', color: 'blue.300', textDecor:'none'}}

            >
                <Text
                    fontSize='16px'
                >
                    {props.text}
                </Text>

            </Box>
    )
}

export default SimpleMenuItem