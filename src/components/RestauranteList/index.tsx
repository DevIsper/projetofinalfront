import React, { useEffect, useState } from 'react';
import { List, Grid } from './styles';
import RestauranteCard from "../RestauranteCard";
import type { Restaurante } from "../../types/types.ts";
import { carregarRestaurantes } from "../../store/reducers/restauranteSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import type {RootState} from '../../store';

const RestaurantsList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes`)
            .then(res => res.json())
            .then((data: Restaurante[]) => {
                dispatch(carregarRestaurantes(data));
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar dados do restaurante:", error);
                setIsLoading(false);
            });
    }, [dispatch]);

    const restaurantes = useSelector((state: RootState) => state.restaurantes.itens);

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    if (!restaurantes || restaurantes.length === 0) {
        return <p>Nenhum restaurante encontrado.</p>;
    }

    return (
        <List>
            <Grid>
                {restaurantes.map((restaurante) => (
                    <RestauranteCard
                        key={restaurante.id}
                        id={restaurante.id}
                        title={restaurante.titulo}
                        rating={restaurante.avaliacao}
                        description={restaurante.descricao}
                        image={restaurante.capa}
                        tags={[restaurante.tipo]}
                    />
                ))}
            </Grid>
        </List>
    );
};

export default RestaurantsList;