"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#f7f4ed] px-4 pb-8 pt-4 md:px-20 md:pb-60 md:pt-10">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={"/images/home/story/bgs.png"}
          width={281}
          height={74}
          alt="image1"
          className="z-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-16">
        <div>
          <h1 className="text-center font-oswald text-7xl font-[400] uppercase tracking-[3px] text-[#079EBC] md:text-[300px] md:tracking-[10px]">
            Antephan
          </h1>
        </div>
        <div className="flex flex-col gap-6 md:ml-[10%] md:flex-row md:gap-40">
          <motion.h6
            className="text-center font-oswald text-4xl font-[400] uppercase text-[#0fb9db] md:text-8xl md:tracking-[3px]"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            our story
          </motion.h6>
          <motion.div
            className="flex flex-col items-center justify-center gap-4 md:items-start md:justify-start md:gap-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <p className="max-w-[450px] px-2 text-center font-inter text-sm font-[500] text-[#000] md:text-start md:text-base">
              Each creation is a testament to our dedication to quality and our
              love for sharing the sweet flavors of our heritage.Whether you`re
              indulging in our crispy, syrup-soaked baklava or the warm, cheesy
              delight of künefe, every bite offers a taste of tradition and a
              moment of joy.
            </p>
            <div>
              <Link href={"/menu"}>
                <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-[#000] px-7 py-7 uppercase text-white hover:bg-[#2d2b2b]">
                  View Menu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
