import React from "react";

export const Box = () => {
  const canteenData = {
    name: "Nama Kantin",
    faculty: "Fakultas Anu Anuan",
    hours: "07:00-15:00",
  };

  return (
    <div className="relative w-[668px] h-[217px]">
      <div className="fixed top-[calc(50.00%+_64px)] left-[calc(50.00%+_47px)] w-[674px] h-[217px]">
        <div
          className="absolute top-[calc(50.00%-_108px)] left-[calc(50.00%-_316px)] w-[647px] h-[217px] bg-[#704443] rounded-[44px] border-2 border-dashed border-white"
          role="article"
          aria-label="Canteen information card"
        />

        <h1 className="absolute top-[calc(50.00%-_62px)] left-[calc(50.00%-_240px)] w-[379px] h-[35px] flex items-center justify-center [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
          {canteenData.name}
        </h1>

        <p className="absolute top-[calc(50.00%-_16px)] left-[calc(50.00%-_240px)] w-[495px] h-9 flex items-center justify-center [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
          {canteenData.faculty}
        </p>

        <time className="absolute top-[calc(50.00%+_26px)] left-[calc(50.00%-_240px)] w-[495px] h-9 flex items-center justify-center [font-family:'Poppins-Light',Helvetica] font-light text-white text-[31.2px] tracking-[0] leading-[normal] whitespace-nowrap">
          {canteenData.hours}
        </time>

        <div
          className="absolute top-10 left-0 w-[52px] h-[137px] bg-white rounded-[32px]"
          role="presentation"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};