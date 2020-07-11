import styled from 'styled-components'
import { tint } from 'polished'

export const BookCard = styled.div`

  transition: margin-right 0.5s;
  &:hover {
    margin-right: -20px;
  }
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  background: #4B148B;
  margin-top: 100px;
  margin-left: 650px;
  min-height: 600px;

  max-width: 300px;
  min-width: 300px;

  transform: translateY(-470px);
  padding: 0px 20px 60px 20px;
  border-radius: 10px;
  border: 2px solid white;
  text-align: center;
  align-content: center;
  margin-bottom: 10px;

  @media only screen and (max-width: 940px) {
    transform: translateY(-200px);
    transform: translateX(60px);
  }
  
  img {
    max-height: 182px;
    max-width: 128px;
    margin: 0 20px 30px 20px;
    transform: translateY(0.01px);
    border: 1px solid white;
  }

  h2 {
    margin-top: 10px;
    margin-bottom: 8px;
    font-family: 'Josefin Slab', serif;
    font-size: 25px;
    font-weight: bold;
    color: white;
  }

  p {
    font-size: 17.5px;
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    color: white;
    margin-bottom: 35px;
    color: #DFDFDF;
    &:last-child {
        margin-bottom: 10px;
    }
  }
  
  a {
    font-size: 20px;
    position: absolute;
    color: #E7BD3D;
    transform: translateY(10px) translateX(-45px);
    svg {
      transform: translateY(3px);
    }
    
    transition: color 0.2s;
    &:hover {
      color: ${tint(0.2, '#FFDA69')}
    }
  }
`