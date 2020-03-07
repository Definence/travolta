import React from 'react'

import Circle from './icons/circle'
import Star from './icons/star'

const Icon = props => {
  const buildComponent = () => {
    switch (props.name) {
      case 'circle':
        return <Circle {...props} />
      case 'star':
        return <Star {...props} />
      default:
        return null
    }
  }

  return <span style={{ cursor: 'pointer' }}>{buildComponent()}</span>
}

export default Icon
