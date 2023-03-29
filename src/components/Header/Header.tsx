import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Heading, IconButton, Input, InputGroup, InputLeftAddon, InputRightAddon, InputRightElement } from "@chakra-ui/react";
import { Formik, FormikProps } from "formik";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function Header(): JSX.Element {


    const menuItems = headerData.map( hd => (
        <HeaderMenuItem key={hd.id} {...hd}/>
    ))

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
                        />

                    </Flex>
                </Flex>
            </Container>
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

export default Header