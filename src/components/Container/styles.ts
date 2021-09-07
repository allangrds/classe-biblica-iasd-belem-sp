import styled from 'styled-components'

import { widths } from '../../styles/index'

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Content = styled.div`
  width: 100%;
  max-width: ${widths.CONTAINER_MAX_WIDTH};
`
