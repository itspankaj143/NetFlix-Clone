// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NetflixShow from "./NetflixShow";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/netflix" element={<NetflixShow />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
