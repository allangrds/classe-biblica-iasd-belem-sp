import React from 'react'

import Container from '../Container'

import LogoDaniel from '../../assets/images/logo.png'
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
              <S.Link
                href="https://www.facebook.com/novavisaoparanovotempo"
                target="_blank"
              >
                facebook
              </S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link
                href="https://www.instagram.com/novavisaoparanovotempo/"
                target="_blank"
              >
                instagram
              </S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link
                href="https://www.youtube.com/novavisaoparanovotempo?gl=BR"
                target="_blank"
              >
                youtube
              </S.Link>
            </S.ListItem>
          </S.List>
        </nav>
      </S.Content>
    </Container>
  </S.Header>
)

export default Header
