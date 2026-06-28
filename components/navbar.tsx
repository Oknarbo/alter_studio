"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChat } from "@/components/chat-context";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#usluge", label: "Usluge" },
  { href: "#galerija", label: "Galerija" },
  { href: "#o-nama", label: "O nama" },
  { href: "#iskustva", label: "Iskustva" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openChat } = useChat();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex flex-col"
          >
            <span
              className={cn(
                "font-serif text-xl tracking-[0.15em] uppercase transition-colors",
                scrolled ? "text-stone-900" : "text-white"
              )}
            >
              Studio
            </span>
            <span
              className={cn(
                "font-serif text-2xl font-light tracking-[0.3em] uppercase -mt-1 transition-colors",
                scrolled ? "text-accent" : "text-white/90"
              )}
            >
              Alter
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors hover:text-accent cursor-pointer",
                    scrolled ? "text-stone-600" : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button
              onClick={openChat}
              variant={scrolled ? "default" : "secondary"}
              size="default"
            >
              Zakaži termin
            </Button>
          </div>

          <button
            className={cn(
              "md:hidden p-2 rounded-full transition-colors cursor-pointer",
              scrolled ? "text-stone-900" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Meni"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-lg font-medium text-stone-800 hover:text-accent transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <Button onClick={() => { setMobileOpen(false); openChat(); }} size="lg" className="mt-4">
                Zakaži termin
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
