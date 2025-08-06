import React from 'react'
import logo from '../../assets/images/logo.png'
import * as S from './styles'
import {StyledLink} from "./styles";

type Props = {
    isHome: boolean
}

const Header = ({ isHome }: Props) => (
    <S.HeaderBar>
        {isHome ? (
            <>
                <img src={logo} alt="efood" />
                <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
            </>
        ) : (
            <div className="container">
                <StyledLink to="/">Restaurantes</StyledLink>
                <img src={logo} alt="efood" />
                <S.Span>0 produto(s) no carrinho</S.Span>
            </div>
        )}
    </S.HeaderBar>
)

export default Header