import styled from 'styled-components'

import { palette } from '../../../constants/theme'

const bgColor = ({ kind }) => {
  if (kind === 'primary') return palette.pink[0]
  if (kind === 'secondary') return palette.grayscale[0]
}

export default styled.button`
  height: min-content;
  background-color: ${bgColor};
  padding: 0.45rem 1rem;
  color: ${palette.white[0]};
  outline: none;
  appearance: none;
  border: 0;
  ${({ kind }) => kind === 'primary' && {
    'transition': 'background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out',
    'font-weight': '700',
    'letter-spacing': '0.06rem',
    'border-radius': '0.8rem',
    'padding': '1rem 2.5rem',
  }};
`
