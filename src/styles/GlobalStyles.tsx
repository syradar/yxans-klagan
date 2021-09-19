import React from 'react'
import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const uiFontStack = `Branding, Futura, 'Avenir Next', Avenir, 
ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,
"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,
"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`

const customStyles = css`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
    font-family: ${uiFontStack};
  }

  * {
    ${tw`focus-visible:(outline-color[black] outline-offset[2px] outline-width[2px])`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
