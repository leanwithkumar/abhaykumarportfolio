import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Contacts from "./Pages/Contacts";
import Blogs from "./Pages/Blogs";
import Projects from "./Pages/Projects";
import About from "./Pages/About";

import Slider from "./Components/Slider";
import Headerslider from "./Components/Headerslider";

function App() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar (fixed on desktop, hidden on mobile) */}
        <div className="hidden md:block w-[30%]">
          <div className="sticky top-5 h-[calc(100vh-40px)] overflow-hidden">
            <Slider />
          </div>
        </div>

        {/* Header slider (mobile only) */}
        <div className="block md:hidden w-full mb-4">
          <Headerslider />
        </div>

        {/* Main Content (scrollable) */}
        <div className="w-full md:w-[70%] px-2 overflow-y-auto overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
