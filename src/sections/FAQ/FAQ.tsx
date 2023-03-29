import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import { faker } from "@faker-js/faker"
import { FC, useEffect, useMemo, useState } from "react"

interface IAccordionItemData {
    title: string,
    text: string
}

interface IAccordionData extends IAccordionItemData{
    id: number
}

interface IMyAccordionItemProps {
    props: IAccordionItemData
}


const MyAccordionItem: FC<IMyAccordionItemProps> = ({props}): JSX.Element => {

    return (
        <AccordionItem p='10px 0'>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                    {props.title}
                </Box>
                <AccordionIcon ml='15px' />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {props.text}
            </AccordionPanel>
        </AccordionItem>
    )
}

const getFAQData = (): IAccordionData[] => {

    const accordionData:IAccordionData[]  = []

    for (let i = 0; i < 10; i++) {
        accordionData.push({
            id: i,
            title: faker.lorem.lines(2),
            text: faker.lorem.lines(4)
        })
        
    }

    return accordionData
}

const FAQ = (): JSX.Element => {

    const [state, setState] = useState<IAccordionData[]>([])

    useEffect(() => {
        setState(getFAQData())
    }, [])

    const accordions = useMemo<JSX.Element[]>(
        () => {
            
            return state.map( ai => (
                <MyAccordionItem key={ai.id} props={{title: ai.title, text: ai.text}}/>
            ))
        },
    [state])

    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            {accordions}
        </Accordion>
    )
}

export default FAQ