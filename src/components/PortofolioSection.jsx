import { useState } from "react";
import portofolioData from "../data/PortofolioData";

export default function PortofolioSection() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="portofolio" className="w-full py-16 font-rubik bg-gray-100 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue dark:text-white mb-4 transition-colors duration-300">PORTOFOLIO</h2>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Beberapa proyek dan desain yang sudah saya kerjakan</p>
        </div>

        {/* Grid Portofolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portofolioData.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition cursor-pointer" onClick={() => setSelectedItem(item)}>
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue dark:text-white mb-2 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Klik untuk lihat detail</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedItem(null)} // Klik background menutup modal
        >
          <div
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl max-w-lg w-full text-center relative transition-colors duration-300"
            onClick={(e) => e.stopPropagation()} // Supaya klik di dalam modal tidak ikut menutup
          >
            <button onClick={() => setSelectedItem(null)} className="absolute top-2 right-4 text-gray-500 dark:text-gray-300 text-2xl font-bold hover:text-red-500 transition">
              &times;
            </button>
            <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-64 object-cover rounded-xl mb-4" />
            <h3
              className="text-2xl cursor-pointer font-bold text-blue dark:text-white mb-2 transition-colors duration-300"
              onClick={() => {
                window.location.href = selectedItem.link;
              }}
            >
              {selectedItem.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">{selectedItem.description}</p>
            <button onClick={() => setSelectedItem(null)} className="bg-pink-500 text-black py-2 px-6 rounded-full hover:bg-blue-500 transition">
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
