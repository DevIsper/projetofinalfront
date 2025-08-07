import styled from "styled-components";
import { CORES } from "../../styles/theme.ts";

export const PratoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 320px;
    max-height: 338px;
    width: 100%;
    background-color: ${CORES.primaria};
    color: ${CORES.branca};
    padding: 8px;
    
    button {
        background-color: ${CORES.rosaClaro};
        color: ${CORES.primaria};
        max-width: 304px;
        max-height: 24px;
        width: 100%;
        height: 100%;
        margin: 16px 0px 0px 0px;
        border: none;
    }
    
    h3 {
        padding-top: 16px;
        font-weight: 900;
        font-size: 16px;
    }
    
    p {
        padding-top: 8px;
        font-weight: 400;
        font-size: 14px;
        overflow: auto;
    }
`;

export const Imagem = styled.div`
    width: 100%;
    height: 167px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
`;