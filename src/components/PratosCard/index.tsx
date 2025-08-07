import React from "react";
import { Imagem, PratoCard } from "./styles.ts";
import type {Prato} from "../../types/types.ts";

export type PratosCardProps = {
    prato: Prato
    onClick?: () => void
}

export const PratosCard: React.FC<PratosCardProps> = ({ prato, onClick }) => (
    <>
        <PratoCard onClick={onClick}>
            <Imagem style={{ backgroundImage: `url(${prato.foto})` }} />
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <button type="button">Ver melhor</button>
        </PratoCard>
    </>
);