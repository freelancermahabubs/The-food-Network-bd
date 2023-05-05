import React from "react";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { SiIfood } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Card = ({ singleData }) => {
  const { image, name, year_of_experience, number_of_recipes, likes } =
    singleData;
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="max-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden dark:bg-red-100 dark:border-gray-700"
    >
      <Link to="/">
        <LazyLoadImage
          src={image}
          effect="blur"
          className="min-h-full rounded"
          alt="Image Alt"
        />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 common-text text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
          {name}
        </h5>

        <p className="mb-2 text-xl font-normal text-gray-700 dark:text-gray-600">
          {year_of_experience}
        </p>
        <p className="mb-2 text-xl font-normal text-gray-700 dark:text-gray-600">
          <span className="flex items-center gap-x-2">
            <SiIfood /> {number_of_recipes}
          </span>
        </p>
        <p className="mb-2 text-xl font-normal text-gray-700 dark:text-gray-600">
          <span className="flex items-center gap-x-2">
            <AiFillLike /> {likes}
          </span>
        </p>
        <Link
          to={`/chefrecipes/${singleData.id}`}
          className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Recipes
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
