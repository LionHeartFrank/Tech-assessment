# Front End Recruitment Test

### This project will be divided in three parts:

`Data`

- Getting information (data) from books.json which is inside "public" folder. Path: /app/public/books.json.
- List the first 20 books in your main page. Including the picture and title.

`Design the app`

- In the root of this folder, there's a model for you to follow to design the App. Try to make it look as much similar as you can. Use you imagination to add more features, if you have time.

`Bonus implementation:`

- Add a favorite button to each of the books. When you click to favorite this book, it will be created a favorite list.

`Note: `

- Please update the questions from the Question section on this file with your answers.

# Requirements

- Do no spend more than 2-3 hours on a submission.

- We also take into consideration the Answers to technical questions, code organization, identation and comments. If you have anything to add or want to explain a feature, you can leave a note on the comments section below

---

# Questions

1. How long did you spend on the coding?
   **Answer:** 
   >I spent about 2 hrs solving the problems and about an hour styling

2. What would you add to your solution if you had more time?
   **Answer:**
   
    >**i.** I wasn't able to make the Favorites.jsx a separate component from the BooksList.jsx because I still struggle with passing the functionality of adding an from one component to another. I'd like to go over this again
    **ii.** Use an API to fetch the data with search functionality (Google books API or Open Library API(s))
    **iii.** I'd love to add a profile and login feature with auth & auth
    **iv.** I used local storage to save the lists, or several lists could max it out, so I would like to use a database -- preferably hosted.
    **v.** Clean up the styling more and add icons 
    **vi.** Make it fully responsive and accessible

3. Share a code snippet that you are proud of and explain what it does
   **Answer**
```
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
```
>I am firstly proud of this code because I am so used to working with APIs and the backend that I completely forgot how to very simply grab and display data from a .JSON file. This took a bit of time to figure out, but after looking at the books.JSON file and using the .map() method, I was finally able to display the books. 

>Secondly I am proud of the styling as I displayed it in a well organized grid that resembles the provided sample picture, but with my own added style. 


1. How would you track down a performance issue in production? Have you ever had to do this?
   The best way to track down issues is through user testing and QA testing. 
   **Answer:**
    >Throughout the build phase numerous bugs are likely to arise, but often the most insidious bugs require the actual USE of the product, not just what we do during the build. That is why testing is so important!

    >User testing is great because it allows UX issues to be tracked and changed, and as a bonus users will inevitably find bugs. These bugs may even be something the QA team misses. 

---

# Comments

---

# Submission

After completing the challenge, commit it to Github.
