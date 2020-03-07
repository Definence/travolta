import React from 'react'

import Icon from '../../../atoms/Icon'
import { palette } from '../../../../constants/theme'
import { Wrapper } from './styled'

const Stars = ({ quantity, onClick, isActive }) => {
  const buildStars = () => {
    const stars = []
    for(let i = 0; i < quantity; i++) {
      const isActivePresent = typeof isActive === 'boolean'
      const activeColor = isActive ? palette.pink[1]: palette.grayscale[0]
      const fill = isActivePresent ? activeColor : palette.pink[0]

      stars.push(<Icon key={i} name='star' fill={fill} />)
    }
    return stars
  }

  return <Wrapper display='flex' onClick={onClick}>{buildStars()}</Wrapper>
}

export default Stars
