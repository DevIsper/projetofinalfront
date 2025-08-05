import React from 'react'
import estrela from '../../assets/images/estrela.svg'
import {
    Card,
    Image,
    Title,
    Rating,
    Description,
    Button, Tags
} from './styles'

type Props = {
    title: string
    rating: number
    description: string
    image: string
    tags: string[]
}

const RestaurantCard = ({ title, rating, description, image, tags }: Props) => {
    return (
        <Card>
            <Image src={image} alt={title}/>

            <div>{tags.map((tag) => (
                <Tags>
                    {tag}
                </Tags>
            ))}</div>

            <Title>{title}</Title>
            <Rating>
                {rating} <img src={estrela} alt="estrela"/>
            </Rating>
            <Description>{description}</Description>
            <Button href="#">Saiba mais</Button>
        </Card>
    )
}

export default RestaurantCard