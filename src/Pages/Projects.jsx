import React from "react";
import { motion as Motion } from "framer-motion";

function Projects() {
  return (
    <>
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="px-4 md:py-10 overflow-hidden"
      >
        <div className="px-4 md:py-10">
          <section className="py-4">
            <h2 className="text-2xl text-white">Dashboard</h2>
          </section>

          <div className="w-full border-t border-white"></div>

          <section className="pt-5">
            <div className=" py-6 ">
              <a href="https://medium2-new.vercel.app/" target="_blank">
                <div className="max-w rounded-2xl overflow-hidden shadow-lg bg-[#1E1E1E] text-white">
                  <div className="h-80 w-full overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/djv80zjt7/image/upload/v1756001645/Screenshot_2025-08-24_074334_g6xqnj.png" 
                      alt="Banner"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <h2 className="text-xl  mb-2">Medium 2</h2>

                    <div className="flex gap-3 text-2xl">
                      <img
                        src="icons/react.svg"
                        alt="React"
                        className="w-6 h-6"
                      />
                      <img
                        src="icons/javascript.svg"
                        alt="JavaScript"
                        className="w-6 h-6"
                      />
                      <img
                        src="icons/expressjs.svg"
                        alt="React"
                        className="w-6 h-6"
                      />
                      <img
                        src="icons/mongodb.svg"
                        alt="MongoDB"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </section>

          <div className="w-full border-t border-white"></div>
        </div>
      </Motion.div>
    </>
  );
}

export default Projects;
