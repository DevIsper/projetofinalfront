import React from 'react'
import logo from '../../assets/images/logo.png'
import * as S from './styles'
import {StyledLink} from "./styles";
import {useSelector} from "react-redux";
import type {RootState} from "../../store";

type Props = {
    isHome: boolean
}

const Header = ({ isHome }: Props) => {

    const cart = useSelector((state: RootState) => state.cart.items);

    return (
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
                    <S.Span>{cart.length} produto(s) no carrinho</S.Span>
                </div>
            )}
        </S.HeaderBar>
    )
}

export default Header