import styled from 'styled-components'

import { colors } from '../../../styles'

export const Class = styled.div`
  display: flex;
  flex-direction: row;
`

export const Timeline = styled.div`
  position: relative;
  margin-right: 12px;
`

export const Circle = styled.div`
  background-color: ${colors.BLACK};
  width: 20px;
  height: 20px;
  border-radius: 20px;
`

export const Line = styled.hr`
  border: 0;
  border-top: 4px solid ${colors.BLACK};
  transform: rotate(90deg);
  width: 100px;
  position: absolute;
  left: -40px;
  bottom: 38px;
  margin: 0;
`

export const Title = styled.h4`
  font-weight: normal;
  font-size: 1.5em;
  margin-bottom: 15px;
  margin-top: 5px;
`

export const Link = styled.a`
  display: block;
  font-weight: normal;
  font-size: 1.2em;
  margin-bottom: 0;
  margin-top: 5px;
  text-decoration: none;
  margin-bottom: 40px;
`
