import BookShow from "./BookShow";
function BookList({ books, onDelete, onEdith }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        onDelete={onDelete}
        onEdith={onEdith}
      />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
}
export default BookList;
