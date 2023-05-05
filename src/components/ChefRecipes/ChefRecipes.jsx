import React from "react";
import SecondNavBar from "../Sheard/SecondNavBar/SecondNavBar";
import { Link, useLoaderData } from "react-router-dom";
import { SiIfood } from "react-icons/si";
import { AiFillLike } from "react-icons/ai";
import chefBanner from "../../assets/image/chefBanner.jpg";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import LeastRecipeCard from "../LeastRecipeCard/LeastRecipeCard";
const ChefRecipes = () => {
  const chefRecipe = useLoaderData();

  const {
    name,
    image,
    likes,
    year_of_experience,
    chefDescription,
    number_of_recipes,
    recipe,
  } = chefRecipe;

  return (
    <>
      <SecondNavBar />
      <div
        style={{
          backgroundImage: `linear-gradient(140deg, #181818 0%, rgba(24, 24, 24, 0.822917) 24.48%, rgba(24, 24, 24, 0) 100%), url(${chefBanner})`,
          backgroundRepeat: "no-repeat",
          height: "70vh",
          width: "700",
          backgroundSize: "cover",
        }}
      >
        <Link to="/">
          <h1 className="lg:text-5xl common-text text-white text-center pt-16 lg:pt-60">
            Back To Home
          </h1>
        </Link>
      </div>
      <div className="gap-4 my-container bg-red-100 rounded mt-8 mb-8">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid lg:grid-cols-2 items-center gap-x-4 lg:w-full  "
        >
          <img className="w-full overflow-hidden  rounded" src={image} alt="" />

          <div className="lg:pl-0 pl-2">
            <p className="text-2xl font-semibold pt-2 flex justify-between mr-4">
              {name}
            </p>
            <p className="font-semibold mt-6">{chefDescription}</p>

            <p className="text-xl mt-4">{year_of_experience}</p>
            <p className="flex mt-2 items-center  text-xl gap-x-2">
              <span>
                <SiIfood />
              </span>
              {number_of_recipes}
            </p>

            <p className="flex mt-2 items-center text-xl gap-x-2">
              <span>
                <AiFillLike />
              </span>
              {likes}
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-6 mt-6"
        >
          <h1 className="lg:text-6xl rounded mx-auto lg:py-3 font-semibold bg-green-600 text-center lg:w-[64%]">
            Least 3 recipes.
          </h1>
        </motion.div>
        <div className=" grid gap-2 lg:grid-cols-3">
          {recipe.map((singleRecipe) => (
            <LeastRecipeCard
              key={singleRecipe.id}
              singleRecipe={singleRecipe}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChefRecipes;
