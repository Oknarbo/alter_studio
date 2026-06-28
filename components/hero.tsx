"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useChat } from "@/components/chat-context";

export function Hero() {
  const { openChat } = useChat();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1633681926022-84c23e8cb124?w=1920&q=85')",
          }}
        />
        {/* TODO: Zamijeniti hero fotografiju pravom slikom iz Studija Alter */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-accent-light" />
          <span className="text-sm text-white/90 tracking-wide">
            {siteConfig.owner} • {siteConfig.experience} • Prepoznata kao jedna od najboljih frizerki u Zagrebu
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto"
        >
          {siteConfig.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed sm:text-xl"
        >
          Iskustvo koje mijenja kako se osjećate. Individualni pristup, vrhunska preciznost
          i atmosfera u kojoj svaki detalj ima značaj.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button onClick={openChat} size="lg" className="min-w-[180px]">
            Zakaži termin
          </Button>
          <Button
            onClick={openChat}
            variant="outline"
            size="lg"
            className="min-w-[180px] border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white"
          >
            Pošalji poruku
          </Button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.querySelector("#usluge")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll dolje"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
