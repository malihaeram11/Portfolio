import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variant";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
  
          <motion.div
    
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 md:mb-14"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
            Crafting Innovative Solutions
            </h3>
            <p className="mb-6">
            "Welcome! I'm <span className="text-accent">[ERAM]</span>, a passionate software engineer. Throughout my career, I've worked on diverse projects, from web development to optimizing database systems. I thrive in dynamic environments and excel at bridging the gap between technical and business requirements. I value communication and teamwork, actively contributing to cross-functional collaborations. I'm dedicated to lifelong learning and staying up-to-date with the latest technologies. Let's build the future together!"
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={12} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={30} duration={12} /> : null}
                
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={12} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg"><a href="#contact">Contact Me</a></button>
           
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-about  md:h-[770px] bg-contain bg-no-repeat h-[970px] lg:mt-60"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
