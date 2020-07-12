import styled from 'styled-components'
import { tint } from 'polished'

export const BookCard = styled.div`

  transition: margin-right 0.5s;


  @media only screen and (min-width: 493px) {
    box-sizing: border-box;
    &:hover {
      margin-right: -20px;
    }
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

  @media only screen and (max-width: 493px) and (min-width: 380px){
    max-width: 240px;
    max-height: 400px;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 379px) {
    margin-left: 580px;
    padding-right: 2.5px;
    padding-left: 2.5px;
    padding-bottom: 0;
  }

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

    @media only screen and (max-width: 379px) {
      max-height: 145.6px;
      max-width: 102.4px;
      margin-right: 0;
      margin-left: 0;
    }
  }

  h2 {
    margin-top: 10px;
    margin-bottom: 8px;
    font-family: 'Josefin Slab', serif;
    font-size: 25px;
    font-weight: bold;
    color: white;

    @media only screen and (max-width: 493px) and (min-width: 380px) {
      font-size: 21.5px;
    }

    @media only screen and (max-width: 379px) {
      font-size: 18.5px;
    }
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

    @media only screen and (max-width: 493px) and (min-width: 380px) {
      font-size: 16px;
    }

    @media only screen and (max-width: 379px) {
      font-size: 13px;
      margin-left: 2.5px;
      margin-right: 2.5px;
    }
  }
  
  a {

    @media only screen and (max-width: 493px) and (min-width: 380px) {
      font-size: 17.5px;
    }
    font-size: 20px;
    position: absolute;
    color: #E7BD3D;
    transform: translateY(10px) translateX(-45px);
    svg {
      transform: translateY(3px);
    }

    @media only screen and (max-width: 379px) {
      font-size: 14.5px;
    }
    
    transition: color 0.2s;
    &:hover {
      color: ${tint(0.2, '#FFDA69')}
    }
  }
`
