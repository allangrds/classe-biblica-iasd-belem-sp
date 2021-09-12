import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  padding: 20px 30px;
`

export const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 230px;
  column-gap: 40px;

  @media screen and (max-width: 791px) {
    grid-template-columns: 1fr 0;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
`

export const Description = styled.h2`
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 300;
  margin-bottom: 50px;
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  max-width: 100%;
`
