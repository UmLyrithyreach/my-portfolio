import React from "react";
import { motion } from "framer-motion";

const Quote = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="my-8 text-center"
    >
      <blockquote className="text-lg italic text-2ndry-2 dark:text-2ndry-1">
        "The best way to predict the future is to create it."
      </blockquote>
      <cite className="mt-2 block text-sm texthilit1">- Peter Drucker</cite>
    </motion.div>
  );
};

export default Quote;
