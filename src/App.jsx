import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./assets/Styles/Style.css";
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import BackToTop from "./Components/BackToTop";
import Contact from "./Pages/Contact";
import News from "./Pages/News";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
        <ScrollToTop />
        <BackToTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
