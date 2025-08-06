import styled from "styled-components";
import { CORES } from "../../styles/theme.ts";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: ${CORES.primaria};
    color: ${CORES.branca};
    padding: 32px;
    position: relative;
    max-width: 1024px;
    width: 100%;
    
    display: flex;
    gap: 24px;

    img {
        width: 280px;
        height: 280px;
        object-fit: cover;
    }

    p, h4 {
        margin: 0;
    }

    h4 {
        font-size: 20px;
        margin-bottom: 8px;
    }

    p {
        font-size: 14px;
        margin-bottom: 16px;
    }

    button {
        background-color: ${CORES.rosaClaro};
        color: ${CORES.primaria};
        border: none;
        padding: 4px 8px;
        font-size: 14px;
        cursor: pointer;
    }
`;

export const CloseButton = styled.span`
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    font-size: 24px;
    color: ${CORES.branca};
`;