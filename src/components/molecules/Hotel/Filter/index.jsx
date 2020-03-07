import React from 'react'
import { isMobile } from 'react-device-detect'

import Mobile from './mobile'
import Desktop from './desktop'

const HotelFilter = ({ filter: { name, rating }, changeFilter }) => {
  const onChangeName = ({ target: { value } }) => changeFilter({ name: value })
  const onChangeRating = (curRating) => changeFilter({ rating: curRating })
  const onResetFilter = () => changeFilter({ rating: null, name: '' })

  const props = {
    onChangeName,
    onChangeRating,
    onResetFilter,
    name,
    rating
  }

  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />
}

export default HotelFilter
