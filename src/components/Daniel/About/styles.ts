import styled from 'styled-components'

import { colors } from '../../../styles'

export const Content = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 90px;
`

export const Cards = styled.div`
  display: grid;
  gap: 20px;

  @media screen and (max-width: 530px) {
    grid-template-rows: 1fr;
  }

  @media screen and (min-width: 531px) and (max-width: 749px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (min-width: 750px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const Card = styled.span`
  display: block;
  background-color: ${colors.GRAY};
  border-radius: 6px;
  padding: 10px 20px;
`

export const Title = styled.span`
  display: block;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.5rem;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 1.4rem;

  @media screen and (min-width: 531px) {
    height: 90px;
  }
`
