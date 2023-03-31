import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Input, InputGroup, InputRightElement, Text, useDisclosure, Icon } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { Formik, FormikProps } from "formik";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";


function Header(): JSX.Element {

    const [isAuth, setIsAuth] = useState(false)

    const [state, setState] = useState<ISideMenuItem[]>([])

    useEffect(() => {
        setState(getSideMenuData())
    }, [setState])

    const sideMenuItems = state.map( smi => (
        <SideMenuItem key={smi.id} link={smi.link} text={smi.text}/>
    ))

    const menuItems = headerData.map( hd => (
        <HeaderMenuItem key={hd.id} {...hd}/>
    ))

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box
            p='10px'
            boxShadow='0px 4px 20px rgba(117, 117, 117, 0.1)'
            minW='100%'
            marginBottom='3px'
        >
            
            <Container
                maxW={{base: 'calc(100% - 14px)', md: '100%', xl: '1240px'}}
            > 
                <Flex
                    alignItems='center'
                    w='100%'
                    gap={{base: '5px', md: '30px'}}
                    justifyContent={{base: 'space-between', md: 'center'}}
                >
                    <Box
                        display={{base: 'block', md: 'none'}}
                    >
                        <IconButton
                            icon={<SearchIcon w='26x' h='26px'/>}
                            aria-label="search"
                            type="submit"
                            bg='inherit'
                        />
                    </Box>

                    <Logo/>

                    <Flex
                        justifySelf='flex-start'
                        alignItems='center'
                        flex='1'
                        p='0 15px'
                        display={{base: 'none', md:'flex'}}
                    >
                        {menuItems}

                        <Box
                            ml='45px'
                        >
                            <Search/>
                        </Box>
                        
                    </Flex>


                    <Flex
                        justifySelf='flex-end'
                        alignItems='center'
                        gap={{base: '0', md: '20px'}}
                    >
                        <Button
                            minW={{base: '120px', lg:'200px', xl:'240px'}}
                            borderRadius='25px'
                            p='10px 30px'
                            textAlign='center'
                            textTransform='capitalize'
                            color='White'
                            bg='linear-gradient(94.23deg, #FDF59E -4.24%, #EE9EA4 50.22%, #9389BE 105.83%);'
                            display={{base: 'none', lg: 'block'}}
                        >
                            Login
                        </Button>
                        
                        <IconButton
                            aria-label='Options'
                            icon={<HamburgerIcon/>}
                            variant='outline'
                            size='lg'
                            borderRadius='15px'
                            onClick={onOpen}
                        />

                    </Flex>
                </Flex>
            </Container>
            <SideMenu isOpen={isOpen} onClose={onClose}>

                <Flex
                    flexDir='column'
                    height='100%'
                >
                    { isAuth ? (
                            <Box
                                mb='20px'
                            >
                                <SideMenuItem link='/login' text='вход в личный кабинет'/>
                                <Divider/>
                                <SideMenuItem link='/login' text='вход в личный кабинет'/>
                                <Divider/>
                                <SideMenuItem link='/login' text='вход в личный кабинет'/>
                                <Divider/>
                                
                            </Box>
                            ) : null
                        }
                    <Box flex='1 0' mb='20px'>
                        {sideMenuItems}
                    </Box>
                    <Divider/>
                        { !isAuth ? (
                            <>
                                <SideMenuItem link='/login' text='вход в личный кабинет'/>
                                <Divider/>
                            </>
                            ) : null
                        }
                    <Flex
                        flexDir='column'
                        pb='10px'
                    >
                        <Flex
                            gap='10px'
                            p='15px 0'
                        >
                            <Link to='/instagram'>
                                <Icon 
                                    as={FaInstagram}
                                    w='32px'
                                    h='32px'
                                    _hover={{color: 'blue.300'}}
                                />
                            </Link>
                            
                            <Link to='/telegram'>
                                <Icon 
                                    as={FaTelegramPlane}
                                    w='32px'
                                    h='32px'
                                    _hover={{color: 'blue.300'}}
                                />
                            </Link>
                            
                        </Flex>
                        <Text
                            fontWeight='bold'
                            mb='7px'
                        >
                            связаться с нами:
                        </Text>
                        <Link to='/feedback'>
                            <Text
                                fontSize='14px'
                                textDecor='underline'
                                _hover={{textDecor: 'none'}}
                            >
                                hello@mail.ru
                            </Text>
                        </Link>
                    </Flex>
                </Flex>
                
            </SideMenu>
        </Box>
    )
}

