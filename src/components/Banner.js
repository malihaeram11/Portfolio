import React, {useState} from "react";
//images
import Image from "../assets/avatar.png";
//icons
import { FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variant";

const Banner = () => {

function youtube() {
  window.location.href = "https://www.youtube.com/watch?v=TydY4gIHs5g&list=PLGMSA71Px1pWVIn9O5D1taAEtrQLJdS5N"
}

function github() {
  window.location.href = "https://github.com/malihaeram11"
}

function instagram() {
  window.location.href = "https://www.instagram.com/ketodietthacks/"
}


  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:justify-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left lg:mt-42">
            <motion.h1 variants = {fadeIn('up', 0.3)} initial= "hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="text-[48px] font-bold leading-[0.8] lg:text-[50px]">
              MALIHA <span>ERAM</span>
            </motion.h1>
            <motion.div 
            variants = {fadeIn('up', 0.3)} initial= "hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className=" text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p             variants = {fadeIn('up', 0.3)} initial= "hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="mb-8 max-w-lg mx-auto lg:mx-0">
            Welcome to my website portfolio! As a passionate software engineer, I am thrilled to share my expertise and showcase the projects I have worked on. With a solid foundation in coding and problem-solving, I strive to deliver efficient and innovative solutions that meet the unique needs of my clients. From web development to mobile applications, my skills span across various domains, allowing me to tackle complex challenges with ease. Explore my portfolio to get a glimpse of my work and discover how I can contribute to your next project. Let's collaborate and transform your ideas into reality through the power of technology!
            </motion.p>
            <motion.div             variants = {fadeIn('up', 0.6)} initial= "hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}  className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg"> <a href="#contact">Contact me</a></button>
             
            </motion.div>
            <motion.div             variants = {fadeIn('up', 0.7)} initial= "hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 lg:cursor-pointer">
              <a href="#youtube" onClick={youtube}>
                <FaYoutube />
              </a>
              <a href="#github" onClick={github}>
                <FaGithub />
              </a>
              <a href="#instagram" onClick={instagram}>
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div             variants = {fadeIn('down', 0.5)} initial= "hidden" whileInView={'show'}>
            <img className="w-[390px] lg:w-[400px] mx-auto" src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
