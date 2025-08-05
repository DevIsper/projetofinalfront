import styled from 'styled-components'
import { CORES } from '../../styles/theme'

export const FooterContainer = styled.footer`
  background-color: ${CORES.rosaClaro};
  color: ${CORES.secundaria};
  text-align: center;
  padding: 32px 0;
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 32px;

  li {
    margin: 0 8px;
  }
`

export const LinkItem = styled.a`
  img {
    width: 24px;
  }
`

export const Copyright = styled.p`
    color: ${CORES.cinza};
  font-size: 10px;
  margin-top: 80px;
`