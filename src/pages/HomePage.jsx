import { Header } from "../components/Header.jsx";
import { SectionHero } from "../components/SectionHero.jsx";
import { SectionBookGrid } from "../components/SectionBookGrid.jsx";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { getBooks } from "../api/gutendex.js";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // search params
  const query = searchParams.get("query") ?? "";
  const page = Number(searchParams.get("page") ?? "1");
  const category = searchParams.get("category") ?? "";

  const [status, setStatus] = useState("idle"); // states: idle loading ready error
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    items: [],
    total: 0,
    next: null,
    prev: null,
  });

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

  // calling the API when query/page/category changes
  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    setError(null);
    getBooks(
      {
        search: query || undefined,
        page: page > 1 ? page : undefined,
        topic: category || undefined,
      },
      controller
    )
      .then((responseData) => {
        setData(responseData);
        setStatus("ready");
      })

      .catch((err) => {
        if (axios.isCancel?.(err) || err.name === "CanceledError") return;
        setError(err.message || "Something went wrong");
        setStatus("error");
      });

    return () => controller.abort();
  }, [query, page, category]); //dependency array

  const items = data.items;

  return (
    <>
      <Header
        category={category}
        setCategory={setCategory}
        disabled={status === "loading"}
      />
      <SectionHero query={query} setQuery={setQuery} />
      {status === "loading" && (
        <div className="grid-skeleton">
          <span class="loader"></span>
        </div>
      )}
      {status === "error" && <p>Error: {error}</p>}
      {status === "ready" && (
        <SectionBookGrid page={page} setPage={setPage} items={items} />
      )}
    </>
  );
};
