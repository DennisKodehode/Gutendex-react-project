export const SectionDetails = () => {
  return (
    <section className="section-details">
      <div className="details-image-wrapper">
        <img src="" alt="" />
      </div>
      <div className="details-right-wrapper">
        <div className="back+title">
          <div className="back-link-wrapper">
            <p className="p2-r back-link"></p>
          </div>
          <div className="title+author-wrapper">
            <h1></h1>
            <p className="p-big details-author"></p>
          </div>
        </div>
        <div className="details-meta-data">
          <p className="p1-r details-language"></p>
          <p className="p1-r details-downloads"></p>
        </div>
        <p className="p2-r details-summary"></p>
        <div className="category-pills-wrapper">
          <div className="details-category-pill">
            <p className="p-small"></p>
          </div>
        </div>
        <div className="cta+secondary-wrapper">
          <button className="cta">Read Book</button>
          <button className="secondary-button">Add to favorites</button>
        </div>
      </div>
    </section>
  );
};
