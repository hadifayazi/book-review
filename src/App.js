import { useState } from "react";
import BookCreate from "./components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);

  const handleBookCreate = (title, author, review) => {
    console.log(
      `Book Title: ${title}, Book Author: ${author} ,Book Review: ${review}`
    );
    console.log(books.length);
    const updatedBooks = [...books, { title, author, review }];

    setBooks(updatedBooks);
  };
  return (
    <div>
      <BookCreate onBookCreate={handleBookCreate} />
    </div>
  );
}
export default App;
