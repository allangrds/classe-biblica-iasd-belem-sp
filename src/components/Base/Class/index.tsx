import React from 'react'

import { Container } from '../../index'
import ClassItem from '../ClassItem'

import classes from './classes'
import * as S from './styles'

const Class = () => (
  <S.Content>
    <Container>
      <S.Title>
        Aulas
      </S.Title>
      {
        classes.map((item, index) => (
          <ClassItem
            title={`${index + 1}. ${item.title}`}
            link={item.link}
          />
        ))
      }
    </Container>
  </S.Content>
)

export default Class
