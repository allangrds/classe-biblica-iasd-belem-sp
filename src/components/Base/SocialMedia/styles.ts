import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Title = styled.h3`
  font-size: 1.9rem;
  font-weight: normal;
`

export const List = styled.ul`
  list-style: none;
`

export const Item = styled.li`
  display: inline;

  &:not(:last-child) {
    margin-right: 10px;
  }
`

export const Image = styled.img`
  max-width: 40px;
`
