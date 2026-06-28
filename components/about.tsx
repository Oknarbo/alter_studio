"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Award, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function About() {
  return (
    <section id="o-nama" className="py-24 lg:py-32 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                alt="Tina — vlasnica Studija Alter"
                fill
                className="object-cover"
                /* TODO: Zamijeniti s pravom fotografijom Tine/Augustine */
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden sm:block">
              <p className="font-serif text-4xl font-light text-accent">{siteConfig.founded}</p>
              <p className="text-sm text-stone-500 mt-1">Godina osnivanja</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">
              O nama
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 mb-6">
              Tina & Studio Alter
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Poznata kao Tina, {siteConfig.ownerFullName} posvećuje se frizerstvu
                više od petnaest godina. Put započinje 1994. u Obrtničkoj školi, a
                praksu odrađuje u renomiranom studiju &quot;Luka Lasović&quot;.
              </p>
              <p>
                Nakon iskustva u &quot;BBK&quot; salunu uz Zdravka i Gordane Kovač,
                Tina odlazi na seminare u Londonu, a zatim posjećuje edukacije
                Vidal Sassoon, Mahogany i Tony&amp;Guy. {siteConfig.founded}. godine
                otvara vrata dugo željenog salona — Studija Alter.
              </p>
              <p>
                Studio minimalističkog dizajna, daleko od stereotipa klasičnih salona.
                Mjesto gdje se osjećate ugodno, opušteno i posebno — uz kavu ili čaj
                dok vaša kosa dobiva pažnju koju zaslužuje.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Award, label: "15+ godina", sub: "iskustva" },
                { icon: Heart, label: "Individualni", sub: "pristup" },
                { icon: MapPin, label: "Centar", sub: "Zagreba" },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-stone-100"
                >
                  <Icon className="h-5 w-5 text-accent mb-2" />
                  <span className="text-sm font-medium text-stone-800">{label}</span>
                  <span className="text-xs text-stone-400">{sub}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-white border border-stone-100">
              <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-stone-800">{siteConfig.address}</p>
                <p className="text-sm text-stone-500 mt-1">{siteConfig.hours.weekdays}</p>
                <p className="text-sm text-stone-500">{siteConfig.hours.saturday}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
