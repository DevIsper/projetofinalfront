import styled from "styled-components";
import { CORES } from "../../styles/theme.ts";

export const Imagem = styled.div`
    width: 100%;
    height: 280px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    color: ${CORES.branca};
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }
    
    div {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 24px 0 32px 0;
    }
`;

export const Tag = styled.span`
  color: ${CORES.branca};
  padding: 4px 8px;
  font-size: small;
  border-radius: 4px;
`;

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: 900;
`;