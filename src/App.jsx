import "./App.css";
import { FavoritePage } from "./pages/FavoritePage";
import { DetailsPage } from "./pages/DetailsPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<DetailsPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<p>404 - Not found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
