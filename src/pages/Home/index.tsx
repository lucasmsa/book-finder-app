import React from 'react'
import { Container, Books, Input } from './styles'
import booksImg from '../../assets/bookshelf.svg'
import Search from '../../assets/search.svg'
import { FiChevronRight } from 'react-icons/fi'

const Home = () => {
  return (
      <Container>
        <h1>Book Finder <img src={Search} alt="Magnifying glass"/></h1>
        <p>Find world-class books with ease by searching for their author, title or publisher</p>
        <Input>
          <input type="text" placeholder="Book's title, author..." />  
          <FiChevronRight
            size={28.5}
          />
        </Input>
        <Books>
          <img src={booksImg} alt="books"/>
        </Books>
      </Container>
  ) 
}

export default Home;