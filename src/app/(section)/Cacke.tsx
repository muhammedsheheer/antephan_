import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Cacke: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#f7f4ed] px-3 md:px-40 2xl:px-72">
      <div className="absolute -right-4 -top-36 z-50 md:-top-72 md:right-0">
        <Image
          src={"/images/home/antephan/bgc.png"}
          width={281}
          height={74}
          alt="image1"
          className="z-50 h-[200px] w-full md:h-[500px]"
        />
      </div>

      <div className="absolute left-2 right-2 top-1/2 z-0 -translate-y-1/2 md:left-4 md:right-4">
        <h1 className="text-center font-oswald text-7xl font-[400] uppercase tracking-[3px] text-[#079EBC] md:text-[20vw] md:tracking-[10px]">
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
