import styled from 'styled-components'
import Box from '@material-ui/core/Box'

import { palette } from '../../../../constants/theme'

export const Wrapper = styled(Box)`
  border: 1px solid black;
  height: max-content;
  background-color: ${palette.white[0]};
  border: 1px solid ${palette.dark[0]};
  padding: 0.5rem;

  > :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`
