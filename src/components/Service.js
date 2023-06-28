import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Innovating user-centric experiences through intuitive UI/UX design.",
       link: "https://www.behance.net/malihaeram",
  },
  {
    name: "Development",
    description:
      "Transforming ideas into functional and efficient software solutions through agile development.",
    link: "https://alamkul.in",
  },
  {
    name: "Figma",
    description:
      "Figma is a collaborative design tool that streamlines the process of creating, prototyping, and sharing user interfaces.",
    link: "https://www.behance.net/gallery/163659205/Education-Banner",
  },
  {
    name: "Youtube",
    description:
      "Empowering learners worldwide through engaging and educational content on YouTube.",
    link: "https://www.youtube.com/@alamkuliitneet1219",
  },
];

const Service = () => {
  return (
    <section className="section lg:mt-14" id="services">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          <motion.div   variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className="flex-1 lg:bg-services  bg-no-repeat lg:mt-40">
            {/* <h2 className="h2 text-accent mb-6 lg:mt-4">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16 lg:mt-12">
              {" "}
              I develop and optimize software solutions, ensuring reliability and performance through clean code and collaboration.
            </h3> */}
            {/* <button className="btn p-3 mt-90 "><a href="#work">See my work</a></button> */}
          </motion.div>
          <motion.div   variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className="flex-1">
            <div>
              {services.map((service, index) => {
                const { name, description,link } = service;

                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className = "font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={link}
                        target="_blank"
                        className="btn w-9 h-9 mb-[42px] p-2"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href= {link} className="text-gradient text-3sm">
                        learn more
                      </a>
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
