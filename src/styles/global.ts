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
    text-decoration: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
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

  .overlay-blur{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0,0,0,0.5);
  }

  .pdf-wrapper {
    opacity: 0;
    position: absolute;
    top: 0;
    z-index: -1;
  }
`

export default GlobalStyles
