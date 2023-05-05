import React, { useEffect, useState } from "react";
import SecondNavBar from "../Sheard/SecondNavBar/SecondNavBar";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <SecondNavBar />
      <div className="my-container">
        <h1 className="lg:text-6xl">About Us </h1>
        <p>
          A recipe website is a platform that provides users with access to a
          variety of recipes, cooking tips, and related information. Typically,
          a recipe website will feature recipes for different types of cuisine,
          ingredients, and dietary restrictions, such as vegetarian or
          gluten-free. The website may also offer features such as recipe
          reviews, ratings, and the ability for users to save and organize their
          favorite recipes. In addition to recipes, a recipe website may offer
          other resources for cooking and meal planning, such as instructional
          videos, cooking tools, and meal planning calendars. Some recipe
          websites may also feature articles and blog posts on topics related to
          food, cooking, and nutrition. The purpose of a recipe website is to
          provide users with a comprehensive resource for finding and preparing
          meals. With the rise of food culture and the popularity of cooking
          shows, recipe websites have become an increasingly important part of
          many people's culinary experiences. Whether you're looking for a quick
          and easy dinner idea or a complex and challenging recipe, a recipe
          website can provide you with the guidance and inspiration you need to
          create delicious meals in your own kitchen.
        </p>
      </div>
    </>
  );
};

export default About;
