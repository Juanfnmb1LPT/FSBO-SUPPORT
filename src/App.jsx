import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
