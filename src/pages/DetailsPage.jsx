import { Header } from "../components/Header";
import { SectionDetails } from "../components/SectionDetails";
import { useParams } from "react-router-dom";
import { useBook } from "../hooks/apiHooks";

export const DetailsPage = () => {
  const { id } = useParams();
  const { data: book, isPending, isError, error } = useBook(id);

  return (
    <>
      <Header />
      <SectionDetails book={book} />
    </>
  );
};
