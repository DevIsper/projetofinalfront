import React from 'react'
import { List, Grid } from './styles'
import RestauranteCard from "../RestauranteCard";

const mockRestaurants = [
    {
        id: 1,
        title: 'Hioki Sushi',
        rating: 4.9,
        description: 'Biscoito ou bolacha? A primeira vista podem parecer a mesma coisa, mas a forma de se apreciar o sabor de cada uma se diferencia... leia mais',
        image: '/image1.png'
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        rating: 4.6,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e o melhor... leia mais',
        image: '/image1.png'
    },
    {
        id: 3,
        title: 'La Dolce Vita Trattoria',
        rating: 4.6,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e o melhor... leia mais',
        image: '/image2.png'
    },
    {
        id: 4,
        title: 'Hioki Sushi',
        rating: 4.9,
        description: 'Biscoito ou bolacha? A primeira vista podem parecer a mesma coisa, mas a forma de se apreciar o sabor de cada uma se diferencia... leia mais',
        image: '/image2.png'
    }
]

const RestaurantsList = () => {
    return (
        <List>
            <Grid>
                {mockRestaurants.map((restaurant) => (
                    <RestauranteCard
                        key={restaurant.id}
                        title={restaurant.title}
                        rating={restaurant.rating}
                        description={restaurant.description}
                        image={restaurant.image}
                    />
                ))}
            </Grid>
        </List>
    )
}

export default RestaurantsList