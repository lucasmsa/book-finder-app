import React from 'react';
import isUndefined from '../../utils/isUndefined'
import { BookCard } from './styles'

interface BooksProps {
  title: string;
  authors?: string[];
  publishedDate?: string;
  thumbnail?: string;
}

const BooksComponent: React.FC<BooksProps> = ({
  title,
  authors,
  publishedDate,
  thumbnail
}: BooksProps) => {

  let titleDisplay = ''
  if (!isUndefined(title)) {
    titleDisplay = title
  }

  let authorDisplay = ''
  if (authors?.length) {
    authorDisplay = authors?.join('; ')
  }

  return (
    <>
      <BookCard>
        {thumbnail && <img src={thumbnail} alt="book cover" />}
        <h2><u>Title</u></h2>
        <p>{titleDisplay.length > 48 ? titleDisplay.substr(0, 50).concat('...') : titleDisplay}</p>
        <h2><u>Author</u></h2>
        <p>{authorDisplay.length > 48 ? authorDisplay.substr(0, 50).concat('...') : authorDisplay}</p>
        <h2><u>Published Date</u></h2>
        <p>{publishedDate}</p>
    </BookCard>
    </>
  )
}

export default BooksComponent;