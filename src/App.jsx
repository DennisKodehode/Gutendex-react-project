import "./App.css";
import { FavoritePage } from "./pages/FavoritePage";
import { DetailsPage } from "./pages/DetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<DetailsPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<p>404 - Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
