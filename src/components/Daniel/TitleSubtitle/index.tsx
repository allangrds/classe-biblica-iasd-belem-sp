import React from 'react'

import * as S from './styles'

type TitleSubtitleProps = {
  id: string;
  subtitle: string;
  title: string;
}

const TitleSubtitle = ({
  id,
  subtitle,
  title,
}: TitleSubtitleProps) => (
  <>
    <S.Title id={id}>
      { title }
    </S.Title>
    <S.Subtitle>
      { subtitle }
    </S.Subtitle>
  </>
)

export default TitleSubtitle
