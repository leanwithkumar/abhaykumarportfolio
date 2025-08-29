import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Contacts from "./Pages/Contacts";
import Blogs from "./Pages/Blogs";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import { motion as Motion } from "framer-motion";
import Slider from "./Components/Slider";
import Headerslider from "./Components/Headerslider";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="hidden md:block w-[30%]">
            <div className="sticky top-5 h-[calc(100vh-40px)] overflow-hidden">
              <Motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Slider />
              </Motion.div>
            </div>
          </div>

          <div className="block md:hidden w-full mb-4">
            <Motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Headerslider />
            </Motion.div>
          </div>

          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-[70%] px-2 overflow-y-hidden overflow-x-hidden"
          >
            <div>
              <ScrollToTop />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </div>
          </Motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
