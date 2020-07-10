import { BookCard } from './../../components/Books/styles';
import styled from 'styled-components'
import { tint } from 'polished'

export const Container = styled.div`
  margin-top: 150px;
  min-width: 540px;

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

  @media only screen and (max-width: 940px) {
    height: 50px; 
    width: 50px;
    margin-top: 150px;
    transform: translateY(440px) translateX(-200px);
    text-align: center;
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
      color: ${tint(0.2, '#562085')}
    }
  }
`

export const Icons = styled.div`
  margin-left: 160px;
  width: 200px;
  margin-top: 20px;
    svg {
      color: #fff;
      transition: color 0.2s;
      &:hover {
        color: ${tint(0.2, '#562085')}
      }

      & + a {
        margin-left: 10px;
      }
    }
`