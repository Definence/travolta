import React from 'react'
import { withRouter } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

import { Context } from '../../../services/context'
import Desktop from './desktop'
import Mobile from './mobile'
import { destinations } from '../../../api/responses'

class SearchPage extends React.Component {
  static contextType = Context

  handleSubmit = () => {
    setTimeout(() => {
      this.props.history.push('/hotels')
    }, 1500)
  }

  render() {
    const destinationOpts = destinations.map((d) => ({ label: d.name, value: d.id }))
    const props = {
      destinationOpts,
      handleSubmit: this.handleSubmit
    }

    return isMobile ? <Mobile {...props} /> : <Desktop {...props} />
  }
}

export default withRouter(SearchPage)
