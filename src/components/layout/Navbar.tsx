"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/content";
import { cn, asset } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { lang, setLang } = useLang();
  const pathname = usePathname();

  const navItems = navigation[lang];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape closes the mobile menu and returns focus to its toggle button
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Close the mobile menu when navigating to another page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm"
          : "bg-transparent mix-blend-multiply"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={asset("/images/logos/logo-original.png")}
              alt="Foresight"
              width={240}
              height={96}
              className="h-12 sm:h-14 w-auto mix-blend-multiply"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors font-medium relative py-1",
                  isActive(item.href)
                    ? "text-cyan"
                    : "text-navy hover:text-cyan"
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-slate-100 rounded-full p-1">
              <button
                onClick={() => setLang("es")}
                aria-pressed={lang === "es"}
                aria-label="Español"
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                  lang === "es"
                    ? "bg-white text-navy shadow-sm"
                    : "text-slate-500 hover:text-navy"
                )}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                aria-label="English"
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                  lang === "en"
                    ? "bg-white text-navy shadow-sm"
                    : "text-slate-500 hover:text-navy"
                )}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={isMobileMenuOpen ? (lang === "es" ? "Cerrar menú" : "Close menu") : (lang === "es" ? "Abrir menú" : "Open menu")}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-navy" />
              ) : (
                <Menu className="w-6 h-6 text-navy" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 md:hidden bg-white border-t border-slate-200 shadow-xl z-50"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg font-medium transition-colors",
                      isActive(item.href)
                        ? "text-cyan bg-cyan/5"
                        : "text-navy hover:bg-slate-100"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
