import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ untuk navigasi halaman

// 🔹 Import semua gambar kantin
import fotoKantin from "../../assets/Foto Kantin.svg";

// 🔹 Data semua kantin
const kantinData = [
  {
    id: 1,
    image: fotoKantin,
    title: "Kantin BioGeo",
    description:
      "Kantin favorit mahasiswa FMIPA dengan suasana sejuk dan harga terjangkau. Banyak pilihan makanan berat dan ringan.",
  },
  {
    id: 2,
    image: fotoKantin,
    title: "Kansas",
    description:
      "Kantin Sastra yang terkenal dengan makanan kekiniannya dan spot nongkrong yang cozy banget buat anak FIB dan Filsafat.",
  },
  {
    id: 3,
    image: fotoKantin,
    title: "Pujale",
    description:
      "Pusat jajanan lengkap di area Teknik. Pujale dikenal dengan aneka nasi goreng, ayam geprek, dan minuman segar.",
  },
  {
    id: 4,
    image: fotoKantin,
    title: "Bonbin",
    description:
      "Kantin di area Biologi yang dikelilingi pepohonan rindang, cocok buat makan sambil istirahat di siang hari.",
  },
];

// 🔹 Komponen utama Frame
export const Frame = () => {
  const navigate = useNavigate();

  // 🔸 Fungsi klik tombol berdasarkan ID
  const handleClick = (id) => {
    switch (id) {
      case 1:
        navigate("/Warung1");
        break;
      default:
        alert("Halaman kantin belum tersedia 😅");
    }
  };

  return (
    <div
      className="
        flex flex-wrap items-center justify-center
        w-full max-w-[1445px] min-h-[744px] gap-7 p-10
        bg-[#704443] rounded-[25px] border-[5px] border-dashed border-white
      "
    >
      {kantinData.map((kantin) => (
        <article
          key={kantin.id}
          className="
            flex flex-col md:flex-row items-center gap-6
            p-6 w-[90%] md:w-[600px] min-h-[320px]
            rounded-[10px] border border-solid border-[#d6bfa3]
            bg-[linear-gradient(90deg,rgba(252,250,235,1)_18%,rgba(239,221,162,1)_100%)]
            shadow-lg hover:scale-[1.03] transition-transform duration-300
          "
        >
          {/* Gambar kantin */}
          <div
            className="
              w-[228px] h-[278px] bg-white flex items-center justify-center
              rounded-md flex-shrink-0 overflow-hidden
            "
          >
            <img
              className="max-w-full max-h-full object-contain"
              alt={`Foto ${kantin.title}`}
              src={kantin.image}
            />
          </div>

          {/* Teks dan tombol */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 flex-1">
            <h2 className="font-bold text-[#653e1d] text-2xl md:text-[40px] leading-tight">
              {kantin.title}
            </h2>
            <p className="text-[#c3a987] text-sm md:text-base leading-relaxed line-clamp-3">
              {kantin.description}
            </p>

            <button
              onClick={() => handleClick(kantin.id)} // ✅ navigasi sesuai ID
              className="
                mt-3 w-[180px] h-10 rounded-[20px]
                bg-[linear-gradient(90deg,rgba(240,138,7,1)_15%,rgba(241,115,47,1)_100%)]
                flex items-center justify-center
                text-white font-bold text-base
                hover:opacity-70 transition
              "
              aria-label={`Kunjungi ${kantin.title}`}
            >
              Kunjungi Kantin &gt;
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};
