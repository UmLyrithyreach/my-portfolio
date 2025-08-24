import React from "react";
import { motion, useInView } from "framer-motion";

const TitlesSlash = ({ htitle }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-10">
      <h1 className="head1" ref={ref}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="texthilit1"
        >
          /
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          {htitle}
        </motion.span>
      </h1>
    </div>
  );
};

export default TitlesSlash;
