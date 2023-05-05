import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "../../assets/bannerjpg.jpg";
import Header from "./Header/Header";
import Card from "../Card/Card";
import { BsArrowRightCircleFill } from "react-icons/bs";
import PCard from "../PCard/PCard";
import SideImage from "../../assets/image/side.jpg";
import SEImage from "../../assets/image/se.jpeg";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const Home = () => {
  const [chefsData, setChefsDataAllData] = useState([]);
  const [popularRecipeData, setPopularRecipeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        const jsonData =
          "https://the-food-network-bd-server-freelancermahabubs.vercel.app/allData";
        const res = await fetch(jsonData);
        const data = await res.json();
        setChefsDataAllData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadAllData();
  }, []);

  useEffect(() => {
    const loadPopularData = async () => {
      try {
        const json =
          "https://the-food-network-bd-server-freelancermahabubs.vercel.app/popularrecipe";
        const res = await fetch(json);
        const data = await res.json();
        setPopularRecipeData(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadPopularData();
  }, []);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(140deg, #181818 0%, rgba(24, 24, 24, 0.822917) 24.48%, rgba(24, 24, 24, 0) 100%), url(${Banner})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "700",
          backgroundSize: "cover",
        }}
      >
        <NavBar />

        <Header />
      </div>
      <div className="grid lg:grid-cols-4 bg-red-100 rounded-md mt-9 my-container">
        <div className="col-span-1 my-4 cart ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="overflow-hidden "
          >
            <p className="header-text text-2xl  text-red-500">Best Food Menu</p>
            <h1 className="common-text text-3xl font-semibold">
              Meet Our Exclusive & master Chefs
            </h1>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="overflow-hidden "
          >
            <span className="flex text-xl gap-x-2 mt-4">
              <BsArrowRightCircleFill className="text-red-600 -mt-1 text-4xl" />
              <p>10 Years of Experience in Restaurant Services in BD</p>
            </span>
            <span className="flex text-xl gap-x-2 mt-4">
              <BsArrowRightCircleFill className="text-red-600 -mt-1 text-5xl" />
              <p>Any Kind of Food Made For Customer and mush Yamee & Testy</p>
            </span>
            <p className="mt-4">
              Sit amet consectetur adipiscing elistsue risus mauris quam
              adipiscipng phasesllus aene ante orciat selecrisqu enim utla..
            </p>
          </motion.div>
        </div>
        <div className="grid col-span-3 gap-4 my-4 px-5 mx-auto lg:grid-cols-3">
          {chefsData.map((singleData) => (
            <Card key={singleData.id} singleData={singleData} />
          ))}
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mt-6 overflow-hidden bg-green-500 w-[96%] lg:w-[64%] mx-auto p-2 rounded "
      >
        <h2 className="text-4xl common-text">Popular recipe categories</h2>
      </motion.div>
      <div className="grid lg:grid-cols-2 rounded-md  my-container">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="overflow-hidden "
        >
          <img className="w-full h-full rounded-md" src={SideImage} alt="" />
        </motion.div>
        <div className="grid gap-4 mt-2 px-5 ">
          {popularRecipeData &&
            popularRecipeData.map((pData) => (
              <PCard key={pData.id} pData={pData} />
            ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 items-center lg:gap-3 rounded-md  my-container">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="overflow-hidden"
        >
          <LazyLoadImage
            src={SEImage}
            effect="blur"
            className="w-full h-full rounded-md"
            alt="Image Alt"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="overflow-hidden"
        >
          <h2 className="text-xl font-semibold">PANCAKE CAKE WITH BERRIES</h2>
          <h1 className="header-text lg:text-6xl hover:underline hover:text-red-600">
            Easy-Yet-Impressive Mother’s Day Brunch Ideas
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
