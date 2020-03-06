import Box from '@material-ui/core/Box'
import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BtnWrapper = styled(Box)`
  > * {
    margin-left: 0.5rem;
  }
`
