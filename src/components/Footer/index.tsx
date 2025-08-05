import React from 'react'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import { FooterContainer, Links, LinkItem, Copyright } from './styles'

const Footer = () => (
    <FooterContainer>
        <img src={logo} alt="efood" />
        <Links>
            <li>
                <LinkItem href="#">
                    <img src={instagram} alt="Instagram" />
                </LinkItem>
            </li>
            <li>
                <LinkItem href="#">
                    <img src={facebook} alt="Facebook" />
                </LinkItem>
            </li>
            <li>
                <LinkItem href="#">
                    <img src={twitter} alt="Twitter" />
                </LinkItem>
            </li>
        </Links>
        <Copyright>
            A efood é uma plataforma para distribuição de refeições online. Todos os direitos reservados.
        </Copyright>
    </FooterContainer>
)

export default Footer