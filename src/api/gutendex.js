import { api } from "./axios";
// controller is supposed to bounce search 1 into search 2 if searching something quick and not return the wrong thing
export async function getBooks(params = {}, controller) {
  // turns it into example:  ?search=pride&page=2
  const response = await api.get("/", { params, signal: controller?.signal });

  const json = response.data; //axios already turned it into json

  // change names we get from the api and sets a default if nothing / normalize to names that is easier to work with
  return {
    items: json.results ?? [],
    total: json.count ?? 0,
    next: json.next ?? null,
    prev: json.previous ?? null,
  };
}
