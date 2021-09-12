import React from 'react'

import * as S from './styles'

type ClassItemProps = {
  link: string;
  title: string;
}

const ClassItem = ({
  link,
  title,
}: ClassItemProps) => (
  <S.Class>
    <S.Timeline>
      <S.Circle />
      <S.Line />
    </S.Timeline>
    <div>
      <S.Title>
        { title }
      </S.Title>
      <S.Link
        href={link}
      >
        Vídeo
      </S.Link>
    </div>
  </S.Class>
)

export default ClassItem
