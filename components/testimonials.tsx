"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <section id="iskustva" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Iskustva
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 mb-4">
            Što kažu naši klijenti
          </h2>
          <p className="max-w-2xl mx-auto text-stone-500 leading-relaxed">
            Povjerenje koje gradimo s godinama — u riječima onih koji nas biraju
            iznova i iznova.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-stone-100 bg-stone-50 p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-accent/20 mb-4" />
              <p className="text-stone-600 leading-relaxed text-sm mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="text-xs">{t.initials}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-stone-800">{t.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
