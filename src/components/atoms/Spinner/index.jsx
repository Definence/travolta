import React from 'react'
import styled, { keyframes } from 'styled-components'
import Box from '@material-ui/core/Box'

import { palette } from '../../../constants/theme'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.3rem solid ${palette.grayscale[0]};
  border-top-color: ${palette.white[0]};
  animation: 1.3s ${spin} infinite linear;
  margin: auto;

  &.multi {
    border-bottom-color: ${palette.white[0]};
  }

  ${({ center }) => center && {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }}
`

Spinner.defaultProps = {
  center: false
}

export default Spinner
