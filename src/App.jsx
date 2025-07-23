import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        </div>
        <ScrollToTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
