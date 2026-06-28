"use client";

import { Instagram, Facebook, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useChat } from "@/components/chat-context";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { openChat } = useChat();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-serif text-lg tracking-[0.15em] uppercase text-white/70">
                Studio
              </span>
              <span className="font-serif text-2xl font-light tracking-[0.3em] uppercase text-accent-light block -mt-1">
                Alter
              </span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md mb-6">
              Ekskluzivni frizerski studio u srcu Zagreba. Precizna umjetnost
              njege kose od {siteConfig.founded}. godine.
            </p>
            <Button onClick={openChat} variant="default" size="default">
              Zakaži termin
            </Button>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-[0.15em] uppercase text-white/50 mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2 text-white/70 hover:text-accent-light transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-accent-light transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-accent-light transition-colors text-sm"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                {siteConfig.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-[0.15em] uppercase text-white/50 mb-4">
              Radno vrijeme
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{siteConfig.hours.weekdays}</li>
              <li>{siteConfig.hours.saturday}</li>
              <li>{siteConfig.hours.sunday}</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {year} Studio Alter. Sva prava pridržana.</p>
          <p>Ribnjak ulica 18, Zagreb</p>
        </div>
      </div>
    </footer>
  );
}
