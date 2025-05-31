// import React from "react";
// import { motion } from "framer-motion";

// const Cacke: React.FC = () => {
//   return (
//     <section className="relative h-full w-full bg-[#fff] px-4 md:h-screen md:px-20 2xl:px-40">
//       <div className="absolute left-4 right-4 top-8 z-0">
//         <h1 className="z-0 text-center font-oswald text-7xl font-[400] uppercase tracking-[3px] text-[#079EBC] md:text-[150px] md:tracking-[10px]">
//           Antephan
//         </h1>
//       </div>
//       <motion.img
//         src={"/images/home/antephan/image.png"}
//         width={1920}
//         height={2171}
//         alt="image1"
//         initial={{ opacity: 0, y: 50, scale: 0.8 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="h-full w-full"
//       />
//     </section>
//   );
// };

// export default Cacke;

import React from "react";
import { motion } from "framer-motion";

const Cacke: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 md:h-screen md:px-20 2xl:px-40">
      {/* Text behind */}
      <div className="absolute left-4 right-4 top-8 z-0">
        <h1 className="text-center font-oswald text-7xl font-[400] uppercase tracking-[3px] text-[#079EBC] md:text-[150px] md:tracking-[10px]">
          Antephan
        </h1>
      </div>

      {/* Image with higher z-index */}
      <motion.img
        src={"/images/home/antephan/image.png"}
        width={1920}
        height={2171}
        alt="image1"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 h-full w-full"
      />
    </section>
  );
};

export default Cacke;
