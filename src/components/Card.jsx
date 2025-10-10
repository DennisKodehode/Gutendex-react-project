import favIcon from "../assets/Favorite.svg";

export const Card = ({ data: { id, image, title, author, downloads } }) => {
  return (
    <>
      <div className="book-card" key={id}>
        <div className="favicon-wrapper">
          <img src={favIcon} alt="heart icon" />
        </div>
        <img src={image} alt="book cover image" />
        <h3> {title} </h3>
        <p className="p2-r card-author"> {author} </p>
        <p className="p2-r card-downloads"> {downloads} </p>
      </div>
    </>
  );
};
