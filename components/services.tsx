"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Scissors,
  Palette,
  Sparkles,
  Droplets,
  Wind,
  Crown,
  User,
  MessageCircle,
  Clock,
} from "lucide-react";
import { services } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  scissors: Scissors,
  palette: Palette,
  sparkles: Sparkles,
  droplets: Droplets,
  wind: Wind,
  crown: Crown,
  user: User,
  "message-circle": MessageCircle,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="usluge" className="py-24 lg:py-32 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Usluge
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 mb-4">
            Svaka frizura, umjetničko djelo
          </h2>
          <p className="max-w-2xl mx-auto text-stone-500 leading-relaxed">
            Od svakodnevnog stylinga do potpunih transformacija — svaka usluga
            prilagođena je vama i vašoj kosi.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Scissors;
            return (
              <motion.div key={service.id} variants={item}>
                <Card className="group h-full hover:shadow-lg hover:border-accent/30 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1.5 text-stone-400">
                        <Clock className="h-3.5 w-3.5" />
                        {service.duration}
                      </span>
                      <span className="font-medium text-accent">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
