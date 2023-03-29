import { faker } from "@faker-js/faker";
import { ICourseCard } from "./interfaces";

const getCardsData = (count: number): ICourseCard[] => {

    const cardsData: ICourseCard[] = []

    for (let i = 0; i < count; i++) {
        const element = cardsData.push(
            {
                id: i+1,
                image: faker.image.animals(340, 200),
                title: faker.lorem.lines(1),
                author: faker.name.fullName(),
                oldPrice: faker.commerce.price(4000, 5000, 0),
                currentPrice: faker.commerce.price(2000, 4000, 0),
            }
        );
    }

    return cardsData
}

export default getCardsData