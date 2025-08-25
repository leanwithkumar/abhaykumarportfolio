import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { motion as Motion } from "framer-motion";

function About() {
  const [activetab, setActivetab] = useState("intro");
  return (
    <>
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="px-4 md:py-10 overflow-hidden"
      >
        <div className=" px-4 md:py-10">
          <section className="py-4">
            <h2 className="text-2xl text-white">About</h2>
          </section>

          <div className="w-full border-t  border-white"></div>

          <section className="py-4">
            <h2 className="">
              An insightful glimpse into who I am because every detail adds
              depth to the canvas of life.
            </h2>
          </section>

          <div className="w-full border-t border-dashed border-white"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 justify-evenly py-4">
            <button
              onClick={() => setActivetab("intro")}
              className="flex-1 text-center rounded-xl text-white mx-1 px-5 py-2  bg-[#A3A3A3] cursor-pointer"
            >
              Intro
            </button>
            <button
              onClick={() => setActivetab("resume")}
              className="flex-1 text-center rounded-xl text-white mx-1 px-5 py-2 bg-[#A3A3A3] cursor-pointer"
            >
              Resume
            </button>
            <button
              onClick={() => {
                setActivetab("careers");
              }}
              className="flex-1 text-center rounded-xl text-white mx-1 px-5 py-2 bg-[#A3A3A3] cursor-pointer"
            >
              Careers
            </button>
            <button
              onClick={() => setActivetab("education")}
              className="flex-1 text-center rounded-xl text-white mx-1 px-5 py-2 bg-[#A3A3A3] cursor-pointer"
            >
              Education
            </button>
          </div>

          <div className="w-full border-t border-dashed border-white"></div>

          <div className="py-4">
            <div className="py-4">
              {activetab === "intro" && (
                <div>
                  Hello! Thanks for stopping by my personal website.
                  <br />
                  <br />
                  I'm Abhay. I've been working in web development for over a few
                  months, doing both the coding you see on the screen (frontend)
                  and the stuff that happens behind the scenes (backend). I know
                  how to manage projects using methods like Waterfall and Agile.
                  But what really gets me excited is making websites and apps
                  that are easy for everyone to use and look good too!
                  <br />
                  <br />
                  I'm really into JavaScript and TypeScript, which are languages
                  used to build websites. I also know a bunch of frameworks that
                  make building websites even easier, like React, Next, Node.js,
                  and Express frameworks like Codeigniter and Laravel. I love
                  learning about new web tools and features.
                  <br />
                  <br />
                  I believe that good communication is super important in any
                  job.
                  <br />
                  <br />
                  <br />
                  I'm good at adapting to different situations, working
                  efficiently, and always trying to do my best. My experience
                  has taught me how to solve problems and lead teams, but I'm
                  also happy to work with others to get things done. I'm excited
                  about the chance to work together and make cool stuff!I'm
                  looking forward to the possibility of working with you! Best
                  Regards,
                  <br />
                  <br />
                  Abhay Kumar
                  <br />
                  <br />
                </div>
              )}
            </div>

            {activetab === "resume" && (
              <div>
                I will add my resume at the end of this month.
                <br />
                <br />
              </div>
            )}

            {activetab === "careers" && (
              <div>
                Looking for interns will be great to work with.
                <br />
                <br />
              </div>
            )}

            {activetab === "education" && (
              <div>
                <div className="py-2">
                  <div className="flex items-center bg-[#1a1a1a] rounded-2xl p-4 shadow-md">
                    <img
                      src="icons/bitlogo.png" 
                      alt="Birsa Institute of Technology"
                      className="w-20 h-20 object-contain rounded-lg"
                    />

                    <div className="ml-4 text-white">
                      <h2 className="text-lg">Birsa Institute of Technology</h2>
                      <div className="text-sm text-gray-300">
                        Bachelor's degree • Electronics and Communication
                        Engineering
                      </div>
                      <p className="text-sm text-gray-400 flex items-center gap-1">
                        2022 - 2026 <span className="mx-1">•</span>
                        Jharkhand, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <div className="flex items-center bg-[#1a1a1a] rounded-2xl p-4 shadow-md">
                    <img
                      src="icons/schoollogoo.png" // replace with your image path
                      alt="Birsa Institute of Technology"
                      className="w-20 h-20 object-contain rounded-lg"
                    />

                    <div className="ml-4 text-white">
                      <h2 className="text-lg ">
                        M.G.M Higher Secondary School
                      </h2>
                      <div className="text-sm text-gray-300">High School</div>
                      <div className="text-sm text-gray-400 flex items-center gap-1">
                        2022 - 2026 <span className="mx-1">•</span>
                        Jharkhand, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full border-t py-4 border-white"></div>

          <div></div>
        </div>
      </Motion.div>
    </>
  );
}

export default About;
