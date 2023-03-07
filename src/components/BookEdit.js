import { useState } from "react";
function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [review, setReview] = useState(book.review);

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
    onSubmit(book.id, title, author, review);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="label">Title:</label>
        <input className="input" onChange={handleTitleChange} value={title} />

        <label className="label">Author:</label>
        <input className="input" onChange={handleAuthorChange} value={author} />

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
  );
}
export default BookEdit;
