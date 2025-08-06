import React from "react";
import {Imagem, PratoCard} from "./styles.ts";

export type PratosCardProps = {
    id: number
    image: string
    title: string
    description: string
}

export const PratosCard: React.FC<PratosCardProps> = ({id, image, title, description}) => (
    <>
        <PratoCard>
            <Imagem style={{backgroundImage: `url(${image})`}} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button type={"button"}>Adicionar ao Carrinho</button>
        </PratoCard>
    </>
)