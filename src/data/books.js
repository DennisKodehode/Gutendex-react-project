import bookImage from "../assets/book-image.png";

const BASE = "https://gutendex.com/books";

const toQuery = (params = {}) => {
  // turns parameters into an array
  // example: { search: "romance", page: 2 }
  // becomes: [["search", "romance"], ["page", 2]]
  Object.entries(params)
    // removes any entries where the value is null, undefined, or an empty string
    .filter(([, value]) => value != null && value !== "")
    // encodes key value pair safely for a URL
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)} =${encodeURIComponent(value)}`
    )
    // combines all pairs into one long string, joined with &
    .join("&");
};

// if the user types a new search before the previous one finishes, cancel the old network request
export function createAbortable() {
  const ctrl = new AbortController();
  return { signal: ctrl.signal, cancel: () => ctrl.abort() };
}

export async function fetchBook(params = {}, signal) {
  const queryString = toQuery(params);
  const url = queryString ? `${BASE}/?${queryString}` : BASE;
  // API CALL
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  const json = await response.json();

  // rename the keys in the object i get from the apis, so it is easier to work with and if its empty sets a default.
  const normalized = {
    items: json.results ?? [],
    total: json.count ?? 0,
    next: json.next ?? null,
    prev: json.previous ?? null,
  };

  return normalized;
}

export const books = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  image: bookImage,
  title: "Pride and Prejudice",
  author: "Austen, Jane",
  downloads: "Downloads: 78613",
}));
