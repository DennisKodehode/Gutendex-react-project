import { Card } from "./card";
import { PageControls } from "./PageControls";

export const SectionBookGrid = (props) => {
  return (
    <section className="section-book-grid">
      <div className="book-grid">
        {props.data.map((book) => {
          return <Card data={book} />;
        })}
      </div>
      <PageControls />
    </section>
  );
};
