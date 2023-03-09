import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const books = await axios.get("http://localhost:3001/books");
    setBooks(books.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleBookCreate = async (title, author, review) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
      author,
      review,
    });
    console.log(response.data);
    const updatedBooks = [...books, response.data];

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
