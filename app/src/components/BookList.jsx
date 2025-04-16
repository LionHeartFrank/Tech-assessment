import { useEffect, useState } from 'react';
import books from '../../public/books.json';

import '../../src/App.css'
import '../styles/BookList.css'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function BookList() {
const [favorites, setFavorites] = useState([]);

const handleAddToFavorites = (book) => {
        const newFavorites = [...favorites, book];
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }
, []);

  const handleRemoveFromFavorites = (favBook) => {
    const newFavorites = favorites.filter((favorite) => favorite !== favBook);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };
  
const handleClearFavorites = () => {
      setFavorites([]);
      localStorage.removeItem('favorites');
  }



  return (
    <div className="book-list-container">
    <div className='grid'>
      <div className="grid-two-thirds">
        <h2>Books</h2>
        <div className="book-list"> 
          {books.map((book, index) => (
            <div className="book-list-item" key={book.id || `book-${index}`}>
                <p>{Array.isArray(book.author) ? book.author.join(', ') : book.author}</p>
              <h3>{book.title}</h3>
              <p>{book.pages} pages</p>
              <img src={book.imageLink} alt={`${book.title} + ' ' + ${book.author}`} className='book-img' />
              <p>{book.year}, {book.language}</p>
              <button onClick={() => handleAddToFavorites(book)}>Add to Favorites</button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-third">
        <h2>Favorites</h2>
        <div className="favorites-list">
        {favorites.length > 0 ? (
          <>
            {favorites.map((favBook, index) => (
              <div className="favorites-item" key={favBook.id || `fav-${index}`}>
                  <p>{Array.isArray(favBook.author) ? favBook.author.join(', ') : favBook.author}</p>
                  <h3>{favBook.title}</h3>
                  <p>{favBook.pages} pages</p>
                  <img src={favBook.imageLink} alt={`${favBook.title} + ' ' + ${favBook.author}`} className='book-img' />
                  <p>{favBook.year}, {favBook.language}</p>

                  <button className='btn-rmv' onClick={() => handleRemoveFromFavorites(favBook)}>Remove</button>
              </div>
            ))}
            <button onClick={handleClearFavorites} className="btn-clear">Clear Favorites</button>
          </>
        ) : (
          <>
            <p>No favorites added yet.</p>
          </>
        )}
        

        </div>
      </div>     
    </div>
    </div>
  );
}
