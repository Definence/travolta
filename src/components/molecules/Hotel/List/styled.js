import styled from 'styled-components'
import Box from '@material-ui/core/Box'

import { palette } from '../../../../constants/theme'
import Button from '../../../atoms/Button'

export const HotelBlock = styled(Box)`
  height: max-content;
  display: flex;
  background-color: ${palette.white[0]};
  border: 1px solid ${palette.dark[0]};
  padding: 0.5rem;
  margin-bottom: 1rem;
`

export const StyledButton = styled(Button)`
  margin: auto 0 auto auto;
`

export const Wrapper = styled(Box)`
  flex: 1;
`
