import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleBookCreate = (title, author, review) => {
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random * 10000), title, author, review },
    ];

    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onBookCreate={handleBookCreate} />
    </div>
  );
}
export default App;
