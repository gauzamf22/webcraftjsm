import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import bgImage from "@/assets/Background.svg";
import Palelu from "@/assets/Palelu.svg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-900 to-orange-950 text-white py-20 relative overflow-hidden">
      {/* Pattern Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "400px",
        }}
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <img src={Palelu} alt="GamadanG" className="w-16 h-16" />
              <h3 className="font-javassoul text-4xl text-white">GamadanG</h3>
            </div>
            <p className="text-orange-200 font-poppins leading-relaxed">
              Platform pemesanan makanan terpercaya untuk mahasiswa Universitas
              Gadjah Mada. Memadukan teknologi modern dengan nilai-nilai
              tradisional Indonesia.
            </p>
            <div className="flex gap-4">
              {["📱", "📧", "🌐"].map((emoji, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-12 h-12 bg-orange-800 hover:bg-orange-700 rounded-full flex items-center justify-center text-2xl transition-colors border-2 border-orange-600"
                >
                  {emoji}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-xl mb-6 text-orange-300">
              Menu Cepat
            </h4>
            <ul className="space-y-3 font-poppins">
              {["Beranda", "Fitur", "Testimoni", "Tentang Kami"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-orange-200 hover:text-white transition-colors hover:translate-x-2 inline-block"
                  >
                    › {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-bold text-xl mb-6 text-orange-300">
              Kontak
            </h4>
            <ul className="space-y-3 font-poppins text-orange-200">
              <li>JSM Komputer</li>
              <li>Universitas Gadjah Mada</li>
              <li>Yogyakarta, Indonesia</li>
              <li className="pt-2">
                <a href="mailto:info@gamadang.com" className="hover:text-white">
                  info@gamadang.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="bg-orange-800 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-orange-300 font-poppins">
          <p>© 2025 GamadanG by JSM. All Rights Reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
