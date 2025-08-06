import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CORES } from '../../styles/theme'

export const Card = styled.div`
    background-color: ${CORES.branca};
    border: 1px solid ${CORES.primaria};
    position: relative;
    
    display: flex;
    flex-direction: column;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    height: 217px;
`

export const Tags = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    gap: 8px;
    
    span {
        background-color: ${CORES.primaria};
        color: ${CORES.branca};
        padding: 4px 8px;
        font-size: small;
        border-radius: 4px;
    }
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`

export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: ${CORES.primaria};
`

export const Rating = styled.span`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: ${CORES.primaria};
    
    img {
        width: 16px;
        height: 16px;
        margin-left: 8px;
    }
`

export const Description = styled.p`
    font-size: 14px;
    color: ${CORES.cinza};
    line-height: 22px;
    margin: 8px 0 16px 0;
    padding: 0 8px;
    flex-grow: 1; /* Permite que o parágrafo ocupe o espaço restante */
`

export const Button = styled(Link)`
    display: inline-block;
    background-color: ${CORES.primaria};
    color: ${CORES.branca};
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 6px;
    margin: 8px 8px 16px;
    border-radius: 4px;
    width: fit-content;
    
    margin-top: auto; /* A mágica acontece aqui */
`