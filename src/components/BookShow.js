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
    console.log(title, author, review);
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
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="{book.title}"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{book.title}</p>
            <p>{book.id}</p>
            <div className="book-show">{book.author}</div>
          </div>
        </div>

        <div className="content">
          <p>{book.review}</p>
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
