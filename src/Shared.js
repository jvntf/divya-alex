import styled from 'styled-components';
import { typography, space, color, layout } from 'styled-system'

export const Box = styled.div`
  ${typography}
  ${space}
  ${color}
  ${layout}
`


export const theme = {
  colors: {
    primary: '#03A95C',
    background: '#cbda79'
  },
  fonts: {
    size: {
      h1: 24,
      h2: 15,
      h3: 20,
      body: 12,
      detail: 8
    },
    lineHeight: {
      h1: 25,
      h2: 18,
      h3: 24,
      body: 14,
      detail: 10
    },
    weight: {
      h1: 400,
      h2: 400,
      h3: 700,
      body: 400,
      detail: 400
    }
  }
}

export const Text = styled(Box)`
  color: ${theme.colors.primary};
`;

export const H1 = styled(Text)`
  font-size: ${theme.fonts.size.h1}px;
  line-height: ${theme.fonts.lineHeight.h1}px;
  font-weight: ${theme.fonts.weight.h1};
`
export const H2 = styled(Text)`
  font-size: ${theme.fonts.size.h1}px;
  line-height: ${theme.fonts.lineHeight.h2}px;
  font-weight: ${theme.fonts.weight.h2};
`
export const H3 = styled(Text)`
  font-size: ${theme.fonts.size.h1}px;
  line-height: ${theme.fonts.lineHeight.h3}px;
  font-weight: ${theme.fonts.weight.h3};
`
