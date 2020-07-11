import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

const Info = () => {
  return <Container>
    <Link to='/'>
      <FiArrowLeft size={50} />
    </Link>
    <h2>The idea behind the application was provided by this <a target="_blank" rel="noopener noreferrer" href='https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Book-Finder-App.md'>repository</a>  🦦</h2>
    <p style={{display: 'inline'}} >Some of the icons were made by <a target="_blank" rel="noopener noreferrer"  href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a target="_blank" rel="noopener noreferrer"  href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
  </Container>
}

export default Info;