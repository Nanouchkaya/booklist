import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {title: 'the name of the wind', author:'patrick rothfuss', id:1},
    {title: 'Aeternia', author:'gabriel katz', id:2},
    {title: 'Sharakhaï', author:'bradley beaulieu', id:3}
  ]);
  const addBook = (title, author) => {
    setBooks([
      ...books,
      {title, author, id: uuidv1()}
    ])
  }
  const removeBook = (id) => {
    setBooks(
      books.filter(book => book.id !== id)
    );
  }
  return ( 
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {children}
    </BookContext.Provider>
   );
}
 
export default BookContextProvider;