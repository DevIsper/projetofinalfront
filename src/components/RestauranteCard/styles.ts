import styled from 'styled-components'
import { CORES } from '../../styles/theme'

export const Card = styled.div`
  background-color: ${CORES.branca};
  position: relative;
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
  top: 8px;
  right: 8px;
  background-color: ${CORES.primaria};
  color: ${CORES.branca};
  padding: 4px 8px;
  border-radius: 4px;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${CORES.cinza};
  line-height: 22px;
  margin-top: 8px;
  padding: 0 8px;
`

export const Button = styled.a`
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