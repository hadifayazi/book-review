import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/useBookContextHook";

function App() {
  const { fetchBooks } = useBooksContext();
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading list:</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}
export default App;
