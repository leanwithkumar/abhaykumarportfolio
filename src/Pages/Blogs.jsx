import React from 'react'
import Dashboardcards from '../Components/Dashbardcards'
import BlogCard from '../Components/Blogcard'

function Blogs() {
  return (
    <>
    <div className="px-4 md:py-10">

        <section className="py-4">
          <h2 className="text-2xl text-white">
           Blogs
          </h2>
        </section>


        <div className="w-full border-t border-gray-700"></div>

       <section className="pt-5">

          <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2">
            <BlogCard
              image="https://res.cloudinary.com/djv80zjt7/image/upload/v1755966588/blog1_yecodl.png"
              title="Node a runtime environment?"
              hashtags={["NodeJS", "Runtime Environment"]}
              description="In simple words, it is the run-time environment that allows JavaScript to run in the browser..."
              date="July 12, 2025"
              link="https://medium.com/@leanwithkumar/node-a-runtime-environment-82e153c66864"
              height="h-100"
            />
            <BlogCard
              image="https://res.cloudinary.com/djv80zjt7/image/upload/v1755966663/ad0d70c8d71071b4c51dfc5b029b9e05_ntqlv1.jpg"
              title="How web talks from scratch?"
              hashtags={["API", "Client", "Server"]}
              description="In simple words, it is the run-time environment that allows JavaScript to run in the browser..."
              date="July 23, 2025"
              link="https://medium.com/@leanwithkumar/api-api-api-1967f1ca9e13"
              height="h-100"
            />
            

            


          
            
          </div>
        </section>




        <div className="w-full border-t border-gray-700"></div>


      </div>
    </>
   
  )
}

export default Blogs
