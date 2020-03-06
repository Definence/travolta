import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { Wrapper } from './styled'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Main = ({ children }) => (
  <>
    <Wrapper>{children}</Wrapper>
    <GlobalStyle />
  </>
)


export default Main
