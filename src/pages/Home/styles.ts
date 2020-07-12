import styled, { css } from 'styled-components'
import { tint } from 'polished'


interface BookCardProps {
  numberOfCards: number
  books: boolean
}

export const Container = styled.div`
  margin-top: 100px;
  min-width: 414px;


  @media only screen and (max-width: 940px) {
      margin-top: 30px;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 75px;
    color: white;
    flex: 1;

    @media only screen and (max-width: 493px) {
      font-size: 56.25px;
    }
    img {
      width: 50px;
      height: 50px;
      @media only screen and (max-width: 493px) {
        width: 37.5px;
        height: 37.5px;
      }
      margin-left: 0px;
    }
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 50px;
    color: white;
    flex: 1;

    @media only screen and (max-width: 493px) {
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

    @media only screen and (max-width: 493px) {
      max-width: 350px;
      font-size: 17.5px;
      margin-top: 25px;
      margin-right: 4px;
    }
  }
`


export const Icons = styled.div`
  margin-left: 160px;
  width: 200px;
  margin-top: 20px;

  @media only screen and (max-width: 493px) {
    margin-left: 120px;
    margin-top: 20px;
  }

  svg {
    color: #fff;
    transition: color 0.2s;
    &:hover {
      color: ${tint(0.2, '#562085')}
    }

    @media only screen and (max-width: 493px) {
      width: 27.5px;
      height: 27.5px;
    }

    & {
      margin-left: 10px;
    }
  }

  @media only screen and (max-width: 940px) and (min-width: 494px) {
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

    @media only screen and (max-width: 940px){
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
  
  @media only screen and (max-width: 493px) {
      font-size: 17.5px;
      margin-top: 45px;
  }
  @media only screen and (max-width: 940px){
    
    height: 50px; 
    width: 50px;
    margin-top: 150px;
    text-align: center;
    
    div {
      position: relative;
      @media only screen and (max-width: 493px) {
        margin-right: 70px;
      }
      &:nth-child(2) {
        margin-top: ${props => ((props.numberOfCards * 710) - 900)}px;

        @media only screen and (max-width: 493px) {
          margin-top: ${props => ((props.numberOfCards * 710) - 750)}px;
        }
      }
      transform: translateY(250px) translateX(-130px);
    }

    .books {
      transform: translateY(-10px) translateX(-120px);

      @media only screen and (max-width: 940px) and (min-width: 494px){
        width: 270%;
        height: 270%;
        margin-bottom: 160px;
      }

      @media only screen and (max-width: 493px) {
          width: 250%;
          height: 250%;
          margin-right: 60px;
      }
    }

    .loading {
      transform: translateY(-10px) translateX(-120px);

      @media only screen and (max-width: 493px) {
        margin-right: 60px;
      }
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

  @media only screen and (max-width: 493px) {
    height: 62.5px;
    width: 350px;
  }

  input {
    font-size: 17.5px;
    margin-left: 15px;
    border: 0;
    border-radius: 15px;
    height: 60px;
    width: 340px;
    margin-right: 10px;

    @media only screen and (max-width: 493px) {
      height: 50px;
      width: 270px;
    }

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