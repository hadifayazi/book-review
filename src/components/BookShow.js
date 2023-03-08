import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, title, author, review) => {
    setShowEdit(false);
    onEdit(id, title, author, review);
  };

  let content = (
    <div className="card" style={{ backgroundColor: "grey" }}>
      <button className="delete" onClick={handleClick}></button>
      <button className="edit" onClick={handleEditClick}>
        Edith
      </button>

      <div className="card-image">
        <figure className="image" style={{ width: "200px" }}>
          <img
            src={`https://picsum.photos/seed/${book.id}/300/300`}
            alt="{book.title}"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Title: {book.title}</p>
            <div className="book-show">Author: {book.author}</div>
          </div>
        </div>

        <div className="content">
          <p>Review: {book.review}</p>
        </div>
      </div>
    </div>
  );

  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }
  return content;
}
export default BookShow;
