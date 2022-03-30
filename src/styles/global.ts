import { IThemesProps } from '@/types/styled'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url(../../public/fonts/Poppins.woff) format('woff'),
       url(../../public/fonts/Poppins.woff2) format('woff2');
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: "Poppins", sans-serif;
    background: ${(props: IThemesProps) => props.theme.body};
  }
`

export default GlobalStyles
