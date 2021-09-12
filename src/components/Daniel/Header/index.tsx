import React from 'react'

import Container from '../../Container'

import LogoDaniel from '../../../assets/images/logo_daniel.svg'
import * as S from './styles'

const Header = () => (
  <S.Header>
    <Container>
      <S.Content>
        <S.Logo src={LogoDaniel} alt="O Livro de Daniel em letras douradas" />
        <nav>
          <S.List>
            <S.ListItem>
              <S.Link href="#sobre">
                sobre
              </S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href="#aulas">
                aulas
              </S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href="#fale-conosco">
                fale conosco
              </S.Link>
            </S.ListItem>
          </S.List>
        </nav>
      </S.Content>
    </Container>
    <S.HeaderLine />
  </S.Header>
)

export default Header
