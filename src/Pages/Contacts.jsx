import React from "react";
import Email from "../Components/Email";
import MyApp from "../Components/Myapp";
import { motion as Motion } from "framer-motion";

function Contacts() {
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
            <h2 className="text-2xl text-white">Contacts</h2>
          </section>

          <div className="w-full border-t  border-white"></div>

          <section className="py-4">
            <h2 className="">
              Feel free to get in touch and let's have a discussion about how we
              can work together.
            </h2>
          </section>

          <div className="w-full border-t border-dashed border-white"></div>

          <div className="flex flex-wrap justify-center gap-3 py-4">
            <a
              href="https://www.linkedin.com/in/abhay-kumar-443b981b6/"
              target="_blank"
            >
              <div className="px-5 py-2 min-w-[120px] text-center rounded-xl text-white bg-[#00CAFF] border border-white-1 transform transition duration-300 hover:scale-95 cursor-pointer">
                LinkedIn
              </div>
            </a>
            <a href=" https://github.com/leanwithkumar" target="_blank">
              <div className="px-5 py-2 min-w-[120px] text-center rounded-xl text-white bg-[#071952] border border-white-1 transform transition duration-300 hover:scale-95 cursor-pointer">
                Github
              </div>
            </a>
            <a href="https://x.com/leanwithkumar" target="_blank">
              <div className="px-5 py-2 min-w-[120px] text-center rounded-xl text-white bg-black border border-white-1 transform transition duration-300 hover:scale-95 cursor-pointer">
                Twitter
              </div>
            </a>

            <a href="https://discord.gg/bGhyHsSP" target="_blank"></a>
            <div className="px-5 py-2 min-w-[120px] text-center rounded-xl text-white bg-[#793FDF] border border-white-1 transform transition duration-300 hover:scale-95 cursor-pointer">
              Discord
            </div>

            <a
              href="https://codeforces.com/profile/leanwithkumar"
              target="_blank"
            >
              <div className="px-5 py-2 min-w-[120px] text-center rounded-xl text-white bg-[#3338A0] border border-white-1 transform transition duration-300 hover:scale-95 cursor-pointer">
                Codeforces
              </div>
            </a>

            <a href="https://leetcode.com/u/leanwithkumar/" target="_blank">
              <div className="px-5 py-2 min-w-[120px] text-center rounded-xl text-white bg-[#FFD93D] border border-white-1 transform transition duration-300 hover:scale-95 cursor-pointer">
                LeetCode
              </div>
            </a>

            <a
              href="https://www.geeksforgeeks.org/user/mrhust45el/"
              target="_blank"
            >
              <div className="px-5 py-2 min-w-[120px] text-center rounded-xl text-white bg-[#08CB00] border border-white-1 transform transition duration-300 hover:scale-95 cursor-pointer">
                GeeksforGeeks
              </div>
            </a>

            <a
              href="mailto:mrhustle936@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="px-5 py-2 min-w-[120px] text-center rounded-xl text-white bg-[#E43636] border border-white-1 transform transition duration-300 hover:scale-95 cursor-pointer">
                Email
              </div>
            </a>

            <a href="https://www.instagram.com/leanwithkumar/" target="_blank">
              <div className="px-5 py-2 min-w-[120px] text-center rounded-xl text-white bg-[#E73879] border border-white-1 transform transition duration-300 hover:scale-95 cursor-pointer">
                Instagram
              </div>
            </a>
          </div>

          <div className="w-full border-t border-dashed border-white "></div>

          <MyApp />

          <div className="w-full border-t border-dashed border-white"></div>

          <div className="py-4">
            Or Send Me a Message
            <Email />
          </div>
        </div>

        <div className="w-full border-t border-white"></div>
      </Motion.div>
    </>
  );
}

export default Contacts;
