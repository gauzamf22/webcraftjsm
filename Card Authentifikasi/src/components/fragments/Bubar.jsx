import React from "react";
import Desk from "../../assets/Desk.svg";
import ArrowKanan from "../../assets/Frame 14.svg";

export const Bubar = () => {
  const handleClickDeskripsi = () => {
    alert("Deskripsi diklik!");
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-transparent px-2 sm:px-4 md:px-6 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 py-4 sm:py-6 w-full">
        {/* ✅ Container Utama */}
        <div
          className="
            flex items-center justify-between 
            w-full max-w-[700px] 
            px-4 sm:px-6 py-4 sm:py-6 
            bg-[#704443] rounded-[25px] sm:rounded-[30px] 
            border-2 border-dashed border-white 
            hover:scale-[1.03] transition-transform duration-300
          "
        >
          {/* ✅ Total Belanja */}
          <div className="flex flex-col items-start">
            <span className="text-white text-base sm:text-lg md:text-xl font-bold">
              Total Belanja:
            </span>
            <span className="text-white text-2xl sm:text-3xl font-black">
              Rp1.000.000
            </span>
          </div>

          {/* ✅ Tombol Deskripsi */}
          <button
            onClick={handleClickDeskripsi}
            className="
              w-[120px] sm:w-[150px] h-[36px] sm:h-[40px] 
              flex items-center justify-center
            "
          >
            <img
              className="w-full h-full object-contain"
              alt="Deskripsi dan Ikon"
              src={Desk}
            />
          </button>
        </div>

        {/* ✅ Panah Kanan */}
        <div
          className="
            w-[80px] sm:w-[100px] md:w-[120px]
            flex items-center justify-center
            cursor-pointer transition-transform duration-150
            hover:scale-95 active:scale-90
          "
        >
          <img
            src={ArrowKanan}
            alt="Panah Kanan"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Bubar;
