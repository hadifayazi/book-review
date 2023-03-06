function BookShow({ book, onDelete }) {
  const handleClick = () => {
    onDelete(book.id);
  };
  return (
    <div class="card">
      <button class="delete" onClick={handleClick}></button>
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
}
export default BookShow;
