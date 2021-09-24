import styled from 'styled-components'
import { Link as ReactLink } from 'react-router-dom'

import { colors } from '../../../styles'

export const Header = styled.header`
  width: 100%;
  background-color: ${colors.DANIEL_MENU_BACKGROUND};
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 6px solid ${colors.DANIEL_MENU_BORDER};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 20px;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }

  @media screen and (min-width: 721px) {
    justify-content: space-between;
  }
`

export const Logo = styled.img`
  max-width: 350px;

  @media screen and (max-width: 720px) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 721px) {
    margin-right: 50px;
  }
`

export const List = styled.ul`
  list-style: none;
`

export const ListItem = styled.li`
  @media screen and (max-width: 720px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 721px) {
    display: inline-block;
    margin-right: 15px;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.DANIEL_MENU_LINK};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;

  @media screen and (max-width: 720px) {
    text-align: center;
    display: block;
  }
`

export const RealLink = styled(ReactLink)`
  text-decoration: none;
  color: ${colors.DANIEL_MENU_LINK};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;

  @media screen and (max-width: 720px) {
    text-align: center;
    display: block;
  }
`
