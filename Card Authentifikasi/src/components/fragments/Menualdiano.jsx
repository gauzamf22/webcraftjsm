import React from "react";
import { useNavigate } from "react-router-dom";
import { WarungTiga } from "./WarungBox.jsx/Pujlhe/WarAldiano";
import cihuy from "../../assets/cihuy.svg";
import Vector from "../../assets/Group 4.svg";
import { Fr3 } from "./Fr3";
import { Frame5 } from "./Frame5";
import image1 from "../../assets/beli.svg";
import Bubar from "./Bubar";
import { Box } from "./Kantin3";
import Rectangle from "../../assets2/Rectangle 16.svg";

export default function Menualdiano() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="min-h-[200vh] w-full flex flex-col px-4 sm:px-6 py-10 gap-6 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, #F0BB78, #F0BB78), url(${Vector})`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
      <div>
      <div className="absolute top-0 left-0 w-full h-[500px] sm:h-[600px] md:h-[700px] z-0">
          <img
            className="w-full h-full object-cover object-center"
            alt="Image"
            src={image1}
          />
        </div>

        {/* ✅ Rectangle di bawah gambar atas */}
        <div className="absolute top-[480px] sm:top-[600px] left-0 w-full z-0">
          <div className="relative w-full h-[250px] sm:h-[300px]">
            <img
              src={Rectangle}
              alt="Rectangle Background"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#F0BB78]/90 via-[#F0BB78]/40 to-transparent" />
          </div>
        </div>

        {/* ✅ Box responsif dan posisinya dinamis */}
        <div className="flex flex-row items-start justify-center w-full max-w-6xl mx-auto relative z-10">
          <div
            className="
              flex justify-start items-start 
              translate-y-[400px] sm:translate-y-[500px] md:translate-y-[540px] 
              translate-x-[-100px] sm:translate-x-[-250px] md:translate-x-[-400px] lg:translate-x-[-510px]
            "
          >
            <WarungTiga
              className="
                w-[260px] sm:w-[400px] md:w-[550px] lg:w-[700px] 
                scale-110 sm:scale-125 
                drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]
              "
            />
          </div>
        </div>

        {/* Spacer agar layout bawah tidak terpotong */}
        <div className="h-[600px]" />
      </div>

      {/* ✅ Frame3 diletakkan setelah Rectangle dan Box */}
            <div className="relative z-20 flex justify-center items-center translate-y-[200px] sm:translate-y-[250px] md:translate-y-[-70px]">
        <Fr3 />
      </div>

      {/* ✅ Footer */}
      <div className="border-white p-8 flex justify-center items-center mt-9">
        <Bubar />
      </div>



      </div>
        {/* ✅ Gambar latar belakang atas */}
        
    </>
  );
}
