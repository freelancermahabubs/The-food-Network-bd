import React, { useState } from "react";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
const LeastRecipeCard = ({ singleRecipe }) => {
  const { recipeItemsImg, cooking_method, recipeName, rating, ingredients } =
    singleRecipe;
  const [marked, setMarked] = useState(false);

  const handleMarked = () => {
    toast.success("Recipe is your favorite");
    setMarked(true);
  };
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full max-w-sm bg-fuchsia-500 border border-gray-200 rounded-lg shadow min-h-full dark:border-gray-700"
    >
      <img
        className=" w-full rounded-t-lg"
        src={recipeItemsImg}
        alt="recipeItemsImg1 image"
      />

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold pt-2 tracking-tight text-gray-900 dark:text-white">
          {recipeName}
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
          <p className="flex  items-center text-xl gap-x-2">
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-yellow-500" />}
              fullSymbol={<FaStar />}
            />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating?.number}
            </span>
          </p>
        </div>
        <p>
          <span className="font-semibold ">Cooking Method:</span>
          <small className="text-white"> {cooking_method}</small>
        </p>
        <div>
          <h1 className="font-semibold mt-2 mb-2">Ingredients</h1>
          <span className=" font-semibold text-gray-900 dark:text-white">
            {ingredients.map((items, index) => (
              <ol className="flex items-center" key={index}>
                <AiOutlineArrowRight /> <li>{items}</li>
              </ol>
            ))}
          </span>
          <button
            disabled={marked}
            onClick={handleMarked}
            className="text-white flex items-center gap-x-2 mt-2 bg-blue-700 hover:bg-blue-800
                  focus:ring-4 focus:outline-none focus:ring-blue-300
                  font-medium rounded-lg text-sm px-5 py-2 text-center
                  dark:bg-blue-600 dark:hover:bg-blue-700
                  dark:focus:ring-blue-800"
          >
            {marked ? <FcLike /> : <GrFavorite />}
            Favourite
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LeastRecipeCard;
