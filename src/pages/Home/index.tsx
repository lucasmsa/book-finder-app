import React, { useState, useCallback } from 'react'
import { Container, Books, Input, Icons } from './styles'
import booksImg from '../../assets/bookshelf.svg'
import Search from '../../assets/search.svg'
import { FiChevronRight } from 'react-icons/fi'
import { AiFillGithub, AiFillInfoCircle } from 'react-icons/ai'
import api from '../../services/api'
import BooksComponent from '../../components/Books'


interface BookData {
  volumeInfo: {
    title: string;
    categories?: string[];
    publisher?: string;
    authors: string[];
    description: string;
    imageLinks?: {
      thumbnail: string;
    }
    publishedDate: string;
  }
}

const Home: React.FC = () => {

  const [searchInput, setSearchInput] = useState('')
  const [booksFound, setBooksFound] = useState<BookData[]>([])

  const getBooks = useCallback(async () => {
    try {
      const res = await api.get(`${searchInput}`)
      setBooksFound(res.data.items)

    } catch (err) { 
      setBooksFound([])
      console.log(err.message)
    }  
  }, [searchInput])
  
  const handleButtonClick = () => {
    getBooks()
  }


  return (
      
      <Container>
        <h1>Book Finder <img src={Search} alt="Magnifying glass"/></h1>
        <p>Find world-class books with ease by searching for their author, title or publisher</p>
        <Input>
        <input
          type="text"
          value={searchInput}
          placeholder="Book's title, author..."
          onChange={(event) => setSearchInput(event.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleButtonClick()}
        />  
        <a href='/' className='button' onClick={handleButtonClick}>
            <FiChevronRight
              size={28.5}
            />
          </a>
        </Input>
        <Icons>
            <AiFillInfoCircle
              size={35}
          />
            <a href='https://github.com/lucasmsa/book-finder-app'>
              <AiFillGithub
                size={35}    
              />
            </a>
        </Icons>
      <Books numberOfCards={booksFound?.length}>
        {booksFound?.length ? <div className='vl'/> : null}
        {booksFound?.length
          ? booksFound.map(book => {
            // const { volumeInfo } = book;
            // const { authors, title, publishedDate, imageLinks } = volumeInfo;
            // const { thumbnail } = imageLinks;
            return <BooksComponent 
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      publishedDate={book.volumeInfo.publishedDate}
                      thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                    />  
                }
          )
          : <img src={booksImg} alt="books" />}
        </Books>
      </Container>
  ) 
}

export default Home;