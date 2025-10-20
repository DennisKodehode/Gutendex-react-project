export const SectionHero = ({ query, setQuery }) => {
  return (
    <section className="section-hero">
      <div className="hero-title-wrapper">
        <h1>Explore the world of literature.</h1>
        <p className="hero-sub-title">
          Search by title or choose a category to begin.
        </p>
      </div>
      <form
        name="search"
        id="search"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          setQuery((fd.get("query") || "").toString());
        }}
      >
        <input
          name="query"
          defaultValue={query}
          className="searchbar"
          type="text"
          id="search"
          placeholder="Search by title, author..."
        />
      </form>
    </section>
  );
};