function Logo(): JSX.Element {
    return (
        <Box p={{base: '0px', sm: '10px'}}>
            <Heading 
                as='h1' 
                fontSize={{base: '30px', sm: '30px', md:'40px'}}
                fontWeight='bold' 
                color='#000'
            >
                MY LOGO
            </Heading>
        </Box>
    )
}

type SearchValues = {
    search: string
}

function Search(): JSX.Element {

    return (
        <Box>
            <Formik
                initialValues={{ search: ""}}
                onSubmit={console.log}
            >
                {(props: FormikProps<SearchValues>) => (
                <form onSubmit={props.handleSubmit}>
                    <Flex>
                    <InputGroup>
                        
                        <Input 
                            type='text' 
                            variant='filled' 
                            name='search' 
                            placeholder='search'
                            borderRadius='15px'
                        />
                        <InputRightElement children={
                            <IconButton
                                icon={<SearchIcon/>}
                                aria-label="search"
                                type="submit"
                            />}
                        />
                        
                    </InputGroup>
                    </Flex>
                    
                </form>
                )}
            </Formik>
        </Box>
    )
}

interface HeaderCategories {
    id: number,
    title: string,
    relativeHref: string,
}

const headerData: HeaderCategories[] = [
    {
        id: 1,
        title: 'catalog',
        relativeHref: 'catalog'
    }
]

function HeaderMenuItem({id, title, relativeHref}: HeaderCategories): JSX.Element {

    return (
        <Box>
            <Link
                to={`${relativeHref}`}
            >
                <Flex
                    justifyContent='center'
                    alignItems='center'
                    color='black'
                    _hover={{
                        textDecoration:'underline', 
                        cursor: 'pointer'
                    }}
                >
                    {title}
                </Flex>
            </Link>
        </Box>
    )
}

interface SideMenuProps extends PropsWithChildren{
    onClose: ()=>void, 
    isOpen: boolean,
}

// type PropsWithChildren<SideMenuProps> = SideMenuProps & { children?: ReactNode };

const SideMenu: FC<SideMenuProps> = (props): JSX.Element => {

    return (
        <Drawer onClose={props.onClose} isOpen={props.isOpen} size={'sm'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex
                justifyContent='center'
                alignItems='center'
            >
                <Link to='profile'>
                    <Flex
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Avatar
                            src="https://i.pravatar.cc/300"
                            size="md"
                            mr='15px'
                        />
                    
                        <Text
                            fontSize='14px'
                            _hover={{textDecor: 'underline'}}
                        >
                            user-profile@mail.ru
                        </Text>
                    </Flex>
                </Link>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            {props.children}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
}

interface ISideMenuItemProps {
    link: string,
    text: string
}

interface ISideMenuItem extends ISideMenuItemProps {
    id: number
}

const getSideMenuData = (): ISideMenuItem[] => {

    const sideMenuData: ISideMenuItem[] = []

    for (let i = 0; i < 5; i++) {
        sideMenuData.push({
            id: i,
            link: faker.lorem.lines(1).slice(0, 10),
            text: faker.lorem.lines(1).slice(0, 10)
        })
        
    }

    return sideMenuData
}



const SideMenuItem: FC<ISideMenuItemProps> = (props): JSX.Element => {

    return (
        <Link to={props.link}>
        <Flex
                p='15px 25px'
                borderRadius='15px'
                my='10px'
                textTransform='capitalize'
                color='black'
                bg='white'
                w='100%'
                _hover={{bg: 'blue.300', color: 'white'}}
                fontSize='18px'
            >
                {props.text}

            </Flex>

            </Link>
    )
}

export default Header