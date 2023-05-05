import React from "react";
import "./Header.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { fadeIn } from "../../../variants";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className="my-container -mt-9 text-center">
      <div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="overflow-hidden "
        >
          <p className="badge">On Sale!</p>
          <h2 className=" mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            <span className="text-6xl common-text ">Cook Tasty</span>
            <br className="hidden md:block" />
            <span className=" text-blue-400 text-6xl common-text">
              Stay Healthy
            </span>
          </h2>
        </motion.div>

        <Marquee speed={100}>
          <p className="lg:text-2xl  font-semibold text-white w-4/6 mx-auto md:text-lg">
            Find The Best Recipes for your Healthy lifStyle. Build up your menu.
            Track Your health data and stay connected with The Food Network
            BD...
          </p>
        </Marquee>
      </div>
      <div className="lg:mt-5 ">
        <Link to="/blog" className="btn md:w-auto md:mr-4">
          <div className=" w-full h-full">
            <p className="pt-3 text-xl">Learn More</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
