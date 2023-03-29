import { Box, Flex, Image } from "@chakra-ui/react"
import { faker } from "@faker-js/faker"
import { useEffect, useMemo, useRef, useState } from "react"


interface IScrollAuthorsSettings {

    id: number,
    src: string,
}


const getAuthorsData = (categoriesCount: number): IScrollAuthorsSettings[] => {
    const settings: IScrollAuthorsSettings[] = []
    for (let i = 0; i < categoriesCount; i+=1) {

        settings.push({
            id: i,
            src: faker.image.animals(200, 300)
        })
        
    }

    return settings
}


const reduxAuthorsItems: IScrollAuthorsSettings[] =  getAuthorsData(20)


const AuthorsCarousel = (): JSX.Element => {

    const [state, setState] = useState<{
        isScrolling: boolean, 
        clientX: number, 
        scrollX: number
    }>({
        isScrolling: false, 
        clientX: 0, 
        scrollX: 0
    })

    const [authorsItemsData, setAuthorsItemsData] = useState<IScrollAuthorsSettings[]>([])
    let ref = useRef()

    useEffect( () => {
        setAuthorsItemsData(reduxAuthorsItems)

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

    const authors = useMemo<JSX.Element[]>(
        () => {
            
            return authorsItemsData.map( ai => (

                <Box key={ai.id} h='300px' w='200px' m='0 10px'>
                    <Image w='100%' src={ai.src} alt={`author-${ai.id}`}/>
                </Box>

                
            ))
        },
    [authorsItemsData])

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
            css={{
                '&::-webkit-scrollbar': {
                  width: '0px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '0px',
                }
              }}
        >
            <Flex
                flexWrap='nowrap'
                w='fit-content'
                h='fit-content'
                p='20px 20px 20px 0'

                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                {authors}
            </Flex>
        </Box>

        
    )
}

export default AuthorsCarousel