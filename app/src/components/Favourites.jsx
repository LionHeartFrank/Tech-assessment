//NOTE - This component was merged into the booklist component but is kept here for reference
// This component is used to display the list of favorite books

import { useState } from 'react';

import '../../src/App.css'
import '../styles/BookList.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Favorites() {
const [favorites, setFavorites] = useState([]);


const handleRemoveFromFavorites = (book) => {
        const newFavorites = favorites.filter((favorite) => favorite.id !== book.id);
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
const handleClearFavorites = () => {
        setFavorites([]);
        localStorage.removeItem('favorites');
    }


  return (
    <div className="favorites">
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

                <button onClick={() => handleRemoveFromFavorites(book)}>Remove from Favorites</button>
            </div>
          ))}
        </>
      ) : (
        <>
          <p>No favorites added yet.</p>
        </>
      )}
        <button onClick={handleClearFavorites} className="clear-favorites">Clear Favorites</button>

        </div>
            <button onClick={handleClearFavorites} className="clear-favorites">Clear Favorites</button>
    </div>
  );
}

