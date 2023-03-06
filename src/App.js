import { useState } from "react";
import BookCreate from "./components/BookCreate";
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
    <div>
      <BookCreate onBookCreate={handleBookCreate} />
    </div>
  );
}
export default App;
