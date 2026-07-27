"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#FFC107] min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 py-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#1A1A1A] text-[#FFC107] text-xs font-bold px-3 py-1 rounded mb-6 tracking-widest uppercase">
              Cra. 8 # 71-29 &mdash; Alfonso López, Cali
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#1A1A1A] leading-tight mb-4">
              {t.hero.tagline}
            </h1>
            <p className="text-[#1A1A1A]/70 text-lg mb-8 max-w-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/573116201961"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center"
              >
                {t.hero.cta}
              </a>
              <Link
                href="/cotizar"
                className="border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold px-6 py-3 rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-colors text-center"
              >
                {t.hero.quoteCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#1A1A1A] text-white py-5">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-[#FFC107] font-bold">&#9733; {t.trust.rating}</div>
            <div className="text-gray-400 text-xs mt-0.5">{t.trust.reviews}</div>
          </div>
          <div>
            <div className="text-[#FFC107] font-bold">{t.trust.location}</div>
            <div className="text-gray-400 text-xs mt-0.5">Alfonso López</div>
          </div>
          <div>
            <a href="tel:+573116201961" className="text-[#FFC107] font-bold block hover:underline">311 620 1961</a>
            <a href="tel:+573173834632" className="text-gray-400 text-xs mt-0.5 block hover:text-[#FFC107]">317 383 4632</a>
          </div>
          <div>
            <div className="text-[#FFC107] font-bold">{t.trust.hours}</div>
            <div className="text-gray-400 text-xs mt-0.5">Lun–Sáb / Mon–Sat</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black text-[#1A1A1A] mb-2">{t.categories.title}</h2>
        <div className="w-16 h-1 bg-[#FFC107] mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/catalogo#aceros" className="border-2 border-[#FFC107] bg-yellow-50 rounded-xl p-6 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg mb-4 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-[#FFC107] rounded" />
            </div>
            <h3 className="font-black text-xl text-[#1A1A1A] mb-2 group-hover:text-yellow-700">{t.categories.steel.name}</h3>
            <p className="text-gray-600 text-sm">{t.categories.steel.description}</p>
          </Link>
          <Link href="/catalogo#ferreteria" className="border-2 border-gray-200 bg-gray-50 rounded-xl p-6 hover:border-[#FFC107] hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg mb-4 flex items-center justify-center">
              <div className="w-3 h-6 border-2 border-[#FFC107]" />
            </div>
            <h3 className="font-black text-xl text-[#1A1A1A] mb-2 group-hover:text-yellow-700">{t.categories.hardware.name}</h3>
            <p className="text-gray-600 text-sm">{t.categories.hardware.description}</p>
          </Link>
          <Link href="/catalogo#insumos" className="border-2 border-[#FFC107] bg-yellow-50 rounded-xl p-6 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg mb-4 flex items-center justify-center">
              <div className="w-6 h-4 border-2 border-[#FFC107]" />
            </div>
            <h3 className="font-black text-xl text-[#1A1A1A] mb-2 group-hover:text-yellow-700">{t.categories.supplies.name}</h3>
            <p className="text-gray-600 text-sm">{t.categories.supplies.description}</p>
          </Link>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/catalogo"
            className="inline-block bg-[#FFC107] text-[#1A1A1A] font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            {t.categories.viewAll}
          </Link>
        </div>
      </section>

      {/* Brilla */}
      <section className="bg-gray-50 border-y border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-red-600 text-white font-black text-2xl px-6 py-4 rounded-xl shrink-0 shadow-md">
            Brilla
          </div>
          <div>
            <h3 className="font-bold text-xl text-[#1A1A1A] mb-1">{t.brilla.title}</h3>
            <p className="text-gray-600">{t.brilla.description}</p>
          </div>
          <a
            href="https://wa.me/573116201961?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20financiaci%C3%B3n%20con%20Brilla"
            target="_blank"
            rel="noopener noreferrer"
            className="md:ml-auto bg-[#1A1A1A] text-white font-bold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shrink-0 whitespace-nowrap"
          >
            {t.common.whatsapp}
          </a>
        </div>
      </section>
    </>
  );
}
