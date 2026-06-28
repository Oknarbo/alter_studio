"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { galleryItems } from "@/lib/data";

export function Gallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="galerija" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Galerija
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 mb-4">
            Naši radovi
          </h2>
          <p className="max-w-2xl mx-auto text-stone-500 leading-relaxed">
            Svaka frizura priča svoju priču. Pogledajte transformacije koje
            stvaramo s pažnjom i ljubavlju prema struci.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-auto">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={item.span === "tall" ? 1000 : item.span === "wide" ? 500 : 600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  /* TODO: Zamijeniti s pravim fotografijama iz cms/uploads/ na studioalter.com */
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                    hoveredId === item.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <p className="text-white font-medium text-sm tracking-wide">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
