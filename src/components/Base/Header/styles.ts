import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../../styles'

// eslint-disable-next-line import/prefer-default-export
export const Header = styled.div`
  background-color: ${colors.BASE_PRIMARY};
  padding: 20px 30px;
  border-bottom: 6px solid ${colors.BASE_SECONDARY};
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 574px) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  max-width: 250px;
  width: 100%;
`

export const Navigation = styled.nav`
  @media screen and (max-width: 574px) {
    margin-top: 50px;
  }
`

export const MenuItem = styled.li`
  display: inline;

  &:first-child {
    margin-right: 14px;

    @media screen and (max-width: 574px) {
      margin-right: 0;
      margin-bottom: 14px;
    }
  }

  @media screen and (max-width: 574px) {
    display: block;
    text-align: center;
  }
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${colors.BASE_MENU};
  font-size: 1.1rem;
  text-transform: uppercase;
`
