import React from 'react'

import Circle from './icons/circle'

const Icon = props => {
  switch (props.icon) {
    case 'circle':
      return <Circle {...props} />
    default:
      return null
  }
}

export default Icon
