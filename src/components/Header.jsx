import favIcon from "../assets/Favorite.svg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const categories = [
  "All",
  "War",
  "Philosophy",
  "Tragedy",
  "Adventure",
  "Justice",
  "Power",
  "Society",
  "Morality",
  "Fantasy",
  "Romance",
  "Thriller",
  "Mystery",
  "Fiction",
];

export const Header = ({ activeCategory = "", onPickCategory }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get("category") || "";

  const handlePickCategory = (value) => {
    // If Home passed a handler, use it (keeps existing Home behavior intact)
    if (typeof onPickCategory === "function") {
      onPickCategory(value);
      return;
    }

    // Otherwise, we're on Details/Favorites: navigate to Home with the category
    const params = new URLSearchParams();
    params.set("page", "1");
    if (value) {
      // Only include category when it's not "All"
      params.set("category", value);
    }
    navigate({ pathname: "/", search: params.toString() });
  };

  return (
    <header>
      <Link to="/">
        <h2 className="logo">Gutendex</h2>
      </Link>

      <nav className="category-menu">
        {categories.map((category) => {
          const value = category === "All" ? "" : category;
          const active = value === ((activeCategory ?? urlCategory) || "");
          return (
            <button
              key={category}
              className={`category-pill p2-b ${active ? "is-active" : ""}`}
              onClick={() => handlePickCategory(value)}
            >
              {category}
            </button>
          );
        })}
      </nav>

      <Link to="/favorites">
        <img src={favIcon} alt="heart icon" className="fav-icon" />
      </Link>
    </header>
  );
};
