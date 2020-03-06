import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styles from './styled'

const Heading = styled(({
  level, children, reverse, theme, ...props
}) => React.createElement(`h${level}`, props, children))`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  reverse: PropTypes.bool,
}

Heading.defaultProps = {
  level: 1
}

export default Heading
