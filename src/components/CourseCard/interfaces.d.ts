export interface ICourseCard {
    id: number,
    image: string,
    title: string,
    author: string,
    oldPrice: string,
    currentPrice: string
}

export interface CourseCardProps {
    course: ICourseCard
}