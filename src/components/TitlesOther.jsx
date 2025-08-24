import React from "react";
import { motion, useInView } from "framer-motion";
import HorizontalLine from "./HorizontalLine";
import TypingEffect from "../animations/TypingEffect";

const TitlesOther = ({ htitle }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const typingDelay = 0.5 + (htitle.length - 1) * 0.1 + 0.2;

  return (
    <>
      <h2 className="head2" ref={ref}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="texthilit1"
        >
          #
        </motion.span>
        <TypingEffect text={htitle} />
      </h2>
      <div className="pt-4 sm:col-span-1 md:col-span-3">
        <HorizontalLine delay={typingDelay} />
      </div>
    </>
  );
};

export default TitlesOther;
