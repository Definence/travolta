import { css } from 'styled-components'

import { fonts } from '../../../constants/theme'

const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`

export default css`
  font-family: ${fonts.primary};
  font-weight: 600;
  font-size: ${fontSize};
  margin: 0;
`
