import React from 'react'

import * as S from './styles'

type ContainerProps = {
  children: any;
}

const Container = ({ children }: ContainerProps) => (
  <S.Container>
    <S.Content>
      { children }
    </S.Content>
  </S.Container>
)

export default Container
