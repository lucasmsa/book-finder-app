import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  margin-top: 200px;
  

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 75px;
    color: white;
    flex: 1;
    img {
      width: 50px;
      height: 50px;
      margin-left: 0px;
    }
  }

  p {
    margin-top: 60px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    max-width: 400px;
    color: lightgrey;
    
  }
`
export const Books = styled.div`

  display: flex; 
  flex: 1;
  flex-direction: column;
  place-content: center;
  align-items: center;
  position: relative;

  img {
    height: 200px;
    width: 200px;
    margin-left: 600px;
    transform: translateY(-250px);
  }

  @media only screen and (max-width: 920px) {
    height: 100px; 
    width: 100px;
    transform: translateY(350px) translateX(-100px);
  }
`

export const Input = styled.div`

  margin-top: 50px;
  border: 5px solid #1D0632; 
  height: 70px;
  max-width: 420px; 
  background: white;
  border-radius: 15px;

  input {
    font-size: 17.5px;
    margin-left: 15px;
    border: 0;
    border-radius: 15px;
    height: 60px;
    width: 340px;
    margin-right: 10px;

    &::placeholder {
      font-size: 17.5px;    
    }
  }

  svg {
    transform: translateY(7.5px);
    color: #1D0632;
    transition: color 0.2s;

    &:hover {
      color: ${lighten(0.3, '#1D0632')}
    }
  }
`