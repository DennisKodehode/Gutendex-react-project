import { Link } from "react-router-dom";

export const PageControls = ({ page, total, makePageHref }) => {
  const totalPages = Math.max(1, Math.ceil((total ?? 0) / 32));

  const WINDOW = 3;
  let start = Math.max(1, page - Math.floor(WINDOW / 2));
  let end = start + WINDOW - 1;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - WINDOW + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);

  const isFirst = page <= 1;
  const isLast = page >= totalPages;

  return (
    <div className="page-control-wrapper">
      {/* Prev */}
      {isFirst ? (
        <div className="page-button is-disabled">Prev</div>
      ) : (
        <Link className="page-button" to={makePageHref(page - 1)}>
          Prev
        </Link>
      )}

      {/* 1-2-3 window */}
      {pages.map((p) => (
        <Link
          key={p}
          to={makePageHref(p)}
          className={`page-button number ${p === page ? "is-active" : ""}`}
        >
          {p}
        </Link>
      ))}

      {/* Next */}
      {isLast ? (
        <div className="page-button is-disabled">Next</div>
      ) : (
        <Link className="page-button" to={makePageHref(page + 1)}>
          Next
        </Link>
      )}
    </div>
  );
};
