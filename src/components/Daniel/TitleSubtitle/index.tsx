import React from 'react'

import * as S from './styles'

type TitleSubtitleProps = {
  subtitle: string;
  title: string;
}

const TitleSubtitle = ({
  subtitle,
  title,
}: TitleSubtitleProps) => (
  <>
    <S.Title>
      { title }
    </S.Title>
    <S.Subtitle>
      { subtitle }
    </S.Subtitle>
  </>
)

export default TitleSubtitle
