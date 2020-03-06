import React from 'react'

import Icon from '../../../atoms/Icon'
import { palette } from '../../../../constants/theme'
import { Wrapper } from './styled'

const Stars = ({ quantity }) => {
  const buildStars = () => {
    const stars = []
    for(let i = 0; i < quantity; i++){
      stars.push(<Icon key={i} name='star' fill={palette.pink[0]} />)
    }
    return stars
  }

  return <Wrapper display='flex'>{buildStars()}</Wrapper>
}

export default Stars
