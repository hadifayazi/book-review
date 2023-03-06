import BookShow from "./BookShow";
function BookList({ books, onDelete }) {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return (
    <div className="book-list">
      {renderedBooks} onDelete={onDelete}
    </div>
  );
}
export default BookList;
