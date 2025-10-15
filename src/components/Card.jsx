import favIcon from "../assets/Favorite.svg";
import { Link } from "react-router-dom";

export const Card = ({
  data: {
    id: id,
    formats: { "image/jpeg": image },
    title,
    authors: [{ name: authorName } = {}],
    download_count: downloads,
  },
}) => {
  return (
    <div className="book-card">
      <div className="favicon-wrapper">
        <img src={favIcon} alt="heart icon" />
      </div>
      <Link to={`/book/:${id}`}>
        <img src={image} alt="book cover image" className="card-image" />
        <div className="card-title-wrapper">
          <h3 className="card-title"> {title} </h3>
        </div>
        <p className="p2-r card-author"> {authorName ?? "Unknown author"} </p>
        <p className="p2-r card-downloads"> {`Downloads: ${downloads}`} </p>
      </Link>
    </div>
  );
};
