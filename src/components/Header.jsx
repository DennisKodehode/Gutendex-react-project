import favIcon from "../assets/Favorite.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h2 className="logo">Gutendex</h2>
      </Link>

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
      <Link to="/favorites">
        <img src={favIcon} alt="heart icon" className="fav-icon" />
      </Link>
    </header>
  );
};
