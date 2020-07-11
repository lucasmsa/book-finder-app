import styled from 'styled-components'
import { tint } from 'polished'


interface BookCardProps {
  numberOfCards: number
}

export const Container = styled.div`
  margin-top: 100px;
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

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 50px;
    color: white;
    flex: 1;
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

    & {
      margin-left: 10px;
    }
  }

  @media only screen and (max-width: 940px) {
    margin-bottom: 200px;
  }
`

export const Books = styled.div<BookCardProps>`

  display: flex;  
  flex: 1;
  flex-direction: column;
  place-content: center;
  align-items: center;
  position: relative;

  .vl {
    position: absolute;
    transform: translateX(80px) translateY(-350px);
    border-left: 3px solid white;
    border-radius: 20px;
    height: 100%;
    margin-bottom: 20px;
    box-shadow: 5px 4px 5px 5px #18062C;

    @media only screen and (max-width: 940px) {
      visibility: hidden;
    }
  }

  .books {
    height: 200px;
    width: 200px;
    margin-left: 600px;
    transform: translateY(-250px);
  }

  .loading {
    margin-left: 600px;
    transform: translateY(-220px);
  }

  a {
    text-decoration: none;
  }
  

  @media only screen and (max-width: 940px) {
    
    height: 50px; 
    width: 50px;
    margin-top: 150px;
    text-align: center;
    
    div {
      position: relative;
      &:nth-child(2) {
        margin-top: ${props => ((props.numberOfCards * 710) - 900)}px;
      }
      transform: translateY(250px) translateX(-130px);
    }

    .books {
      transform: translateY(-10px) translateX(-120px);
    }

    .loading {
      transform: translateY(-10px) translateX(-120px);
    }
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