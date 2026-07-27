"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1A1A1A] text-white sticky top-0 z-40 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-[#FFC107] font-black text-lg tracking-tight">FERRE ACEROS</span>
          <span className="font-black text-lg">BARUCH</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-[#FFC107] transition-colors text-sm font-medium">{t.nav.home}</Link>
          <Link href="/catalogo" className="hover:text-[#FFC107] transition-colors text-sm font-medium">{t.nav.catalog}</Link>
          <Link href="/cotizar" className="hover:text-[#FFC107] transition-colors text-sm font-medium">{t.nav.quote}</Link>
          <Link href="/contacto" className="hover:text-[#FFC107] transition-colors text-sm font-medium">{t.nav.contact}</Link>
          <button
            onClick={toggleLang}
            className="bg-[#FFC107] text-[#1A1A1A] text-xs font-bold px-3 py-1.5 rounded hover:bg-yellow-400 transition-colors"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLang}
            className="bg-[#FFC107] text-[#1A1A1A] text-xs font-bold px-2.5 py-1 rounded"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button onClick={() => setOpen(!open)} className="p-1" aria-label="Menu">
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#111111] border-t border-gray-700 px-4 pb-4">
          <Link href="/" onClick={() => setOpen(false)} className="block py-3 text-sm hover:text-[#FFC107] border-b border-gray-800">{t.nav.home}</Link>
          <Link href="/catalogo" onClick={() => setOpen(false)} className="block py-3 text-sm hover:text-[#FFC107] border-b border-gray-800">{t.nav.catalog}</Link>
          <Link href="/cotizar" onClick={() => setOpen(false)} className="block py-3 text-sm hover:text-[#FFC107] border-b border-gray-800">{t.nav.quote}</Link>
          <Link href="/contacto" onClick={() => setOpen(false)} className="block py-3 text-sm hover:text-[#FFC107]">{t.nav.contact}</Link>
        </div>
      )}
    </nav>
  );
}
