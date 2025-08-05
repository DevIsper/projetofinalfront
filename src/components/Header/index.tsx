import React from 'react'
import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Header = () => (
    <S.HeaderBar>
        <img src={logo} alt="efood" />
        <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </S.HeaderBar>
)

export default Header
