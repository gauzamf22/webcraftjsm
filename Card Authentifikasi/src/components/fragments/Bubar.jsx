import React from "react";
import Desk from "../../assets/Desk.svg";
import ArrowKanan from "../../assets/Frame 14.svg";

export const Bubar = () => {
  const handleClickDeskripsi = () => {
    alert("Deskripsi diklik!");
  };

  return (
    <div className="flex items-center gap-6">
      {/* Container Utama */}
      <div className="flex w-[1306px] h-[217px] items-center justify-between px-20 py-[70px] relative bg-[#704443] rounded-[44px] border-2 border-dashed border-white">
        
        {/* Bagian Total Belanja */}
        <div className="relative w-[357px] h-[79px] mt-[-1.00px] mb-[-1.00px]">
          <div className="absolute top-0 left-0 w-[353px] h-[26px] flex items-center justify-center [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
            Total Belanja:
          </div>
          <div className="absolute top-[43px] left-0 w-[353px] h-9 flex items-center justify-center [font-family:'Poppins-Black',Helvetica] font-black text-white text-[46px] tracking-[0] leading-[normal] whitespace-nowrap">
            Rp1.000.000
          </div>
        </div>

        {/* Tombol Deskripsi */}
        <div className="relative w-[280px] h-[46px] mr-[-2.00px]">
          <button
            onClick={handleClickDeskripsi}
            className="absolute top-2.5 left-[66px] w-[173px] h-[26px] focus:outline-none"
          >
            <img
              className="w-full h-full"
              alt="Deskripsi dan Ikon"
              src={Desk}
            />
          </button>
        </div>
      </div>

      {/* Panah Kanan di luar container */}
      <img
        src={ArrowKanan}
        alt="Panah Kanan"
        className="w-[30px] h-[30px] object-contain"
      />
    </div>
  );
};