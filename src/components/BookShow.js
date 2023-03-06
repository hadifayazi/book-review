function BookShow({ book, onDelete }) {
  const handleClick = () => {
    onDelete(book.id);
  };
  return (
    <div>
      <div className="book-show">{book.title}</div>;
      <div className="book-show">{book.author}</div>;
      <div className="book-show">{book.review}</div>;
      <div className="actions">
        <button className="delete" onClick={handleClick}>
          delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
