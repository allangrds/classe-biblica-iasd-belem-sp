import React from 'react'

import Container from '../../Container'
import TitleSubtitle from '../TitleSubtitle'
import classes from './classes'
import * as S from './styles'

const Class = () => (
  <Container>
    <S.Content>
      <TitleSubtitle
        title="aulas"
        subtitle="Link das aulas gravadas e do material em texto."
      />
      {
        classes.length > 0 && (
          classes.map((item, index) => (
            <S.Class>
              <S.Timeline>
                <S.Circle />
                {
                  classes.length !== (index + 1) && (
                    <S.Line />
                  )
                }
              </S.Timeline>
              <div>
                <S.Title>
                  {index + 1}. { item.title }
                </S.Title>
                <S.Link
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                >
                  Vídeo
                </S.Link>
              </div>
            </S.Class>
          ))
        )
      }
    </S.Content>
  </Container>
)

export default Class
