import React from 'react'
import throttle from 'lodash.throttle'

import { Context } from '../../../services/context'
import Main from '../../templates/Main'
import { hotels } from '../../../api/responses'
import HotelList from '../../molecules/Hotel/List'
import HotelFilter from '../../molecules/Hotel/Filter'
import { Wrapper } from './styled'

class HotelsPage extends React.Component {
  static contextType = Context
  state = { page: 0, isFetching: false, filter: { name: '', rating: undefined } }

  shouldComponentUpdate(nextProps, nextState) {
    const { isFetching } = this.state
    return isFetching !== nextState.isFetching
  }

  fetchHotels = throttle(() => {
    if (!this.state.isFetching) {
      this.setState({ isFetching: true })

      setTimeout(() => {
        const { dispatch } = this.context
        const { page } = this.state
        const perPage = 10
        const matchedHotels = this.matchedHotels()
        const fetchedHotels = matchedHotels.slice(page * perPage, (page + 1) * perPage)

        dispatch({ type: 'FETCH_HOTELS', payload: fetchedHotels })
        this.setState((prevState) => ({
          page: prevState.page + 1,
          isFetching: false
        }))
      }, 1000)
    }
  }, 800)

  matchedHotels = () => {
    const { filter: { name, rating } } = this.state
    return hotels.filter((h) => {
      return (
        (name === '' || (h.name.toLowerCase().includes(name.toLowerCase()))) &&
        (!rating || (Math.floor(h.hotel_rating) === rating))
      )
    })
  }

  changeFilter = (params) => {
    const { dispatch } = this.context
    dispatch({ type: 'RESET_HOTELS' })
    this.setState((prevState) => ({ page: 0, filter: { ...prevState.filter, ...params } }))
  }

  render() {
    const { state } = this.context
    const { filter, isFetching } = this.state
    const matchedQuantity = this.matchedHotels().length
    const hasMore = matchedQuantity !== state.hotels.length
    const noHotel = matchedQuantity === 0

    return (
      <Main>
        <Wrapper>
          {<HotelFilter filter={filter} changeFilter={this.changeFilter} />}

          <HotelList
            noHotel={noHotel}
            fetchHotels={this.fetchHotels}
            page={state.page}
            hasMore={hasMore}
            hotels={state.hotels}
            isFetching={isFetching}
          />
        </Wrapper>
      </Main>
    )
  }
}

export default HotelsPage
