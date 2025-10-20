import { Header } from "../components/Header.jsx";
import { SectionHero } from "../components/SectionHero.jsx";
import { SectionBookGrid } from "../components/SectionBookGrid.jsx";
import { useSearchParams } from "react-router-dom";
import { useBooks } from "../hooks/apiHooks.js";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // search params
  const query = searchParams.get("query") ?? "";
  const page = Number(searchParams.get("page") ?? "1");
  const category = searchParams.get("category") ?? "";

  // helpers to write URL params
  const setQuery = (nextQuery) => {
    const next = new URLSearchParams(searchParams);
    if (nextQuery) next.set("query", nextQuery);
    else next.delete("query");
    next.set("page", "1");
    setSearchParams(next);
  };

  const setPage = (p) => {
    const next = new URLSearchParams(searchParams);
    next.set("page", String(p));
    setSearchParams(next);
  };

  const setCategory = (nextCategory) => {
    const next = new URLSearchParams(searchParams);
    if (nextCategory) next.set("category", nextCategory);
    else next.delete("category");
    next.set("page", "1");
    setSearchParams(next);
  };

  const { data, isPending, isError, error } = useBooks({
    query,
    page,
    category,
  });
  const items = data?.items ?? [];

  const makePageHref = (p) => {
    const next = new URLSearchParams(searchParams);
    next.set("page", String(p));
    return `/?${next.toString()}`;
  };

  return (
    <>
      <Header activeCategory={category} onPickCategory={setCategory} />
      <SectionHero query={query} setQuery={setQuery} />
      {isPending && (
        <div className="grid-skeleton">
          <span className="loader"></span>
        </div>
      )}
      {isError && <p>Error: {error?.message} || "Something went wrong"</p>}
      {!isPending && !isError && (
        <SectionBookGrid
          page={page}
          setPage={setPage}
          items={items}
          total={data?.total ?? 0}
          makePageHref={makePageHref}
        />
      )}
    </>
  );
};
