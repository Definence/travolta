import styled from 'styled-components'

export const StyledBlock = styled.div`
  min-height: 150px;
  min-width: 150px;
  background-image: url(${props => props.src});
  background-size: cover;
`
