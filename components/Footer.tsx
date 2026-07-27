"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#1A1A1A] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-[#FFC107] font-black text-lg">FERRE ACEROS BARUCH</div>
            <p className="text-gray-400 text-sm mt-2">{t.footer.tagline}</p>
            <p className="text-gray-500 text-xs mt-1">Cali, Colombia</p>
          </div>
          <div>
            <div className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-300">Contacto</div>
            <div className="text-gray-400 text-sm space-y-1">
              <div>Cra. 8 # 71-29, Alfonso López</div>
              <div>Santiago de Cali, Colombia</div>
              <a href="tel:+573116201961" className="block hover:text-[#FFC107]">311 620 1961</a>
              <a href="tel:+573173834632" className="block hover:text-[#FFC107]">317 383 4632</a>
              <a href="tel:+573180211091" className="block hover:text-[#FFC107]">318 021 1091</a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-300">Links</div>
            <div className="space-y-2 text-sm">
              <Link href="/catalogo" className="block text-gray-400 hover:text-[#FFC107]">{t.nav.catalog}</Link>
              <Link href="/cotizar" className="block text-gray-400 hover:text-[#FFC107]">{t.nav.quote}</Link>
              <Link href="/contacto" className="block text-gray-400 hover:text-[#FFC107]">{t.nav.contact}</Link>
              <a href="https://www.instagram.com/ferreacerosbaruch" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-[#FFC107]">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Ferre Aceros Baruch S.A.S. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
