import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type {RootState} from '../../store';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { PratosList } from '../../components/PratosList';
import { Imagem, Tag, Titulo } from './styles.ts';

const Restaurant = () => {
    const { id } = useParams();

    const restaurantes = useSelector((state: RootState) => state.restaurantes.itens);

    const restaurante = restaurantes.find(r => r.id === Number(id));

    if (!restaurante) {
        return <p>Restaurante não encontrado.</p>;
    }

    return (
        <>
            <Header isHome={false} />
            <Imagem style={{ backgroundImage: `url(${restaurante.capa})` }}>
                <div className="container">
                    <Tag>{restaurante.tipo}</Tag>
                    <Titulo>{restaurante.titulo}</Titulo>
                </div>
            </Imagem>
            <div className="container">
                <PratosList pratos={restaurante.cardapio} />
            </div>
            <Footer />
        </>
    );
};

export default Restaurant;