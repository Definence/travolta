import React, { useState } from 'react'

import { Wrapper } from './styled'
import Heading from '../../../atoms/Heading'
import Input from '../../../atoms/Input'

const HoteLFilter = ({ name, rating, changeFilter }) => {
  const onChangeName = ({ target: { value } }) => changeFilter({ name: value })

  return (
    <Wrapper>
      <Heading level={3}>Filter Box</Heading>
      <Input pure label='Filter by hotel name' value={name} onChange={onChangeName} />
    </Wrapper>
  )
}

export default HoteLFilter
