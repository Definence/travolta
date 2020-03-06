import React from 'react'
import { withRouter } from 'react-router-dom'
import Box from '@material-ui/core/Box'

import { Context } from '../../../services/context'
import Main from '../../templates/Main'
import { hotels } from '../../../api/responses' // TODO remove
import { HotelBlock, StyledButton } from './styled'
import Heading from '../../atoms/Heading'
import Image from '../../atoms/Image'
import Paragraph from '../../atoms/Paragraph'
import HotelStars from '../../molecules/Hotel/Stars'

class HotelsPage extends React.PureComponent {
  static contextType = Context

  componentWillMount() {
    // const { hotels } = this.context.state
    // if (!hotels) this.props.history.push('/')
  }

  buildHotelBlock = (hotel) => {
    const min = 1
    const max = 10
    let random = Math.floor(Math.random() * (max - min) + min)
    const image = `${random}.jpg`
    const { name, id, address, city, state, country_code, hotel_rating, phone_number, website } = hotel
    const addressItems = [address, city, state, country_code].filter((el) => el)

    return (
      <HotelBlock key={id}>
        <Image image={image} />

        <Box ml='1rem' display='flex' flexDirection='column' justifyContent='space-around'>
          <Heading level={4}>{name}</Heading>
          <HotelStars quantity={hotel_rating} />
          <Paragraph>{addressItems.join(', ')}</Paragraph>
        </Box>

        <StyledButton kind='primary'>SHOW DETAILS</StyledButton>
      </HotelBlock>
    )
  }

  render() {
    return (
      <Main>
        {this.props.hotels.map(this.buildHotelBlock)}
      </Main>
    )
  }
}

HotelsPage.defaultProps = {
  hotels: hotels.slice(0, 10) // TODO remove
}

export default withRouter(HotelsPage)
