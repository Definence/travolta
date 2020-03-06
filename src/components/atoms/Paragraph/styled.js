import styled from 'styled-components'
import { fonts } from '../../../constants/theme'

export const StyledParagraph = styled.p`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight || '500'};
  font-family: ${fonts.primary};
  margin: 0.2rem 0;
  text-align: justify;
`
