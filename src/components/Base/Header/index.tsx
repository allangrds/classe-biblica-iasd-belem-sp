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
                href="#sobre"
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
