import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import * as S from './styles';
import { StyledLink } from "./styles";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import Cart from '../Cart';

type Props = {
    isHome: boolean
}

const Header = ({ isHome }: Props) => {
    const cart = useSelector((state: RootState) => state.cart.items);
    const [isCartOpen, setIsCartOpen] = useState(false); // 👈 Estado para controlar a visibilidade

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
                    {/* 👈 Adiciona um evento de clique para abrir a sidebar */}
                    <S.Span onClick={() => setIsCartOpen(true)} style={{ cursor: 'pointer' }}>
                        {cart.length} produto(s) no carrinho
                    </S.Span>
                </div>
            )}
            {/* 👈 Renderiza a sidebar, passando o estado e a função para fechar */}
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </S.HeaderBar>
    );
}

export default Header;