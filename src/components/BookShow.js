import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete, onEdith }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div class="card" style={{ backgroundColor: "grey" }}>
      <button class="delete" onClick={handleClick}></button>
      <button class="edit" onClick={handleEditClick}>
        Edith
      </button>

      <div class="card-image">
        <figure class="image" style={{ width: "200px" }}>
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="{book.title}"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{book.title}</p>
            <p>{book.id}</p>
            <div className="book-show">{book.author}</div>
          </div>
        </div>

        <div class="content">
          <p>{book.review}</p>
        </div>
      </div>
    </div>
  );

  if (showEdit) {
    content = <BookEdit onEdith={onEdith} />;
  }
  return content;
}
export default BookShow;
