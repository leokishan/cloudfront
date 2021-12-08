import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProviderHome from "./pages/ProviderHome";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/provider_home" element={<ProviderHome />} />
          <Route path="/client_home" element={<ProviderHome />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
