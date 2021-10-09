import React from 'react'

import Container from '../Container'
import TitleSubtitle from '../TitleSubtitle'

import * as S from './styles'
import novaVisaoCards from './nova-visao'
import livroDanielCards from './livro-daniel'

const About = () => (
  <Container>
    <S.Content>
      <TitleSubtitle
        id="sobre"
        title="Sobre"
        subtitle="O projeto Nova Visão para Novo Tempo surgiu com o objetivo de ensinar as principais doutrinas bíblicas através de aulas didáticas e acessíveis, pensadas especialmente para quem busca a verdade.

        Depois da primeira temporada, com 21 aulas sobre os questionamentos teológicos mais comuns, a segunda temporada se aprofunda no enigmático livro de Daniel, suas profecias e mensagens fundamentais para os dias de hoje."
      />
      <S.FisicalClass>
        aula presencial
      </S.FisicalClass>
      <S.Cards>
        {
          novaVisaoCards.map((card) => (
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
      <S.OnlineClass>
        aula online
      </S.OnlineClass>
      <S.Cards>
        {
          livroDanielCards.map((card) => (
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
