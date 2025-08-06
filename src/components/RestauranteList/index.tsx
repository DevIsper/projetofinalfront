import React from 'react'
import { List, Grid } from './styles'
import RestauranteCard from "../RestauranteCard";

const mockRestaurants = [
    {
        id: 1,
        title: 'Hioki Sushi',
        rating: 4.9,
        description: 'Biscoito ou bolacha? A primeira vista podem parecer a mesma coisa, mas a forma de se apreciar o sabor de cada uma se diferencia...',
        image: '/image1.png',
        tags: ['Destaque da Semana', 'Japonesa']
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        rating: 4.6,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e o melhor...',
        image: '/image1.png',
        tags: ['Italiana']
    },
    {
        id: 3,
        title: 'La Dolce Vita Trattoria',
        rating: 4.6,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e o melhor...',
        image: '/image2.png',
        tags: ['Italiana']
    },
    {
        id: 4,
        title: 'Hioki Sushi',
        rating: 4.9,
        description: 'Biscoito ou bolacha? A primeira vista podem parecer a mesma coisa, mas a forma de se apreciar o sabor de cada uma se diferencia...',
        image: '/image2.png',
        tags: ['Italiana']
    }
]

const RestaurantsList = () => {
    return (
        <List>
            <Grid>
                {mockRestaurants.map((restaurant) => (
                    <RestauranteCard
                        key={restaurant.id}
                        id={restaurant.id}
                        title={restaurant.title}
                        rating={restaurant.rating}
                        description={restaurant.description}
                        image={restaurant.image}
                        tags={restaurant.tags}
                    />
                ))}
            </Grid>
        </List>
    )
}

export default RestaurantsList