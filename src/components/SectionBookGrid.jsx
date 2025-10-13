import { Card } from "./card";
import { PageControls } from "./PageControls";
import { books } from "../data/books";

export const SectionBookGrid = ({ items, page, setPage }) => {
  return (
    <section className="section-book-grid">
      <div className="book-grid">
        {items.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
      <PageControls page={page} setPage={setPage} />
    </section>
  );
};
