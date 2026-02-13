import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import Concrete from "./routes/Concrete";
import ContactUs from "./routes/ContactUs";
import Drainage from "./routes/Drainage";
import Gallery from "./routes/Gallery";
import NotFound from "./routes/NotFound";
import Services from "./routes/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Walls from "./routes/Walls";
import Excavation from "./routes/Excavation";
import Demolition from "./routes/Demolition";
import Fence from "./routes/Fence";

function App() {
  return (
    <>
    
    <div className="page-container">
      <Router>
        <div className="navbar-container">

        </div>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Concrete" element={<Concrete />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Drainage" element={<Drainage />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/NotFound" element={<NotFound />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Walls" element={<Walls />} />
            <Route path="/Excavation" element={<Excavation />} />
            <Route path="/Demolition" element={<Excavation />} />
            <Route path="/Fence" element={<Fence />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
    </>
  );
}

export default App;
