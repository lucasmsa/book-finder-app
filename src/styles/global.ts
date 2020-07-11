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

  #root {
    max-width: 960px;
    margin: 20px auto;
    padding: 40px 10px;
  }

  button {
    cursor: pointer;
  }
`