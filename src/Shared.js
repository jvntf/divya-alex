import styled from 'styled-components';
import { system, typography, space, color, layout } from 'styled-system'

export const Box = styled.div`
  ${typography}
  ${space}
  ${color}
  ${layout}
`


export const theme = {
  colors: {
    white: '#ffffff',
    primary: '#179b20',
    background:'#8AC181',
  },
  fonts: {
    size: {
      h1: 100,
      h1mobile: 44,
      h2: 24,
      h3: 18,
      body: 12,
      detail: 12
    },
    lineHeight: {
      h1: 110,
      h2: 32,
      h3: 24,
      body: 14,
      detail: 18
    },
    weight: {
      h1: 400,
      h2: 400,
      h3: 400,
      body: 400,
      detail: 400
    }
  }
}

export const Text = styled(Box)`
  font-family: Futura;
  color: ${theme.colors.white};
`;

export const H1 = styled(Text)`
  font-weight: ${theme.fonts.weight.h1};
`
export const H2 = styled(Text)`
  line-height: ${theme.fonts.lineHeight.h2}px;
  font-weight: ${theme.fonts.weight.h2};
`
export const H3 = styled(Text)`
  line-height: ${theme.fonts.lineHeight.h3}px;
  font-weight: ${theme.fonts.weight.h3};
`

export const Detail = styled(Text)`
  line-height: ${theme.fonts.lineHeight.detail}px;
  font-weight: ${props => props.bold ? 700 : theme.fonts.weight.detail};
  text-transform: uppercase;
`;



