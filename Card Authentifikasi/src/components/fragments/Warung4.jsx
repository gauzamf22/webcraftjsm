import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "./Kantin4"; // 🔹 Komponen kiri
import cihuy from "../../assets/cihuy.svg"; // 🔹 Gambar kanan
import Vector from "../../assets/Group 4.svg";
import { Frame6 } from "./Frame6"; // 🔹 Komponen tambahan



export default function Warung4() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex flex-col px-6 py-10 gap-6 relative"
      style={{
        backgroundImage: `linear-gradient(to right, #F0BB78, #FFD39C), url(${Vector})`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* === BAGIAN ATAS: FLEX KIRI & KANAN === */}
      <div className="flex flex-row items-start justify-center gap-6 w-full max-w-6xl mx-auto mt-20">
        {/* KIRI: Box */}
        <div className="flex justify-start items-start translate-y-[-55px]">
          <Box className="w-[300px] sm:w-[450px] md:w-[600px] lg:w-[750px] scale-125 drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]" />
        </div>

        {/* KANAN: Maskot */}
        <div className="flex justify-center items-start translate-y-[-100px] relative z-0">
          <img
            src={cihuy}
            alt="Maskot GamadanG"
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] drop-shadow-2xl"
          />
        </div>
      </div>

      {/* === FRAME2 DI ATAS MASKOT === */}
      <div className="relative z-6 -translate-y-[425px] flex justify-center items-center">
        <Frame6 />
      </div>
    </div>
  );
}