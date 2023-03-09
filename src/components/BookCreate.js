import { useState, useContext } from "react";
import BookContext from "../context/books";

function BookCreate() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [review, setReview] = useState("");
  const { handleBookCreate } = useContext(BookContext);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleBookCreate(title, author, review);
    setTitle("");
    setAuthor("");
    setReview("");
  };

  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-half">
        <h3>Add a Book:</h3>
        <form onSubmit={handleSubmit}>
          <label className="label">Title:</label>
          <input className="input" onChange={handleTitleChange} value={title} />

          <label className="label">Author:</label>
          <input
            className="input"
            onChange={handleAuthorChange}
            value={author}
          />

          <label className="label">Review:</label>
          <textarea
            className="textarea"
            onChange={handleReviewChange}
            value={review}
            rows="15"
            cols="33"
          />

          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default BookCreate;
