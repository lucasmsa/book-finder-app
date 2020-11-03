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
    max-height: 100vh;
    overflow-x: hidden;
}

  #root {
    max-width: 960px;
    margin: 20px auto;
    padding: 40px 10px;
    @media only screen and (max-width: 494px) and (min-width: 380px){
      margin-bottom: 135px;
    }
    @media only screen and (max-width: 940px) and (min-width: 494px){
      margin-bottom: 0;
    }
    @media only screen and (max-width: 379px) {
      margin-bottom: 200px;
    }
  }

  button {
    cursor: pointer;
  }
`
