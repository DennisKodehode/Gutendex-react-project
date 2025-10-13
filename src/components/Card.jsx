import favIcon from "../assets/Favorite.svg";

export const Card = ({
  data: {
    formats: { "image/jpeg": image },
    title,
    authors: [{ name: authorName } = {}],
    download_count: downloads,
  },
}) => {
  return (
    <>
      <div className="book-card">
        <div className="favicon-wrapper">
          <img src={favIcon} alt="heart icon" />
        </div>
        <img src={image} alt="book cover image" className="card-image" />
        <h3 className="card-title"> {title} </h3>
        <p className="p2-r card-author"> {authorName ?? "Unknown author"} </p>
        <p className="p2-r card-downloads"> {downloads} </p>
      </div>
    </>
  );
};
