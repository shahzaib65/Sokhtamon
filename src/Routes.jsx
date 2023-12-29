import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ServicesOne = React.lazy(() => import("pages/ServicesOne"));
const Services = React.lazy(() => import("pages/Services"));
const Addpage = React.lazy(() => import("pages/Addpage"));
const AddpageOne = React.lazy(() => import("pages/AddpageOne"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const HomepageOne = React.lazy(() => import("pages/HomepageOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
        <Route path="/" element={<ContactUs />} />
          <Route path="/contactus" element={<HomepageOne />} />
          <Route path="*" element={<NotFound />} />
          
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/addpageone" element={<AddpageOne />} />
          <Route path="/addpage" element={<Addpage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicesone" element={<ServicesOne />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
