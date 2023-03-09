import { useState } from "react";
import useBooksContext from "../hooks/useBookContextHook";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();
  const handleClick = () => {
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = (
    <div className="card" style={{ backgroundColor: "grey" }}>
      <button className="delete" onClick={handleClick}></button>
      <button className="edit" onClick={handleEditClick}>
        Edit
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
