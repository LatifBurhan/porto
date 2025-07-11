import Navbar from "../components/Navbar";
import PortofolioSection from "../components/PortofolioSection";

import WboyStudio from "../assets/WboyStudio.png";
import Wboybg from "../assets/background.svg";
import bgblur from "../assets/bgblur.png";
import ip14 from "../assets/ip14.svg";
import ip15 from "../assets/ip15.png";
import paint from "../assets/paint.png";

// import skill logo icon
import bootstrap from "../assets/bootstrap.png";
import canva from "../assets/canva.svg";
import corel from "../assets/corel.svg";
import css from "../assets/css.svg";
import email from "../assets/email.svg";
import figma from "../assets/figma.svg";
import github from "../assets/githubb.svg";
import ig from "../assets/ig.svg";
import mysql from "../assets/mysql.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import vscode from "../assets/vscode.svg";
import wa from "../assets/wa.svg";
import wordpress from "../assets/wordpress.svg";

import emailIcon from "../assets/email.svg";
import waIcon from "../assets/wa.svg";

function Home() {
  return (
    <div className="">
      <Navbar />

      <section id="beranda" className="relative w-full h-screen bg-cover bg-center font-rubik bg-white dark:bg-black transition-colors duration-300" style={{ backgroundImage: `url(${Wboybg})` }}>
        <div className="bg-white bg-opacity-60 dark:bg-black dark:bg-opacity-60 absolute inset-0 flex flex-col justify-center items-center text-center px-4 transition-colors duration-300">
          <h1 className="md:text-[17vh] text-6xl font-bold mt-20 text-black dark:text-white transition-colors duration-300">
            <span className="text-blue">Wboy</span> <span className="text-pink">Studio</span>
          </h1>
          <p className="text-[3.6vh] text-blue dark:text-white mb-6 transition-colors duration-300">Jasa Pembuatan Website dan Desain Grafis</p>
          <a href="#kontak" className="bg-pink hover:bg-blue dark:bg-blue dark:hover:bg-pink text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition transform hover:scale-105 mb-2">
            Kontak Saya
          </a>
          <img src={ip14} alt="" className="w-[80vh] h-auto" />
        </div>
      </section>

      {/*================== TENTANG SAYA =============*/}
      <section id="tentang" className="bg-gray-100 dark:bg-black w-full bg-cover bg-center py-16 font-rubik transition-colors duration-300" style={{ backgroundImage: window.innerWidth >= 768 ? `url(${bgblur})` : "none" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Kolom Kiri */}
            <div className="text-blue dark:text-white transition-colors duration-300">
              <h2 className="text-4xl font-bold mb-6">TENTANG SAYA</h2>
              <img src={ip15} alt="Foto Profil" className="w-2/3 h-auto" />
            </div>

            {/* Kolom Kanan */}
            <div className="text-blue dark:text-white w-10/12 transition-colors duration-300">
              <h3 className="text-3xl font-semibold mb-2">LATIF BURHANUDIN</h3>
              <p className="text-2xl mb-4">Teknik Informatika</p>
              <p className="mb-6 text-lg">Saya adalah seorang UI/UX Design, Frontend Developer, Desain Grafis, dan Wordpress Developer. Menyukai perpaduan antara fungsi dan estetika dengan latar belakang di dunia desain dan pemrograman.</p>
              <a href="#kontak" className="bg-pink hover:bg-blue dark:bg-blue dark:hover:bg-pink text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition transform hover:scale-105">
                Kontak Saya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SECTION SKILL =============*/}

      <section id="skill" className="w-full py-16 font-rubik bg-gray-100 dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Kolom Kiri */}
            <div className="text-blue dark:text-white transition-colors duration-300">
              <h2 className="text-4xl font-bold mb-6">SKILL</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
                {/* Logo Skill */}
                {[bootstrap, canva, corel, css, figma, github, mysql, react, tailwind, vscode, wordpress].map((logo, index) => (
                  <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition cursor-pointer">
                    <img src={logo} alt="Skill Logo" className="w-12 h-12 object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="text-blue dark:text-white transition-colors duration-300">
              <div className="flex justify-center items-center mb-6">
                <img className="w-56" src={paint} alt="Paint" />
              </div>

              <div className="font-rubik flex flex-wrap gap-4">
                {["Bootstrap", "Canva", "Corel", "CSS", "Figma", "GitHub", "MySQL", "React", "Tailwind", "VSCode", "WordPress"].map((skill, index) => (
                  <span key={index} className="border bg-pink dark:bg-blue text-white py-2 px-4 rounded-full transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortofolioSection />

      <section id="kontak" className="w-full py-16 font-rubik bg-gray-100 dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Kolom Kiri */}
            <div className="text-blue dark:text-white transition-colors duration-300">
              <h2 className="text-4xl font-bold mb-4">KONTAK SAYA</h2>
              <h3 className="text-2xl font-semibold mb-6">Ciptakan Desain Anda Bersama Saya</h3>

              {/* Info Kontak */}
              <div className="flex items-center mb-4">
                <img src={emailIcon} alt="Email" className="w-8 h-8 mr-4" />
                <span className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">latifburhanuddin02@gmail.com</span>
              </div>
              <div className="flex items-center">
                <img src={waIcon} alt="WhatsApp" className="w-8 h-8 mr-4" />
                <span className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">+62 857 8685 8184</span>
              </div>
            </div>

            {/* Kolom Kanan - Formulir */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors duration-300">
              <form className="space-y-6">
                <div>
                  <label className="block text-blue dark:text-white font-semibold mb-2 transition-colors duration-300" htmlFor="name">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Masukkan nama Anda"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-blue dark:text-white font-semibold mb-2 transition-colors duration-300" htmlFor="message">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tulis pesan Anda"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-xl py-3 px-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                    required
                  ></textarea>
                </div>

                {/* Tombol Center */}
                <div className="flex justify-center mt-8">
                  <a href="#kontak" className="bg-pink hover:bg-blue text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition transform hover:scale-105 w-full text-center">
                    Kirim
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue dark:bg-gray-900 text-white font-rubik pt-12 pb-6 transition-colors duration-300">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Kolom Kiri */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={paint} alt="Logo" className="w-80 mb-4 drop-shadow-[0_0_100px_white] dark:drop-shadow-[0_0_100px_pink]" />
            <h3 className="text-3xl font-bold mb-2">LATIF BURHANUDIN</h3>
            <p className="text-sm max-w-xs">Terima kasih telah mengunjungi portofolio saya.</p>
          </div>

          {/* Kolom Tengah - Navbar Vertikal */}
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-semibold mb-4">Navigasi</h4>
            <div className="flex flex-col space-y-3">
              <a href="#beranda" className="hover:text-pink-500 dark:hover:text-pink-400 transition">
                Beranda
              </a>
              <a href="#tentang" className="hover:text-pink-500 dark:hover:text-pink-400 transition">
                Tentang Saya
              </a>
              <a href="#skill" className="hover:text-pink-500 dark:hover:text-pink-400 transition">
                Skill
              </a>
              <a href="#portofolio" className="hover:text-pink-500 dark:hover:text-pink-400 transition">
                Portofolio
              </a>
              <a href="#kontak" className="hover:text-pink-500 dark:hover:text-pink-400 transition">
                Kontak
              </a>
            </div>
          </div>

          {/* Kolom Kanan - Sosial Media */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Ikuti Saya</h4>
            <div className="flex space-x-6 mb-4">
              {/* Email */}
              <a href="mailto:latifburhanuddin02@email.com" target="_blank" rel="noopener noreferrer">
                <div className="bg-pink p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition transform hover:scale-110">
                  <img src={email} alt="Email" className="w-6 h-6 filter invert dark:invert-0 transition" />
                </div>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/latifbrhn_" target="_blank" rel="noopener noreferrer">
                <div className="bg-pink p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition transform hover:scale-110">
                  <img src={ig} alt="Instagram" className="w-6 h-6 filter invert dark:invert-0 transition" />
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/+6285786858184" target="_blank" rel="noopener noreferrer">
                <div className="bg-pink p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition transform hover:scale-110">
                  <img src={wa} alt="WhatsApp" className="w-6 h-6 filter invert dark:invert-0 transition" />
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/LatifBurhan" target="_blank" rel="noopener noreferrer">
                <div className="bg-pink p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition transform hover:scale-110">
                  <img src={github} alt="GitHub" className="w-6 h-6 filter invert dark:invert-0 transition" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-white">&copy; {new Date().getFullYear()} LATIF BURHANUDIN. All Rights Reserved.</div>
      </footer>
    </div>
  );
}

export default Home;
