import { Card } from "./card";
import { PageControls } from "./PageControls";
import { books } from "../data/books";

export const SectionBookGrid = () => {
  return (
    <section className="section-book-grid">
      <div className="book-grid">
        {books.map((book) => {
          return <Card data={book} />;
        })}
      </div>
      <PageControls />
    </section>
  );
};
