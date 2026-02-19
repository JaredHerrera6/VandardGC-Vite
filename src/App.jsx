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
import Fence from "./routes/Fence";
import ScrollToTop from "./components/ScrollToTop";
import Accokeek from "./CityRoutes/Accokeek"
import Bowie from "./CityRoutes/Bowie"
import Brandywine from "./CityRoutes/Brandywine"
import Clinton from "./CityRoutes/Clinton"
import Dunkirk from "./CityRoutes/Dunkirk"
import Hughesville from "./CityRoutes/Hughesville";
import Laplata from "./CityRoutes/LaPlata";
import Lothian from "./CityRoutes/Lothian";
import Owings from "./CityRoutes/Owings";
import PrinceFrederick from "./CityRoutes/PrinceFrederick";
import UpperMarlboro from "./CityRoutes/UpperMarlboro";
import Waldorf from "./CityRoutes/Waldorf";
function App() {
  return (
    <>
    
    <div className="page-container">
      <Router>
        <ScrollToTop/>
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
            <Route path= "/concrete-Accokeek" element={<Accokeek/>}/>
            <Route path= "/concrete-Bowie" element={<Bowie/>}/>
            <Route path= "/concrete-Brandywine" element={<Brandywine/>}/>
            <Route path= "/concrete-Clinton" element={<Clinton/>}/>
            <Route path= "/concrete-Dunkirk" element={<Dunkirk/>}/>
            <Route path= "/concrete-Hughesville" element={<Hughesville/>}/>
            <Route path= "/concrete-Laplata" element={<Laplata/>}/>
            <Route path= "/concrete-Lothian" element={<Lothian/>}/>
            <Route path= "/concrete-Owings" element={<Owings/>}/>
            <Route path= "/concrete-PrinceFrederick" element={<PrinceFrederick/>}/>
            <Route path= "/concrete-uppermarlboro" element={<UpperMarlboro/>}/>
            <Route path= "/concrete-Waldorf" element={<Waldorf/>}/>
            <Route path="/*" element={<NotFound/>}/>

          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
    </>
  );
}

export default App;
