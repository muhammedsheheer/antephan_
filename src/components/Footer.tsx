"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { FaTiktok } from "react-icons/fa";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#f7f4ed] px-4 pt-12 md:px-20 md:pt-20">
      {/*big screen */}
      <div className="hidden flex-col items-center justify-center gap-8 md:flex">
        <div className="md:ml-[3%] md:pb-10">
          <Image
            src={"/images/home/hero/logo.png"}
            width={160}
            height={160}
            alt="logo"
            className="w-32"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:mr-[4%] md:flex-row md:items-start md:gap-36 md:pb-20 2xl:gap-56">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-center font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base">
              Contact
            </h1>
            <Link
              className="text-center"
              href={"https://g.co/kgs/oTZfr5e"}
              target="_blank"
            >
              <span className="text-center font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base">
                240 Hertford Road Enfield EN3 5BL
              </span>
            </Link>
            <Link href={"tel:+442083749043"}>
              <span className="text-center font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base">
                +44 20 8374 9043
              </span>
            </Link>
            {/* <Link href={"mailto:info@simitpalace.co.uk"}>
              <span className="text-center font-poppins text-sm font-[400] lowercase tracking-[2px] text-[#000] md:text-base">
                info@simitpalace.co.uk
              </span>
            </Link> */}
          </div>
          <div className="flex flex-col gap-4">
            <Link
              className="text-center font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="text-center font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base"
              href={"/menu"}
            >
              Order Online
            </Link>
            <Link
              className="text-center font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base"
              href={"/table-booking"}
            >
              Reservation
            </Link>
            <Link
              className="text-center font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base"
              href={"/contact"}
            >
              Contact us
            </Link>
            <Link
              className="text-center font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base"
              href={"/about-us"}
            >
              Our story
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-center font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base">
              Opening HOURS
            </h1>
            <p className="text-center font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base">
              OPEN EVERYDAY Time 08:00-23:00
            </p>
          </div>
        </div>
        <div className="w-full border-t-2 border-[rgba(255,246,235,0.13)]"></div>
      </div>
      {/*mobile screen */}

      <div className="flex flex-col gap-8 px-2 md:hidden">
        <div className="md:ml-[3%] md:pb-10">
          <Image
            src={"/images/home/hero/logo.png"}
            width={160}
            height={160}
            alt="logo"
            className="w-24"
          />
        </div>

        <div className="flex flex-col gap-4 md:mr-[4%] md:gap-36 md:pb-20 2xl:gap-56">
          <div className="flex flex-col items-start justify-start gap-4">
            <h1 className="text-start font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base">
              Contact
            </h1>
            <Link
              className="text-start"
              href={"https://g.co/kgs/oTZfr5e"}
              target="_blank"
            >
              <span className="text-start font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base">
                240 Hertford Road <br /> Enfield EN3 5BL
              </span>
            </Link>
            <Link href={"tel:+442083749043"}>
              <span className="text-start font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base">
                +44 20 8374 9043
              </span>
            </Link>
            {/* <Link href={"mailto:info@simitpalace.co.uk"}>
              <span className="text-start font-poppins text-sm font-[400] lowercase tracking-[2px] text-[#000] md:text-base">
                info@simitpalace.co.uk
              </span>
            </Link> */}
          </div>
          <div className="flex flex-col gap-4">
            <Link
              className="text-end font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="text-end font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base"
              href={"/menu"}
            >
              Order Online
            </Link>
            <Link
              className="text-end font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base"
              href={"/table-booking"}
            >
              Reservation
            </Link>
            <Link
              className="text-end font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base"
              href={"/contact"}
            >
              Contact us
            </Link>
            <Link
              className="text-end font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base"
              href={"/about-us"}
            >
              Our story
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-end font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base">
              Opening HOURS
            </h1>
            <p className="text-end font-poppins text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-base">
              OPEN EVERYDAY <br /> Time 08:00-23:00
            </p>
          </div>
        </div>
        <div className="w-full border-t-2 border-[rgba(255,246,235,0.13)]"></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full border-b-[1px] border-b-[#D6D0D0]" />
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row md:gap-0">
          <p className="text-center font-inter text-sm font-[400] text-[#000]">
            © All Rights Reserved by Antephan{" "}
          </p>
          <div className="flex flex-row items-center justify-center gap-3 md:mr-[8%]">
            <Link
              className="rounded-full px-1 py-1 ring-1 ring-[#000]"
              href={"https://www.instagram.com/antephan.baklava.uk/"}
              target="_blank"
            >
              <Icons.instagram className="h-7 w-7 text-[#000]" />
            </Link>
            <Link
              className="rounded-full p-2 ring-1 ring-[#000]"
              href={"https://www.tiktok.com/@antephan2024"}
              target="_blank"
            >
              <FaTiktok className="h-5 w-5 text-[#000]" />
            </Link>
            <Link
              className="rounded-full px-1 py-1 ring-1 ring-[#000]"
              href={"https://g.co/kgs/oTZfr5e"}
              target="_blank"
            >
              <Icons.google className="h-7 w-7 text-[#000]" />
            </Link>
            {/* <Link
              className="rounded-full px-1 py-1 ring-1 ring-[#000]"
              href={"https://www.instagram.com/simitpalacebrighton/"}
              target="_blank"
            >
              <Icons.instagram className="h-7 w-7 text-[#000]" />
            </Link> */}
          </div>
          <Link href={"https://foodo.ai"} target="_blank">
            <span className="text-center font-inter text-sm font-[400] text-[#000]">
              Foodo
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
