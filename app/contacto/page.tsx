"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactoPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-[#1A1A1A] mb-2">{t.contact.title}</h1>
      <div className="w-16 h-1 bg-[#FFC107] mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{t.contact.address}</h2>
            <p className="text-lg font-semibold text-[#1A1A1A]">{t.contact.addressValue}</p>
            <a
              href="https://maps.google.com/?q=Cra+8+71-29+Alfonso+Lopez+Cali+Colombia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-[#FFC107] font-semibold hover:underline"
            >
              {t.contact.map} &rarr;
            </a>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{t.contact.hours}</h2>
            <p className="text-lg font-semibold text-[#1A1A1A]">{t.contact.hoursValue}</p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{t.contact.phones}</h2>
            <div className="space-y-1">
              <a href="tel:+573116201961" className="block text-lg font-semibold text-[#1A1A1A] hover:text-[#FFC107] transition-colors">311 620 1961</a>
              <a href="tel:+573173834632" className="block text-lg font-semibold text-[#1A1A1A] hover:text-[#FFC107] transition-colors">317 383 4632</a>
              <a href="tel:+573180211091" className="block text-lg font-semibold text-[#1A1A1A] hover:text-[#FFC107] transition-colors">318 021 1091</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/573116201961"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 text-white font-bold px-5 py-3 rounded-lg hover:bg-green-600 transition-colors text-center"
            >
              {t.contact.whatsapp}
            </a>
            <a
              href="https://www.instagram.com/ferreacerosbaruch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#1A1A1A] text-white font-bold px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center"
            >
              {t.contact.instagram}
            </a>
          </div>

          {/* Brilla */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center gap-4">
            <div className="bg-red-600 text-white font-black text-lg px-4 py-2 rounded-lg shrink-0">Brilla</div>
            <div>
              <div className="font-bold text-[#1A1A1A] text-sm">{t.brilla.title}</div>
              <div className="text-gray-500 text-xs mt-0.5">{t.brilla.description}</div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm h-96 lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5!2d-76.532!3d3.415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCra.+8+%2371-29%2C+Alfonso+L%C3%B3pez%2C+Cali!5e0!3m2!1ses!2sco!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "350px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ferre Aceros Baruch Location"
          />
        </div>
      </div>
    </div>
  );
}
