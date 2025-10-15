import { Link } from "react-router-dom";
import detailsBookImg from "../assets/Book-image-details.png";

export const SectionDetails = () => {
  return (
    <section className="section-details">
      <div className="details-image-wrapper">
        <img src={detailsBookImg} alt="" />
      </div>
      <div className="details-right-wrapper">
        <div className="back-title">
          <div className="back-link-wrapper">
            <a href="/" className="p2-r back-link">
              ← Back to results
            </a>
          </div>
          <div className="title-author-wrapper">
            <h1>Pride and Prejudice</h1>
            <p className="p-big details-author">Austen, Jane</p>
          </div>
        </div>
        <div className="details-meta-data">
          <p className="p1-r details-language">Language: English</p>
          <p className="p1-r details-downloads">Downloads: 78613</p>
        </div>
        <p className="p2-r details-summary">
          \"Pride and Prejudice\" by Jane Austen is a classic novel written in
          the early 19th century. The story delves into themes of love, social
          class, and individual agency, largely revolving around the life of
          Elizabeth Bennet, one of five sisters from a modest but genteel family
          navigating the complex social landscape of Regency England. The
          opening of the novel introduces the seemingly universal truth that a
          single man of wealth is a target for matchmaking mothers in the
          neighborhood. Mrs. Bennet is eager to marry off her daughters and is
          excited to hear about the arrival of Mr. Bingley, a wealthy young man
          who has taken up residence at Netherfield Park. Mr. Bennet's teasing
          yet indifferent nature contrasts sharply with Mrs. Bennet's anxious
          and businesslike demeanor as she plans to visit Mr. Bingley to create
          an opportunity for her daughters. Their witty exchanges set the tone
          for the story's exploration of family dynamics and social
          expectations, while also hinting at deeper character developments and
          the challenges Elizabeth will face regarding love and prejudice in her
          interactions with Mr. Darcy and the Bingley family. (This is an
          automatically generated summary.)
        </p>
        <div className="category-pills-wrapper">
          <div className="details-category-pill">
            <p className="p-small">Romance</p>
          </div>
        </div>
        <div className="cta-secondary-wrapper">
          <button className="cta">Read Book</button>
          <button className="secondary-button">Add to favorites</button>
        </div>
      </div>
    </section>
  );
};
