import styled from 'styled-components'
import { tint } from 'polished'

export const Container = styled.div`
  margin-top: 100px;
  min-width: 414px;
  color: white;

  @media only screen and (min-width: 493px) {
    box-sizing: border-box;
    &:hover {
      margin-right: -20px;
    }
  } 
  

  a {
    
    text-decoration: none;
    color: #E7BD3D;
    svg {
      color: white;
      margin-bottom: 40px;
      transition: color 0.2s;
      &:hover {
        color: ${tint(0.2, '#562085')}
      }
    }
    &:hover {
      color: ${tint(0.2, '#FFDA69')}
    }  
  }
  
  

  h2 {
    margin: 5px 15px 80px 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 36px;
    color: white;
    flex: 1;
  }

  p {
    margin: 10px 15px;
    margin-top: 60px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    max-width: 400px;
    color: lightgrey;
    @media only screen and (max-width: 649px) {
      a:last-child {
        margin: 10px 15px;
      }  
    } 
    @media only screen and (max-width: 493px) {
      max-width: 350px;
      font-size: 17.5px;
      margin-top: 25px;
      margin-right: 4px;
    }
  }
`
