import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required></input>

      <label htmlFor="author">Author</label>
      <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required></input>

      <input type="submit" value="Add book" />
    </form>
   );
}
 
export default BookForm;