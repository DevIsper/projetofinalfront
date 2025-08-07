import React from 'react'
import estrela from '../../assets/images/estrela.svg'
import {
    Card,
    ImageContainer,
    Tags,
    Info,
    Title,
    Rating,
    Description,
    Button
} from './styles'

type Props = {
    id: number
    title: string
    rating: number
    description: string
    image: string
    tags: string[]
}

const RestaurantCard = ({ id, title, rating, description, image, tags }: Props) => {
    return (
        <Card>
            <ImageContainer>
                <img src={image} alt={title} />
                <Tags>
                    {tags.map((tag) => (
                        <span key={tag}>
                            {tag}
                        </span>
                    ))}
                </Tags>
            </ImageContainer>

            <Info>
                <Title>{title}</Title>
                <Rating>
                    <span>{rating}</span>
                    <img src={estrela} alt="Estrela de avaliação" />
                </Rating>
            </Info>

            <Description>{description}</Description>

            <Button to={`/restaurant/${id}`}>Saiba mais</Button>
        </Card>
    )
}

export default RestaurantCard