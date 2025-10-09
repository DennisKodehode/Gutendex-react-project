export const SectionHero = () => {
  return (
    <section className="section-hero">
      <div className="hero-title-wrapper">
        <h1>Explore the world of literature.</h1>
        <p className="hero-sub-title">
          Search by title or choose a category to begin.
        </p>
      </div>
      <input
        className="searchbar"
        type="text"
        id="search"
        name="search"
        placeholder="Search by title or author…"
      />
    </section>
  );
};
