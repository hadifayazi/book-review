import { useState } from "react";

function BookCreate({ onBookCreate }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [review, setReview] = useState("");

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
    onBookCreate(title, author, review);
    setTitle("");
    setAuthor("");
    setReview("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book:</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input className="input" onChange={handleTitleChange} value={title} />

        <label>Author:</label>
        <input className="input" onChange={handleAuthorChange} value={author} />

        <label>Review:</label>
        <textarea
          className="review-text"
          onChange={handleReviewChange}
          value={review}
          rows="15"
          cols="33"
        />

        <button className="button">Submit</button>
      </form>
    </div>
  );
}
export default BookCreate;
