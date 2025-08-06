import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {CORES} from "../../styles/theme.ts";

export const HeaderBar = styled.header`
  background-color: #ffebe9;
  text-align: center;
  padding: 40px 0;
    background-image: url("/Vector.png");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    div.container {
        display: inherit;
        flex-direction: row;
        max-width: 1024px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
`

export const Title = styled.h1`
  font-size: 36px;
  max-width: 540px;
  margin: 0 auto;
  line-height: 42px;
  margin-top: 136px;
`

export const Span = styled.span`
    font-size: 16px;
`

export const StyledLink = styled(Link)`
    color: ${CORES.primaria};
    text-decoration: none;
`