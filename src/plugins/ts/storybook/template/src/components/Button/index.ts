import styled from 'styled-components'
import { SpaceProps, space } from 'styled-system'

export const Button = styled.button<SpaceProps>`
  background-color: blue;
  border: none;
  color: white;

  ${space};
`
