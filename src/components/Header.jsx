import favIcon from "../assets/Favorite.svg";

export const Header = () => {
  return (
    <header>
      <h2 className="logo">Gutendex</h2>
      <nav className="category-menu">
        <button className="category-pill p2-b">All</button>
        <button className="category-pill p2-b">War</button>
        <button className="category-pill p2-b">Philosophy</button>
        <button className="category-pill p2-b">Tragedy</button>
        <button className="category-pill p2-b">Adventure</button>
        <button className="category-pill p2-b">Justice</button>
        <button className="category-pill p2-b">Power</button>
        <button className="category-pill p2-b">Society</button>
        <button className="category-pill p2-b">Morality</button>
        <button className="category-pill p2-b">Fantasy</button>
        <button className="category-pill p2-b">Romance</button>
        <button className="category-pill p2-b">Thriller</button>
        <button className="category-pill p2-b">Mystery</button>
        <button className="category-pill p2-b">Fiction</button>
      </nav>
      <img src={favIcon} alt="heart icon" className="fav-icon" />
    </header>
  );
};
