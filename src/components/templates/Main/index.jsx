import React from 'react'
import { isMobile } from 'react-device-detect'

import Mobile from './mobile'
import Desktop from './desktop'

const MainTemplate = (props) => {
  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />
}

export default MainTemplate
