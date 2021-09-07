import React from 'react'

import logo from '../../../assets/images/logo.png'

import Container from '../../Container'
import * as S from './styles'

const Header = () => (
  <S.Header>
    <Container>
      <S.Content>
        <S.Logo src={logo} />
        <S.Navigation>
          <ul>
            <S.MenuItem>
              <S.MenuLink
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdXSUvsFKFJdHkbTHInXXC_RDNfqkb1PG9slWI2HxgvDtysfQ/viewform?usp=sf_link"
              >
                Inscreva-se
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink
                href="#about"
              >
                Sobre
              </S.MenuLink>
            </S.MenuItem>
          </ul>
        </S.Navigation>
      </S.Content>
    </Container>
  </S.Header>
)

export default Header
