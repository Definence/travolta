import React from 'react'
import { withRouter } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

import { Context } from '../../../services/context'
import Desktop from './desktop'
import Mobile from './mobile'
import { destinations } from '../../../api/responses'
import MainTemplate from '../../templates/Main'

class SearchPage extends React.Component {
  static contextType = Context

  handleSubmit = () => {
    setTimeout(() => {
      this.props.history.push('/hotels')
    }, 1500)
  }

  render() {
    const destinationOpts = destinations.map((d) => ({ label: d.name, value: d.id }))
    const initialValues = {
      adults: 1,
      check_in: "2020-03-25",
      check_out: "2020-03-25",
      children: 1
    }

    const props = {
      destinationOpts,
      initialValues,
      handleSubmit: this.handleSubmit
    }

    return <MainTemplate>{isMobile ? <Mobile {...props} /> : <Desktop {...props} />}</MainTemplate>
  }
}

export default withRouter(SearchPage)
