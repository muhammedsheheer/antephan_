import React from "react";
import { motion } from "framer-motion";

const Cacke: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#f7f4ed] px-3 md:px-20 2xl:px-40">
      {/* <div className="absolute left-1 right-1 top-32 z-0 md:left-4 md:right-4 md:top-40">
        <h1 className="text-center font-oswald text-7xl font-[400] uppercase tracking-[3px] text-[#079EBC] md:text-[150px] md:tracking-[10px]">
          Antephan
        </h1>
      </div> */}
      <div className="absolute left-2 right-2 top-1/2 z-0 -translate-y-1/2 md:left-4 md:right-4">
        <h1 className="text-center font-oswald text-7xl font-[400] uppercase tracking-[3px] text-[#079EBC] md:text-[250px] md:tracking-[10px]">
          Antephan
        </h1>
      </div>

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
