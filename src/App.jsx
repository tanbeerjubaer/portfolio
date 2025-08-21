import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Publications from "./pages/Publications";
import Experience from "./pages/Experience";
import Awards from "./pages/Awards"; // Import Awards page
import Projects from "./pages/Projects";
import TeachingAndServices from "./pages/TeachingAndServices";
import CV from "./pages/CV"; // Import CV page


function App() {
  return (
    <div className="cormorant-garamond-regular text-base">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-3">
          <div className="lg:sticky lg:top-0 lg:left-0">
            <Sidebar />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-7 px-4 lg:pl-10 py-6 lg:py-10">
          <Routes path="portfolio/*">
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/experiences" element={<Experience />} />
            <Route path="/awards" element={<Awards /> } />
            <Route path="/projects" element={<Projects /> } />
            <Route path="/teaching-services" element={<TeachingAndServices />} />
            <Route path="/cv" element={<CV />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
