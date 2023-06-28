import React from "react";
import {} from "framer-motion";
import {} from "../variant";

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variant";

const Work = () => {

  function github() {
    window.location.href = "https://github.com/malihaeram11/"
  }



  function energizeMe() {
    window.location.href = "https://energizeme.netlify.app/"
  }

  function shoppingCart() {
    window.location.href = "https://shopkat.netlify.app/"
  }


  function youTube() {
    window.location.href = "https://utwob.netlify.app/"
  }


  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div  variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading-tight text-accent">
                My latest <br /> Work
              </h2>
              <p className="max-w-sm mb-16">
              Explore my latest project, a dynamic website that combines stunning visuals, seamless navigation, and innovative features to deliver an exceptional user experience.
              </p>
              <button className="btn btn-sm"><a href="#github" onClick={github}>View all projects</a></button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer" onClick={energizeMe}>
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-a duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
           
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">energizeMe</span>
              </div>
           
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer" onClick={shoppingCart}>
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-a duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
             
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Shopping Cart</span>
              </div>
            
            </div>

            <div className="flex-1">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:mt-9 cursor-pointer" onClick={youTube}>
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-a duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
          
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">youTube</span>
              </div>
         
            </div>
            
          </div>

          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default Work;
