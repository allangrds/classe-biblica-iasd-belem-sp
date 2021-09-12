import React from 'react'

import Container from '../../Container'
import * as S from './styles'
import BibleIllustration from '../../../assets/images/bible.svg'

const Hero = () => (
  <S.Wrapper>
    <Container>
      <S.Hero>
        <div>
          <S.Title>
            Uma <strong>nova visão</strong> para um <strong>novo tempo</strong>
          </S.Title>
          <S.Description>
            A origem do homem e de tudo que conhecemos sempre intrigou a mente
            humana. De onde viemos? Para onde vamos? Se você tem o desejo de
            saber, se inscreva em nossa classe de estudos. Ao longo de estudos
            guiados descobriremos o que a Bíblia tem para revelar sobre tudo
            isso.
          </S.Description>
        </div>
        <S.ImageWrapper>
          <S.Image src={BibleIllustration} />
        </S.ImageWrapper>
      </S.Hero>
    </Container>
  </S.Wrapper>
)

export default Hero
