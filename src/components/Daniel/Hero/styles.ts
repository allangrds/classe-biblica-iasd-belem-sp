import styled from 'styled-components'

import { colors } from '../../../styles'

export const Hero = styled.section`
  padding: 130px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 772px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  margin-left: 20px;
  width: 100%;

  @media screen and (max-width: 772px) {
    max-width: 390px;
    margin-top: 30px;
  }

  @media screen and (min-width: 773px) and (max-width: 822px) {
    max-width: 250px;
  }

  @media screen and (min-width: 823px) and (max-width: 952px) {
    max-width: 300px;
  }

  @media screen and (min-width: 953px) {
    max-width: 390px;
  }
`

export const Title = styled.h1`
  color: ${colors.DANIEL_PRIMARY};
  font-size: 3.4rem;
  font-style: normal;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
`

export const Subtitle = styled.h1`
  color: ${colors.DANIEL_SECONDARY};
  font-size: 2rem;
  font-style: normal;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0;
`

export const Description = styled.h1`
  color: ${colors.DANIEL_SECONDARY};
  font-size: 1.3rem;
  font-style: normal;
  font-weight: normal;
  margin-top: 1.5rem;
  margin-bottom: 0;
  line-height: 2rem;
`
