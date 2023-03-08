import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleBookCreate = (title, author, review) => {
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 10000), title, author, review },
    ];

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle, newAuthor, newReview) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...books,
          title: newTitle,
          author: newAuthor,
          review: newReview,
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <h1>Reading list:</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onBookCreate={handleBookCreate} />
    </div>
  );
}
export default App;
