import React from 'react'
import throttle from 'lodash.throttle'
import { isMobile } from 'react-device-detect'

import { Context } from '../../../services/context'
import { hotels } from '../../../api/responses'
import Desktop from './desktop'
import Mobile from './mobile'

class HotelsPage extends React.Component {
  static contextType = Context

  constructor(props) {
    super(props)
    const name = localStorage.getItem('filterName')
    const rating = parseInt(localStorage.getItem('filterRating'))
    const filter = { name: name || '', rating: rating }
    this.state = { page: 0, isFetching: false, filter }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isFetching } = this.state
    return isFetching !== nextState.isFetching
  }

  fetchHotels = throttle(() => {
    if (!this.state.isFetching) {
      this.setState({ isFetching: true })

      setTimeout(() => {
        const { dispatch } = this.context
        const { page, filter: { name, rating } } = this.state
        const perPage = 10
        const matchedHotels = this.matchedHotels()
        const fetchedHotels = matchedHotels.slice(page * perPage, (page + 1) * perPage)

        dispatch({ type: 'FETCH_HOTELS', payload: fetchedHotels })
        this.setState((prevState) => ({
          page: prevState.page + 1,
          isFetching: false
        }), () => {
          localStorage.setItem('filterName', name)
          localStorage.setItem('filterRating', rating)
        })
      }, 1500)
    }
  }, 1000)

  matchedHotels = () => {
    const { filter: { name, rating } } = this.state

    return hotels.filter((h) => {
      return (
        (name === '' || (h.name.toLowerCase().includes(name.toLowerCase())))
          && (!rating || (Math.floor(h.hotel_rating) === rating))
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
    const { filter, page } = this.state
    const matchedQuantity = this.matchedHotels().length
    const hasMore = matchedQuantity !== state.hotels.length
    const noHotel = matchedQuantity === 0

    const props = {
      filter,
      fetchHotels: this.fetchHotels,
      hasMore,
      changeFilter: this.changeFilter,
      hotels: state.hotels,
      page,
      noHotel
    }

    return isMobile ? <Mobile {...props} /> : <Desktop {...props} />
  }
}

export default HotelsPage
