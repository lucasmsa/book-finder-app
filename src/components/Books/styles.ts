import styled from 'styled-components'

export const BookCard = styled.div`
  font-family: 'Roboto', sans-serif;
  background: #4B148B;
  margin-top: 100px;
  margin-left: 650px;
  max-width: 290px;
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
    margin: 0 20px 30px 20px;
    transform: translateY(0.01px);
    border: 1px solid white;
  }

  h2 {
    font-family: 'Josefin Slab', serif;
    font-weight: bold;
    color: white;
  }

  p {
    margin-top: 5px;
    color: white;
    margin-bottom: 35px;
    &:nth-child(7) {
        margin-bottom: 0;
    }
  }
`