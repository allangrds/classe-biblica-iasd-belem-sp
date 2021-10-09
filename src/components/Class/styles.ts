import styled from 'styled-components'

import { colors } from '../../styles'

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

type BaseButtonProps = {
  active: boolean;
}

export const BaseButton = styled.button<BaseButtonProps>`
  cursor: pointer;
  margin-bottom: 80px;
  font-size: 1.1rem;
  background: none;
  text-align: center;
  padding: 12px 25px;
  border-color: ${colors.BASE_PRIMARY};
  color: ${(props) => (props.active ? colors.WHITE : colors.BASE_PRIMARY)};
  background-color: ${(props) => (props.active
    ? colors.BASE_PRIMARY
    : colors.WHITE
  )};

  @media screen and (max-width: 623px) {
    margin: 0;
    width: 100%;
  }
`

export const FirstButton = styled(BaseButton)`
  @media screen and (max-width: 623px) {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  @media screen and (min-width: 624px) {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-right: none;
  }
`

export const SecondtButton = styled(BaseButton)`
  @media screen and (max-width: 623px) {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  @media screen and (min-width: 624px) {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`

export const ButtonsWrapper = styled.div`
  @media screen and (max-width: 623px) {
    margin-bottom: 50px;
  }
`
