import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const PCard = ({ pData }) => {
  const { image, price, dec, reviews, name } = pData;
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="grid lg:grid-cols-2 items-center w-full overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-red-100 dark:border-gray-700"
    >
      <LazyLoadImage
        src={image}
        effect="blur"
        className="w-64 lg:m-2 rounded"
        alt="image Alt"
      />
      <div>
        <p className="text-xl font-semibold">{name}</p>
        <p className="">{dec}</p>
        <p>Price {price}</p>
        <p>Reviews {reviews} </p>
      </div>
    </motion.div>
  );
};

export default PCard;
