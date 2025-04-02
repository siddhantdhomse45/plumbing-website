import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Service from "./pages/services/Service";

import Contact from "./pages/contact/Contact";
// import Appointment from "./pages/Appointment";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/footer/Footer";
import ServiceDetails from "./pages/services/ServiceDetails";
import PricingPlanning from "./pages/pricingPlanning/PricingPlanning";
import ProjectDetail from "./pages/projectDetail/ProjectDetail";
import Team from "./pages/team/Team";
import SinglePost from "./pages/single/SinglePost";
import Error from "./pages/error/Error";
import ProjectPage from "./pages/projectPage/ProjectPage";
import BlogPage from "./pages/blogPage/BlogPage";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/details" element={<ServiceDetails />} />
          <Route path="/services/price" element={<PricingPlanning />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/projects-details" element={<ProjectDetail />} />
          <Route path="/pages/team" element={<Team/>} />
          <Route path="/pages/blog" element={<BlogPage />} />
          <Route path="/pages/single" element={<SinglePost />} />
          <Route path="/pages/error" element={<Error />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/appointment" element={<Appointment />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

