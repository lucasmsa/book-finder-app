import React from 'react';
import isUndefined from '../../utils/isUndefined'
import { BookCard } from './styles'
import { FiChevronRight } from 'react-icons/fi'

interface BooksProps {
  title: string;
  infoLink: string;
  authors?: string[];
  publishedDate?: string;
  thumbnail?: string;
}

const BooksComponent: React.FC<BooksProps> = ({
  title,
  authors,
  publishedDate,
  thumbnail,
  infoLink
}: BooksProps) => {

  let titleDisplay = ''
  if (!isUndefined(title)) {
    titleDisplay = title
  }

  let authorDisplay = ''
  if (authors?.length) {
    authorDisplay = authors?.join('; ')
  }

  let linkDisplay = ''
  if (!isUndefined(infoLink)) {
    linkDisplay = infoLink
  }

  return (
        <BookCard className='card'>
            {thumbnail && <img src={thumbnail} alt="book cover" />}
            {titleDisplay && <h2><u>Title</u></h2>}
            <p>{titleDisplay.length > 48 ? titleDisplay.substr(0, 50).concat('...') : titleDisplay}</p>
            {authorDisplay && <h2><u>Author(s)</u></h2>}
            <p>{authorDisplay.length > 48 ? authorDisplay.substr(0, 50).concat('...') : authorDisplay}</p>
            {publishedDate && <h2><u>Published Date</u></h2>}
            <p>{publishedDate}</p>
            {linkDisplay && <a href={linkDisplay}>More Info <FiChevronRight/></a>}
        </BookCard>
  )
}

export default BooksComponent;