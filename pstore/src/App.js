import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/" element={<LogIn />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
