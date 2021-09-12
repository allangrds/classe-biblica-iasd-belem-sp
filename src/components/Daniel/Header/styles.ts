import styled from 'styled-components'

import HeaderLineIllustration from '../../../assets/images/daniel_header_footer.png'
import { colors } from '../../../styles'

export const Header = styled.header`
  width: 100%;
`

// eslint-disable-next-line import/prefer-default-export
export const HeaderLine = styled.div`
  background-image: url(${HeaderLineIllustration});
  width: 100%;
  height: 33px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 20px;

  @media screen and (max-width: 549px) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  @media screen and (max-width: 549px) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 550px) {
    margin-right: 50px;
  }
`

export const List = styled.ul`
  list-style: none;
`

export const ListItem = styled.li`
  @media screen and (max-width: 549px) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 550px) {
    display: inline-block;
    margin-right: 10px;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.DANIEL_MENU};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;

  @media screen and (max-width: 549px) {
    text-align: center;
    display: block;
  }
`
