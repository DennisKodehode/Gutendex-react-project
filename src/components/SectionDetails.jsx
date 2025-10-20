import { Link } from "react-router-dom";
import detailsBookImg from "../assets/Book-image-details.png";
import { useFavorites } from "../hooks/useFavorites";

const pickReadingUrl = (formats = {}) => {
  const entries = Object.entries(formats);

  const html =
    entries.find(([k]) => k.startsWith("text/html"))?.[1] ??
    entries.find(([k]) => k.includes("text/html"))?.[1];
  if (html) return html;

  const txt =
    entries.find(([k]) => k.startsWith("text/plain"))?.[1] ??
    entries.find(([k]) => k.includes("text/plain"))?.[1];
  if (txt) return txt;

  const pdf = entries.find(([k]) => k.includes("application/pdf"))?.[1];
  if (pdf) return pdf;

  const epub = entries.find(([k]) => k.includes("application/epub"))?.[1];
  if (epub) return epub;

  return entries[0]?.[1] ?? null;
};

export const SectionDetails = ({ book }) => {
  const {
    formats = {},
    title = "Unknown title",
    authors = [],
    download_count,
    languages = [],
    bookshelves = [],
    summaries = [],
    id,
  } = book || {};

  const { isFavorite, toggleFavorite } = useFavorites();

  const image = formats?.["image/jpeg"];
  const authorName = authors[0]?.name ?? "Unknown author";
  const language = languages[0] ?? "Unknown";
  const readingUrl = pickReadingUrl(formats);

  const pills = bookshelves.map((shelf) => shelf.replace(/^Category:\s*/i, ""));

  return (
    <section className="section-details">
      <div className="details-image-wrapper">
        <img src={image} alt={`${title} cover`} className="details-image" />
      </div>
      <div className="details-right-wrapper">
        <div className="back-title">
          <div className="back-link-wrapper">
            <Link to="/" className="p2-r back-link">
              ← Back to home
            </Link>
          </div>
          <div className="title-author-wrapper">
            <h1>{title}</h1>
            <p className="p-big details-author">{authorName}</p>
          </div>
        </div>
        <div className="details-meta-data">
          <p className="p1-r details-language">Language: {language}</p>
          <p className="p1-r details-downloads">Downloads: {download_count}</p>
        </div>
        <p className="p2-r details-summary">{summaries[0]}</p>

        {pills.length > 0 && (
          <div className="category-pills-wrapper">
            {pills.map((c) => (
              <div key={c} className="details-category-pill">
                <p className="p-small">{c} </p>
              </div>
            ))}
          </div>
        )}
        <div className="cta-secondary-wrapper">
          <a href={readingUrl} target="_blank" className="cta">
            Read book
          </a>
          <button
            className="secondary-button"
            onClick={() => toggleFavorite(id)}
          >
            {isFavorite(id) ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      </div>
    </section>
  );
};
