import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/home/follow/1.jpg",
  "/images/home/follow/2.jpg",
  "/images/home/follow/3.jpg",
  "/images/home/follow/4.jpg",
  "/images/home/follow/5.jpg",
  "/images/home/follow/6.jpg",
];

const Follow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    if (containerRef.current) {
      const container = containerRef.current;
      const imageWidth = container.firstChild
        ? (container.firstChild as HTMLElement).clientWidth + 16
        : 0;

      container.scrollBy({
        left: direction === "next" ? imageWidth : -imageWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full bg-[#079EBC] py-12 md:py-14">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <motion.div
        className="flex flex-col gap-8 md:gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative w-full overflow-hidden px-4">
          <div
            ref={containerRef}
            className="custom-scrollbar flex gap-4 overflow-x-auto scroll-smooth"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-[100%] flex-shrink-0 rounded-2xl border border-[#f7f4ed] bg-[#f7f4ed] p-8 md:w-[33%] md:rounded-3xl md:p-12"
              >
                <Image
                  src={image}
                  width={600}
                  height={800}
                  alt={`Story image ${index}`}
                  className="h-[300px] w-full rounded-2xl object-cover md:h-[400px]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 md:gap-10">
          <Link
            className="z-50 rounded-full bg-[#ffff] px-8 py-5 text-center font-poppins text-sm font-[300] lowercase text-[#000] ring-1 ring-[#FFFFFF] hover:bg-[#136a7c] md:px-16 md:py-5 md:text-2xl"
            style={{ fontVariant: "small-caps" }}
            href="https://www.instagram.com/antephan.baklava.uk/"
            target="_blank"
          >
            antephan.baklava.uk
          </Link>
        </div>
      </motion.div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Edge */
        }
        .custom-scrollbar {
          -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
        }
      `}</style>
    </section>
  );
};

export default Follow;
