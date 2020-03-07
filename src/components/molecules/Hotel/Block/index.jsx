import React from 'react'
import { isMobile } from 'react-device-detect'

import Desktop from './desktop'
import Mobile from './mobile'

const HotelBlock = ({ name, address, city, state, country_code, hotel_rating }) => {
  const min = 1
  const max = 10
  let random = Math.floor(Math.random() * (max - min) + min)
  const image = `${random}.jpg`
  const addressItems = [address, city, state, country_code].filter((el) => el)
  const fullAddress = addressItems.join(', ')
  const props = { name, address: fullAddress, hotel_rating, image }

  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />
}


export default HotelBlock
