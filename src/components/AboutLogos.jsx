import React from "react";
import { motion } from "motion/react";
import CCC from "../assets/logos/cccLogo.svg";
import childrensMinistry from "../assets/logos/childrensMinistryLogo.svg";
import cmnLogo from "../assets/logos/cmnLogo.svg";
import mensMinistry from "../assets/logos/mensMinistryLogo.svg";
import sundaySchool from "../assets/logos/sundaySchoolLogo.svg";
import womensMisistry from "../assets/logos/womensMinistryLogo.svg";
import youthMinistry from "../assets/logos/youthMinistryLogo.svg";

export default function AboutLogos() {
  // Array with each logo and its custom class
  const logos = [
    { src: CCC, className: "w-48 h-48 flex-shrink-0" },
    { src: childrensMinistry, className: "w-48 h-48 flex-shrink-0" },
    { src: cmnLogo, className: "w-36 h-36 flex-shrink-0 mx-9" },
    { src: youthMinistry, className: "w-32 h-32 flex-shrink-0 mx-8" },
    { src: womensMisistry, className: "w-52 h-52 -mx-6 -mr-7 flex-shrink-0" },
    { src: sundaySchool, className: "w-40 h-40 flex-shrink-0 mx-9" },
    { src: mensMinistry, className: "w-48 h-48 mr-9 flex-shrink-0" },
  ];

  return (
    <div className="overflow-hidden w-full pt-2">
      <motion.div
        className="flex w-max justify-center items-center"
        animate={{ x: ["0%", "-50%"] }} // Move by half of container width
        transition={{
          x: {
            repeat: Infinity,
            duration: 15, // adjust speed
            ease: "linear", // constant speed, no snap
          },
        }}
      >
        {/* Original logos */}
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            className={logo.className}
            alt="logo"
          />
        ))}

        {/* Duplicate logos for seamless scroll */}
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo.src}
            className={logo.className}
            alt="logo"
          />
        ))}
      </motion.div>
    </div>
  );
}
