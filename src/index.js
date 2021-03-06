import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './Routes'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById("root")
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Routes />, rootElement);
} else {
  ReactDOM.render(<Routes />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
