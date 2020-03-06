import styled from 'styled-components'

import { palette } from '../../../constants/theme'

const bgColor = ({ type }) => {
  if (type === 'primary') return palette.pink[0]
}

export default styled.button`
  background: ${bgColor};
`
