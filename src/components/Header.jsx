import favIcon from "../assets/Favorite.png";

export const Header = () => {
  return (
    <header>
      <h2>Gutendex</h2>
      <nav>
        <button>All</button>
        <button>War</button>
        <button>Philosophy</button>
        <button>Tragedy</button>
        <button>Adventure</button>
        <button>Justice</button>
        <button>Power</button>
        <button>Society</button>
        <button>Morality</button>
        <button>Fantasy</button>
        <button>Romance</button>
        <button>Thriller</button>
        <button>Mystery</button>
        <button>Fiction</button>
      </nav>
      <img src={favIcon} alt="heart icon" />
    </header>
  );
};
