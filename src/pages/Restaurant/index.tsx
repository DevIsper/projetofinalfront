import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { PratosList } from "../../components/PratosList";
import image from "/imagemdefundo.png";
import { Imagem, Tag, Titulo } from "./styles.ts";

const Restaurant = () => {
    return (
        <>
            <Header isHome={false} />
            <Imagem style={{ backgroundImage: `url(${image})` }}>
                <div className="container">
                    <Tag>Italiana</Tag>
                    <Titulo>La Dolce Vita Trattoria</Titulo>
                </div>
            </Imagem>
            <div className="container">
                <PratosList isJaponesa={true} />
            </div>
            <Footer />
        </>
    );
};

export default Restaurant;