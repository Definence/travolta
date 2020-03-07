import styled from 'styled-components'

import { palette } from '../../../constants/theme'

const bgColor = ({ kind }) => {
  if (kind === 'primary') return palette.pink[0]
  if (kind === 'secondary') return palette.dark[1]
}

export default styled.button`
  height: min-content;
  background-color: ${bgColor};
  padding: 0.4rem 0.9rem;
  color: ${palette.white[0]};
  outline: none;
  appearance: none;
  cursor: pointer;
  border: 0;
  ${({ kind }) => kind === 'primary' && {
    'transition': 'background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out',
    'font-weight': '700',
    'letter-spacing': '0.06rem',
    'border-radius': '0.6rem',
    'padding': '0.7rem 1.5rem',
    '&:hover, &:focus, &:active': {
      'background-color': palette.pink[1]
    }
  }};
`
