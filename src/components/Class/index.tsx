import React, { useCallback, useState } from 'react'

import Container from '../Container'
import TitleSubtitle from '../TitleSubtitle'
import novaVisaoClasses from './nova-visao'
import livroDanielClasses from './livro-daniel'
import * as S from './styles'

const Class = () => {
  const [showDanielClass, setShowDanielClass] = useState(false)
  const classes = showDanielClass
    ? livroDanielClasses
    : novaVisaoClasses

  const handleChooseDaniel = useCallback(
    () => {
      setShowDanielClass(true)
    },
    [setShowDanielClass]
  )

  const handleChooseBase = useCallback(
    () => {
      setShowDanielClass(false)
    },
    [setShowDanielClass]
  )

  return (
    <Container>
      <S.Content>
        <TitleSubtitle
          id="aulas"
          title="aulas"
          subtitle="Link das aulas gravadas e do material em texto."
        />
        <S.ButtonsWrapper>
          <S.FirstButton
            active={!showDanielClass}
            onClick={handleChooseBase}
          >
            Primeira temporada
          </S.FirstButton>
          <S.SecondtButton
            active={showDanielClass}
            onClick={handleChooseDaniel}
          >
            Segunda Temporada(O Livro de Daniel)
          </S.SecondtButton>
        </S.ButtonsWrapper>
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
}

export default Class
