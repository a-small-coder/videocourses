import { Box, Flex } from "@chakra-ui/react"
import { FC } from "react"
import SimpleMenuItem, { ISimpleMenuItem } from "./SimpeMenuItem"


interface ISimpleMenuProps {
    menuData: ISimpleMenuItem[]
}

const SimpleMenu: FC<ISimpleMenuProps> = (props): JSX.Element => {


    return (
        <Box>
            <Flex
                flexWrap='wrap'
                justifyContent='flex-start'
                alignItems='center'
                p='20px 0'
                ml='-20px'
            >

            
            {props.menuData.map( mi => (
                <SimpleMenuItem 
                    key={mi.id} 
                    id={mi.id} 
                    text={mi.text} 
                    link={mi.link} 
                    handleClick={mi.handleClick}
                />
            ))}
            </Flex>
        </Box>
    )
}

export default SimpleMenu