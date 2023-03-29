import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { faker } from "@faker-js/faker"
import { FC, useEffect, useMemo, useRef, useState } from "react"


interface IScrollMenuItemSettings {

    id: number,
    text: string,
    categoryLink: string,
    isActive: boolean
}


const getMenuItemsData = (categoriesCount: number): IScrollMenuItemSettings[] => {
    const settings: IScrollMenuItemSettings[] = []
    for (let i = 0; i < categoriesCount; i+=1) {

        settings.push({
            id: i,
            text: faker.commerce.productName(),
            categoryLink: `category-${i}`,
            isActive: i === 0 ? true : false
        })
        
    }

    return settings
}

// const getMenuItemDataById = (id: number): IScrollMenuItemSettings => {

//     const menuItem: IScrollMenuItemSettings = reduxMenuItems.filter((mi) => (mi.id === id))[0]

//     return menuItem
// }

// const getAllWithoutMenuItemDataById = (id: number): IScrollMenuItemSettings[] => {

//     const menuItems: IScrollMenuItemSettings[] = reduxMenuItems.filter((mi) => (mi.id !== id))

//     return menuItems
// }


const reduxMenuItems: IScrollMenuItemSettings[] =  getMenuItemsData(10)


const DragScroll = (): JSX.Element => {

    const [state, setState] = useState<{
        isScrolling: boolean, 
        clientX: number, 
        scrollX: number
    }>({
        isScrolling: false, 
        clientX: 0, 
        scrollX: 0
    })
    const [menuItemsData, setMenuItemsData] = useState<IScrollMenuItemSettings[]>([])
    let ref = useRef()

    useEffect( () => {
        setMenuItemsData(reduxMenuItems)

        const el = ref.current
        if (el) {
            const onWheel = (e: any) => {
                e.preventDefault()
                //@ts-ignore
                el.scrollTo({
                    //@ts-ignore
                    left: el.scrollLeft + e.deltaY * 4,
                    behavior: 'smooth'
                })
            }
            //@ts-ignore
            el.addEventListener('wheel', onWheel)
            //@ts-ignore
            return () => el.removeEventListener('wheel', onWheel)
        }
    }, [])

    const handleClick = (currentMIId: number) => {
        const newMenuItems = menuItemsData.map( mi => {
            if (mi.id === currentMIId) return {...mi, isActive: true}
            return {...mi, isActive: false}
        })
        setMenuItemsData(newMenuItems)
    }

    const menuItems = useMemo<JSX.Element[]>(
        () => {
            
            return menuItemsData.map( mi => (
                <ScrollItem key={mi.id} props={{menuItem:mi, handleClick}}/>
            ))
        },
    [menuItemsData])

    const onMouseDown = (e: any) => {
        // @ts-ignore
        if (ref && ref.current && !ref.current.contains(e.target)){
            return
        }
        e.preventDefault()
        setState({
            ...state,
            isScrolling: true, 
            clientX: e.clientX,
        })
    }

    const onMouseUp = (e: any) => {
        // @ts-ignore
        if (ref && ref.current && !ref.current.contains(e.target)){
            return
        }
        e.preventDefault()
        setState({
            ...state,
            isScrolling: false,
        })
    }

    const onMouseMove = (e: any) => {
        // @ts-ignore
        if (ref && ref.current && !ref.current.contains(e.target)){
            return
        }
        e.preventDefault()

        const {clientX, scrollX, isScrolling} = state

        if (isScrolling){
            // @ts-ignore
            ref.current.scrollLeft = scrollX + e.clientX - clientX
            setState({
                ...state,
                clientX: e.clientX,
                scrollX: scrollX + e.clientX - clientX
            })
        }
    }

    useEffect(()=> {
        document.addEventListener('mousedown', onMouseDown)
        document.addEventListener('mouseup', onMouseUp)
        document.addEventListener('mousemove', onMouseMove)

        return () => {
            document.removeEventListener('mousedown', onMouseDown)
            document.removeEventListener('mouseup', onMouseUp)
            document.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (

        <Box
            w='100%'
            overflowX='scroll'
             // @ts-ignore
            ref={ref}
            
            // scrollSnapType=' inline mandatory'
            // overscrollBehaviorX='contain'
            cursor='move'
            css={{
                '&::-webkit-scrollbar': {
                  width: '2px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                }
              }}
        >
            <Flex
                flexWrap='nowrap'
                p='20px 20px 20px 0'
                w='fit-content'
                
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                {menuItems}
            </Flex>
                
        </Box>

        
    )
}


interface IScrollItem {
    menuItem: IScrollMenuItemSettings,
    handleClick: (currentMenuIteIid: number) => void
}

interface IScrollItemProps {
    props: IScrollItem
}

const ScrollItem: FC<IScrollItemProps> = ({props}): JSX.Element => {

    return (
        <Box>
        <Button
                whiteSpace='nowrap'
                p='20px 25px'
                textTransform='capitalize'
                color={props.menuItem.isActive ? 'blue.300': 'gray.300'}
                bg='inherit'
                display='inline-flex'
                flexDir='column'
                onClick={() => {props.handleClick(props.menuItem.id)}}
                position='relative'
                h='100%'
                w='100%'
                _active={{bg:'inherit'}}
                _focus={{bg:'inherit'}}
                _hover={{bg: 'inherit', color: 'blue.300'}}

            >
                <Text>
                    {props.menuItem.text}
                </Text>

                <Box
                    border='1px solid'
                    bg={props.menuItem.isActive ? 'blue.300': 'gray.300'}
                    w='calc(100% + 50px)'
                    m='30px 0px 0px 20px'
                />

            </Button>

            </Box>
    )
}

export default DragScroll