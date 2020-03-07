import styled from 'styled-components'

export const StyledBlock = styled.div`
  min-height: 100px;
  min-width: 100px;
  background-image: url(${props => props.src});
  background-size: cover;
`
