import bookImage from "../assets/book-image.png";

export const books = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  image: bookImage,
  title: "Pride and Prejudice",
  author: "Austen, Jane",
  downloads: "Downloads: 78613",
}));
