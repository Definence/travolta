import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { ContextProvider } from './services/context'
import { palette } from './constants/theme'
import Spinner from './components/atoms/Spinner'

const SearchPage = React.lazy(() => import('./components/pages/SearchPage'))
const HotelsPage = React.lazy(() => import('./components/pages/HotelsPage'))

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${palette.grayscale[1]};
  }
`

function Routes() {
  return (
    <Suspense fallback={<Spinner center />}>
      <ContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={SearchPage} />
            <Route exact path='/hotels' component={HotelsPage} />
          </Switch>
        </Router>
      </ContextProvider>
      <GlobalStyle />
    </Suspense>
  )
}

export default Routes
