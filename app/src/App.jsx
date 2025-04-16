
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';


export default function App() {
 
  return (
    <div className="App">
    <div className="header">
      <img src="https://png.pngtree.com/png-clipart/20240830/original/pngtree-an-open-book-in-the-sky-circle-with-stars-vector-png-image_15888684.png" alt="BookStar Logo" className="logo" />
      <h1 className='title'>BookStar*</h1>
      <p>
        BookStar is a book list app that allows you to search for books, add them to your favorites list, and view your favorite books. You can also remove books from your favorites list if you change your mind.
      </p>
    </div>

     
      <div>
        {/* <div className="grid-two-thirds">
          <h2>Books</h2> */}
          <BookList/>
        {/* </div>
        <div className="grid-third">
          <h2>Favorites</h2>
          <Favorites />
        </div> */}
      </div>
      <footer className="footer">
        <p>Made with ❤️ by Frank Nave for CodeOp tech School</p>
    </footer>
  </div>
  )
}

