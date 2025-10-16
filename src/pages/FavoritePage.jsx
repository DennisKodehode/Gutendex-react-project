import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { useParams, Link } from "react-router-dom";
import { getBookById } from "../api/gutendex";
import { useFavorites } from "../hooks/useFavorites";
import { useQueries } from "@tanstack/react-query";
import emptyFav from "../assets/Empty-fav.svg";

export const FavoritePage = () => {
  const { all: favoriteIds } = useFavorites();

  return (
    <>
      <Header />

      {favoriteIds.length === 0 ? (
        <section className="favorites-empty">
          <div className="favorites-title-wrapper">
            <h1>No favorites yet</h1>
            <p className="p1-r">
              Start exploring and add books you love to your favorites.
            </p>
          </div>
          <div className="favorites-empty-grid">
            <img src={emptyFav} alt="illustration of book" />
          </div>
        </section>
      ) : (
        <FavoriteList ids={favoriteIds} />
      )}
    </>
  );
};

function FavoriteList({ ids }) {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["book", String(id)],
      queryFn: ({ signal }) => getBookById(id, { signal }),
      staleTime: 60 * 60_000,
    })),
  });

  const isLoading = results.some((r) => r.isPending);
  const isError = results.some((r) => r.isError);
  const items = results.map((r) => r.data).filter(Boolean);

  if (isLoading)
    return (
      <div className="grid-skeleton">
        <span className="loader"></span>
      </div>
    );
  if (isError)
    return (
      <div className="grid-skeleton">
        <p>We couldn’t load some favorites. Try again.</p>
      </div>
    );
  if (items.length === 0)
    return (
      <section className="favorites-empty">
        <img src={emptyFav} alt="illustration of book" />
        <h1>No favorites yet</h1>
        <p className="p1-r">
          Start exploring and add books you love to your favorites.
        </p>
      </section>
    );

  return (
    <section className="section-book-grid">
      <h1>Your Favorite Books</h1>
      <p className="p1-r">Books you’ve saved for later reading.</p>
      <div className="book-grid">
        {items.map((book) => (
          <Card key={book.id} data={book} />
        ))}
      </div>
    </section>
  );
}
