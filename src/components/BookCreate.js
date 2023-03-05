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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input onChange={handleTitleChange} value={title} />
        </div>
        <div>
          <label>Author:</label>
          <input onChange={handleAuthorChange} value={author} />
        </div>
        <div>
          <label>Review:</label>
          <input onChange={handleReviewChange} value={review} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default BookCreate;
