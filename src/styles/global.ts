import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialised;
    background: #320A5C;
    width: 100%;
    position: relative;
  }

  html, body {
    max-width: 100%;
    overflow-x: hidden;
}

  #root {
    max-width: 960px;
    margin: 20px auto;
    padding: 40px 10px;
    @media only screen and (max-width: 494px){
      margin-bottom: 55px;
    }
    @media only screen and (max-width: 940px) and (min-width: 494px){
      margin-bottom: 350px;
    }
  }

  button {
    cursor: pointer;
  }
`