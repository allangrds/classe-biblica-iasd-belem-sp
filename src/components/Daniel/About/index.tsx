import React from 'react'

import Container from '../../Container'
import TitleSubtitle from '../TitleSubtitle'

import * as S from './styles'
import cards from './cards'

const About = () => (
  <Container>
    <S.Content>
      <TitleSubtitle
        id="sobre"
        title="Sobre"
        subtitle="Estudo estudo, “O Livro de Daniel”, é o segundo conjunto de estudos do projeto “Uma Nova Visão para um Novo Tempo”."
      />
      <S.Cards>
        {
          cards.map((card) => (
            <S.Card>
              <S.Title>
                { card.title }
              </S.Title>
              <S.Description>
                { card.subtitle }
              </S.Description>
            </S.Card>
          ))
        }
      </S.Cards>
    </S.Content>
  </Container>
)

export default About
