import bookImage from "../assets/book-image.png";
import favIcon from "../assets/Favorite.png";

const books = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  image: bookImage,
  title: "Pride and Prejudice",
  author: "Austen, Jane",
  downloads: "Downloads: 78613",
}));

export const SectionBookGrid = () => {
  return (
    <section className="section-book-grid">
      <div className="book-grid">
        {books.map((book) => {
          return (
            <div className="book-card" key={book.id}>
              <div className="favicon-wrapper">
                <img src={favIcon} alt="heart icon" />
              </div>
              <img src={book.image} alt="book cover image" />
              <h3> {book.title} </h3>
              <p className="p2-r card-author"> {book.author} </p>
              <p className="p2-r card-downloads"> {book.downloads} </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
