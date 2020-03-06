import * as React from 'react'

let Context = React.createContext()

let initialState = {
  hotels: []
}

let reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_HOTELS':
      return { ...state, hotels: [...state.hotels, ...action.payload] }
    default:
      return state
  }
}

function ContextProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState)
  let value = { state, dispatch }

  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

let ContextConsumer = Context.Consumer

export { Context, ContextProvider, ContextConsumer }
