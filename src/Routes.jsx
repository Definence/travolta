import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const SearchPage = React.lazy(() => import('./components/pages/SearchPage'))

function Routes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' component={SearchPage} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
