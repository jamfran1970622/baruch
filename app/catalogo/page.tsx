"use client";
import { useLanguage } from "@/context/LanguageContext";
import ProductCard from "@/components/ProductCard";

export default function CatalogoPage() {
  const { t } = useLanguage();

  const sections = [
    { id: "aceros", data: t.catalog.steel, borderColor: "border-[#FFC107]" },
    { id: "ferreteria", data: t.catalog.hardware, borderColor: "border-gray-300" },
    { id: "insumos", data: t.catalog.supplies, borderColor: "border-[#FFC107]" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-[#1A1A1A] mb-2">{t.catalog.title}</h1>
      <div className="w-16 h-1 bg-[#FFC107] mb-3" />
      <p className="text-gray-600 mb-12">{t.catalog.subtitle}</p>

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-14 scroll-mt-20">
          <div className={`border-l-4 ${section.borderColor} pl-4 mb-6`}>
            <h2 className="text-2xl font-black text-[#1A1A1A]">{section.data.name}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.data.items.map((item) => (
              <ProductCard
                key={item.name}
                name={item.name}
                description={item.description}
                category={section.data.name}
              />
            ))}
          </div>
        </section>
      ))}

      <div className="bg-[#FFC107] rounded-xl p-8 text-center mt-8">
        <h3 className="text-2xl font-black text-[#1A1A1A] mb-2">
          {t.lang === "es" ? "¿No encontraste lo que buscas?" : "Didn't find what you need?"}
        </h3>
        <p className="text-[#1A1A1A]/70 mb-4">
          {t.lang === "es"
            ? "Escríbenos por WhatsApp y te ayudamos."
            : "Message us on WhatsApp and we will help you."}
        </p>
        <a
          href="https://wa.me/573116201961"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1A1A1A] text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          {t.common.whatsapp}
        </a>
      </div>
    </div>
  );
}
