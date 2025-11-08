import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Palelu from "../../assets/palelu.svg";

function Navbar() {
  const [state, dispatch] = useReducer(reducer, { property1: "default" });
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

  const dashboardPadding =
    state.property1 === "after" ? "py-1.5 px-5" : "py-1.5 px-4";

  return (
    <motion.div
      initial={false}
      animate={{
        top: isScrolled ? 16 : 0,
        paddingLeft: isScrolled ? 16 : 0,
        paddingRight: isScrolled ? 16 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed left-0 right-0 z-50"
    >
      <motion.nav
        onMouseEnter={() => dispatch("mouse_enter")}
        onMouseLeave={() => dispatch("mouse_leave")}
        initial={false}
        animate={{
          borderRadius: isScrolled ? 30 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          flex items-center justify-between
          bg-white
          px-8 py-3
          ${
            isScrolled
              ? "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25),0_8px_16px_-8px_rgba(0,0,0,0.1)]"
              : ""
          }
        `}
      >
        {/* KIRI */}
        <div className="flex items-center h-full space-x-2 sm:space-x-3 md:space-x-5 pl-2 sm:pl-3 md:pl-4">
          <img
            src={Palelu}
            alt="GamadanG Logo"
            className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 rounded"
          />
          <h1
            className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-normal font-javassoul leading-none mt-2.5"
            style={{
              textShadow: `
              -1px -1px 0 #E7A24A,
              1px -1px 0 #E7A24A,
              -1px 1px 0 #E7A24A,
              1px 1px 0 #E7A24A,
              -1px 0 0 #E7A24A,
              1px 0 0 #E7A24A,
              0 -1px 0 #E7A24A,
              0 1px 0 #E7A24A,
              0 0 8px rgba(240, 138, 6, 0.5)
            `,
            }}
          >
            GamadanG
          </h1>
        </div>

        {/* KANAN */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 xl:gap-4 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium pr-2 sm:pr-3 md:pr-4 py-2">
          {/* Home */}
          <Link
            to="/#kenapa-gamadang"
            className={`
            px-1.5 sm:px-2 md:px-3 xl:px-4 py-1
            text-neutral-700 hover:text-neutral-900
            transition-colors duration-300
            font-poppins
          `}
          >
            Home
          </Link>

          {/* About */}
          <Link
            to="/"
            className={`
            px-1.5 sm:px-2 md:px-3 xl:px-4 py-1
            text-neutral-700 hover:text-neutral-900
            transition-colors duration-200
            font-poppins
          `}
          >
            About
          </Link>

          {/* Dashboard */}
          <Link
            to="/dashboard"
            className={`
            px-1.5 sm:px-2 md:px-3 xl:px-4 py-1 sm:py-1.5
            rounded-full
            bg-gradient-to-br from-orange-300 to-orange-200
            text-neutral-700 hover:text-neutral-900
            transition-all duration-300
            shadow-md
            font-poppins
          `}
          >
            Dashboard
          </Link>
        </div>
      </motion.nav>
    </motion.div>
  );
}

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return { ...state, property1: "after" };
    case "mouse_leave":
      return { ...state, property1: "default" };
    default:
      return state;
  }
}

export default Navbar;