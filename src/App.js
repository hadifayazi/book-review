import { useState } from "react";
import BookCreate from "./components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);

  const handleBookCreate = (title, author, review) => {
    console.log(
      `Book Title: ${title}, Book Author: ${author} ,Book Review: ${review}`
    );
  };
  return (
    <div>
      <BookCreate onBookCreate={handleBookCreate} />
    </div>
  );
}
export default App;
