import styled from 'styled-components'

import { colors } from '../../../styles'

export const Content = styled.div`
  padding: 60px 30px;
`

export const Class = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 136px;
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
  width: 130px;
  position: absolute;
  left: -55px;
  bottom: 50px;
  margin: 0;
`

export const Title = styled.h4`
  font-weight: 500;
  font-size: 1.3em;
  margin-bottom: 15px;
  margin-top: 0;
`

export const Link = styled.a`
  color: ${colors.BLACK};
  display: block;
  font-weight: 300;
  font-size: 1.2em;
  margin-bottom: 0;
  margin-top: 5px;
  text-decoration: none;
  margin-bottom: 40px;
`
