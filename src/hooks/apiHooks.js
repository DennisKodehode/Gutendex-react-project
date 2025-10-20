import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBooks, getBookById } from "../api/gutendex";

export const useBooks = ({ query, page, category }) => {
  return useQuery({
    // how TanStack Query tells different API calls apart.
    queryKey: ["books", { query, page, category }],
    queryFn: ({ signal, queryKey }) => {
      // extracts the object from the key
      const [, param] = queryKey;
      return getBooks(
        {
          search: param.query || undefined,
          page: page > 1 ? page : undefined,
          topic: param.category || undefined,
        },
        { signal }
      );
    },
    keepPreviousData: true,
  });
};

export const useBook = (id) => {
  const queryClient = useQueryClient();
  // checks cache to see if we already have the book requested and returns it if we do
  const initialData = () => {
    const pages = queryClient.getQueriesData({ queryKey: ["books"] });
    for (const [, data] of pages) {
      const result = data?.items?.find(
        (book) => String(book.id) === String(id)
      );
      if (result) return result;
    }
    return undefined;
  };

  return useQuery({
    queryKey: ["book", String(id)],
    queryFn: ({ signal }) => getBookById(id, { signal }),
    initialData,
    staleTime: 60 * 60_000,
  });
};
