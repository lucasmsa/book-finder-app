import React from 'react';
import { BookCard } from './styles'

interface BooksProps {
  title?: string;
  author?: string[];
  publishedDate?: string;
  thumbnail?: string;
}

const BooksComponent: React.FC<BooksProps> = ({
  title,
  author,
  publishedDate,
  thumbnail
}: BooksProps)=> {
  return (
    <>
    <BookCard>
      <img src="http://books.google.com/books/content?id=y1UQQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" alt="book cover" />
        <h2><u>Title</u></h2>
        <p>Meu pal no seu cu</p>
        <h2><u>Author</u></h2>
        <p>Joao Pinto molhadinho</p>
        <h2><u>Published Date</u></h2>
        <p>12/03/2020</p>
    </BookCard>
    <BookCard>
      <img src="http://books.google.com/books/content?id=y1UQQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" alt="book cover" />
        <h2><u>Title</u></h2>
        <p>Meu pal no seu cu</p>
        <h2><u>Author</u></h2>
        <p>Joao Pinto molhadinho</p>
        <h2><u>Published Date</u></h2>
        <p>12/03/2020</p>
    </BookCard>
    </>
  )
}

export default BooksComponent;