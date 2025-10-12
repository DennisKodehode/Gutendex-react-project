import axios from "axios";

export const api = axios.create({
  baseURL: "https://gutendex.com/books",
  //   cancels request if it takes longer than 8s
  timeout: 8000,
});
