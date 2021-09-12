import React from 'react'

import logo from '../../../assets/images/logo.png'

import Container from '../../Container'
import * as S from './styles'

const Header = () => (
  <S.Header>
    <Container>
      <S.Content>
        <S.Logo src={logo} alt="Uma Nova Visão para um Novo Tempo" />
        <S.Navigation>
          <ul>
            <S.MenuItem>
              <S.MenuLink
                to="o-livro-de-daniel"
              >
                O livro de Daniel
              </S.MenuLink>
            </S.MenuItem>
          </ul>
        </S.Navigation>
      </S.Content>
    </Container>
  </S.Header>
)

export default Header
