import React from 'react'
import Box from '@material-ui/core/Box'

import { Wrapper } from './styled'
import Heading from '../../../atoms/Heading'
import Button from '../../../atoms/Button'
import Input from '../../../atoms/Input'
import HotelStars from '../Stars'

const Desktop = ({ name, rating, onChangeName, onChangeRating, onResetFilter }) => {
  return (
    <Wrapper>
      <Heading level={3}>Filter Box</Heading>
      <Input pure label='Filter by hotel name' value={name} onChange={onChangeName} />
      <Heading level={3}>Filter by rating</Heading>

      <Box display='flex' flexDirection='column'>
        {[1,2,3,4,5].map((q) => {
          const isActive = q === rating
          return (
            <HotelStars
              key={q}
              isActive={isActive}
              rating={rating}
              quantity={q}
              onClick={() => onChangeRating(q)} />
            )}
          )
        }
      </Box>

      <Button kind='primary' onClick={onResetFilter}>Reset</Button>
    </Wrapper>
  )
}

export default Desktop
