import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CORES } from '../../styles/theme'

export const Card = styled.div`
  background-color: ${CORES.branca};
  position: relative;
    border: 1px solid ${CORES.primaria};
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  padding: 0 8px;
`

export const Rating = styled.span`
  position: absolute;
  bottom: 125px;
  right: 8px;
  color: ${CORES.primaria};
  padding: 4px 8px;
`

export const Tags = styled.span`
  position: relative;
  bottom: 210px;
  background-color: ${CORES.primaria};
  color: ${CORES.branca};
  padding: 4px 8px;
    font-size: small;
  border-radius: 4px;
    margin-left: 4px;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${CORES.cinza};
  line-height: 22px;
  margin-top: 8px;
  padding: 0 8px;
`

export const Button = styled(Link)`
  display: inline-block;
  background-color: ${CORES.primaria};
  color: ${CORES.branca};
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  margin: 16px 8px 8px;
  border-radius: 4px;
`