import React from 'react'

import Container from '../../Container'
import HeroImage from '../../../assets/images/hero_image.png'
import * as S from './styles'

const Hero = () => (
  <Container>
    <S.Hero>
      <div>
        <S.Title>
          O sonho de um rei
        </S.Title>
        <S.Subtitle>
          uma verdade para nossos tempos
        </S.Subtitle>
        <S.Description>
          Em Daniel 2 nos é mostrado um sonho atormentador do rei Nabucodonosor.
          Qual o sentido desse sonho para o nosso tempo?
        </S.Description>
      </div>
      <S.Image src={HeroImage} alt="Daniel apontando para a estátua do sonho do Nabucodonosor" />
    </S.Hero>
  </Container>
)

export default Hero
