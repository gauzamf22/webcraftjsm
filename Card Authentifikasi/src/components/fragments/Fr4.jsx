import React from "react";
import SA from "../../assets/PHSteakayam.svg";
import KA from "../../assets/PHKatsuAyam.svg";
import SK from "../../assets/PHSteakKulit.svg"
import SJ from "../../assets/PHSteakJamur.svg";

// ✅ Data menu
const menuList = [
  {
    name: "ds",
    description: "Nikmat.....",
    price: "Rp13.000",
    image: SA,
    buttonText: "Tambah Keranjang",
  },
  {
    name: "Katsu Ayam",
    description: "--",
    price: "Rp.-",
    image: KA,
    buttonText: "Tambah Keranjang",
  },
  {
    name: "Steak Kulit",
    description: "--",
    price: "Rp.-",
    image: SK,
    buttonText: "Tambah Keranjang",
  },
  {
    name: "Steak Jamur",
    description: "--",
    price: "Rp14.000",
    image: SJ,
    buttonText: "Tambah Keranjang",
  },
  {
    name: "Makanan Enak",
    description: "Harap bersabar, menu makanan enak sedang disiapkan",
    price: "",
    image: "",
  },
  {
    name: "Makanan Enak",
    description: "Harap bersabar, menu makanan enak sedang disiapkan",
    price: "",
    image: "",

  },
  {
    name: "Makanan Enak",
    description: "Harap bersabar, menu makanan enak sedang disiapkan",
    price: "",
    image: "",
    
  },
  {
    name: "Makanan Enak",
    description: "Harap bersabar, menu makanan enak sedang disiapkan",
    price: "",
    image: "",

  },

];

// ✅ Komponen kartu menu
const MenuCard = ({ menuItem }) => {
  const handleAddToCart = () => {
    console.log(`Added ${menuItem.name} to cart`);
  };

  return (
    <article
      className="
        flex flex-col justify-between items-center
        w-full h-full bg-[linear-gradient(90deg,rgba(252,250,235,1)_18%,rgba(239,221,162,1)_100%)]
        border border-[#d6bfa3] rounded-[10px] p-4 shadow-md
        hover:scale-[1.03] transition-transform duration-300
      "
    >
      <img
        className="w-full h-[180px] object-cover rounded-md"
        alt={menuItem.name}
        src={menuItem.image}
      />

      <div className="flex flex-col justify-between flex-grow w-full mt-3">
        <h2 className="font-bold text-[#653e1d] text-lg text-center">
          {menuItem.name}
        </h2>

        <p className="text-[#c3a987] text-sm text-center leading-relaxed mt-1">
          {menuItem.description}
        </p>

        <div className="flex justify-between items-center w-full mt-3">
          <span className="font-bold text-[#e7a249] text-base">
            {menuItem.price}
          </span>

          <button
            className="
              px-4 py-2 rounded-[10px]
              bg-[linear-gradient(127deg,rgba(231,162,74,1)_0%,rgba(255,200,130,1)_100%)]
              text-white text-sm font-medium
              transition-opacity hover:opacity-90 active:opacity-80
            "
            onClick={handleAddToCart}
            aria-label={`Add ${menuItem.name} to cart`}
            type="button"
          >
            {menuItem.buttonText}
          </button>
        </div>
      </div>
    </article>
  );
};

// ✅ Komponen utama
export const Fr4 = () => {
  return (
    <div className="flex items-center justify-center w-full px-6">
      <div className="w-full max-w-[1440px] min-h-[744px] bg-[#704443] rounded-[25px] border-[7px] border-dashed border-white p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {menuList.map((item, index) => (
            <MenuCard key={index} menuItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
