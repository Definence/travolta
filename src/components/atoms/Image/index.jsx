import React from 'react'

import { StyledBlock } from './styled'

const Image = ({ backgrounded, image, ...props }) => {
  const source = image ? require(`./images/${image}`) : props.src
  return <StyledBlock src={source} {...props} />
}

export default Image
