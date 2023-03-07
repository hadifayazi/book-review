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

  const editBookById = (id, title, author, review) => {
    const updatedBooks = books.filter((book) => {
      if (book.id === id) {
        return { ...book, id, title, author, review };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onBookCreate={handleBookCreate} />
    </div>
  );
}
export default App;
