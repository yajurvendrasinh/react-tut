import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";

import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/" element={<LogIn />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
