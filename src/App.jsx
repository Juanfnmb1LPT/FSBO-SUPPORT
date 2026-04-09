import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="home" element={<Navigate to="/?section=home" replace />} />
        <Route path="/home" element={<Navigate to="/?section=home" replace />} />
        <Route path="resources" element={<Navigate to="/?section=resources" replace />} />
        <Route path="/resources" element={<Navigate to="/?section=resources" replace />} />
        <Route path="help" element={<Navigate to="/?section=help" replace />} />
        <Route path="/help" element={<Navigate to="/?section=help" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
