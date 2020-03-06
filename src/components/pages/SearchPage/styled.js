import styled from 'styled-components'
import Box from '@material-ui/core/Box'

import { palette } from '../../../constants/theme'

export const StyledContent = styled(Box)`
  background-color: ${palette.white[0]};
  border: 2px solid ${palette.grayscale[0]};
  padding: 2rem 1rem;
  border-radius: 10px;
`

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`

export const StyledColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 1rem;
  }
`
