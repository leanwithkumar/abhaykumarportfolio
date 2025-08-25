import React from "react";
import Dashboardcards from "../Components/Dashbardcards";
import { motion as Motion } from "framer-motion";

function Dashboard() {
  return (
    <>
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="px-4 md:py-10 overflow-hidden"
      >
        <div>
          <section className="py-4">
            <h2 className="text-2xl text-white">Dashboard</h2>
          </section>

          <div className="w-full border-t border-white"></div>

          <section className="pt-5">
            <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2">
              <Dashboardcards
                image="https://res.cloudinary.com/djv80zjt7/image/upload/v1755999402/sambro_vd1tq6.jpg"
                title="Samarth Pandey"
                hashtags={["TKS @ NN Scholar", "Researcher @ Perrin"]}
                description="A rare blend of curiosity and consistency of purpose. He absorbs feedback swiftly and turns ideas into action. Watching his journey evolve has been inspiring."
                link="https://www.linkedin.com/in/samarthpandeyyy/"
                height="h-100"
              />

              <Dashboardcards
                image="https://res.cloudinary.com/djv80zjt7/image/upload/v1755999538/Kshitij_zbj6mt.jpg"
                title="Kshitij Ranjan"
                hashtags={["Product Engg @ Pamparazzi"]}
                description="Known him since childhood—always a driven and thoughtful person. His clarity, discipline, and focus make him stand out. Excited to see his journey unfold."
                link="https://www.linkedin.com/in/kshitij-ranjan21/"
                height="h-100"
              />

              <Dashboardcards
                image="https://res.cloudinary.com/djv80zjt7/image/upload/v1755999727/mohitsirmentor_ravtol.png"
                title="Mohit Pandey"
                hashtags={["SDE 1 @ Global Logic"]}
                description="Doesn't just solve — understands deeply. Calm, focused, and sharp with problem-solving. Truly inspiring to watch him grow."
                link="https://www.linkedin.com/in/mohit-pandey-5b0756197/"
                height="h-100"
              />

              <Dashboardcards
                image="https://res.cloudinary.com/djv80zjt7/image/upload/v1755999897/ssharmaaaa_wy2zvl.jpg"
                title="Aryan Sharma"
                hashtags={["Fullstack Web Developer"]}
                description="Met him in first year, and saw him grow into a focused builder. His curiosity and drive toward building solutions are outstanding."
                link="https://www.linkedin.com/in/aryan-sharma-534a23219/"
                height="h-100"
              />
            </div>
          </section>

          <div className="w-full border-t border-white"></div>
        </div>
      </Motion.div>
    </>
  );
}

export default Dashboard;
