import "./App.css";
import { HomePage } from "./pages/homepage";
import { FavoritePage } from "./pages/FavoritePage";
import { DetailsPage } from "./pages/DetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
