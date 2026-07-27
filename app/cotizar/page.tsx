"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Suspense } from "react";

function QuoteForm() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "",
    quantity: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setForm((f) => ({ ...f, category: cat }));
  }, [searchParams]);

  const categories = [
    t.catalog.steel.name,
    t.catalog.hardware.name,
    t.catalog.supplies.name,
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A1A] mb-2">{t.quote.successTitle}</h2>
        <p className="text-gray-600 mb-6">{t.quote.successMessage}</p>
        <a
          href="https://wa.me/573116201961"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          {t.quote.whatsappFollowUp}
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-[#1A1A1A] mb-2">{t.quote.title}</h1>
      <div className="w-16 h-1 bg-[#FFC107] mb-3" />
      <p className="text-gray-600 mb-8">{t.quote.subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t.quote.name} *</label>
          <input
            type="text"
            required
            placeholder={t.quote.namePlaceholder}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t.quote.phone} *</label>
          <input
            type="tel"
            required
            placeholder={t.quote.phonePlaceholder}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t.quote.category} *</label>
          <select
            required
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] text-sm bg-white"
          >
            <option value="">{t.quote.categoryPlaceholder}</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t.quote.quantity}</label>
          <input
            type="text"
            placeholder={t.quote.quantityPlaceholder}
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t.quote.message}</label>
          <textarea
            rows={4}
            placeholder={t.quote.messagePlaceholder}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] text-sm resize-none"
          />
        </div>

        {status === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {t.quote.errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#FFC107] text-[#1A1A1A] font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? t.quote.submitting : t.quote.submit}
        </button>
      </form>
    </div>
  );
}

export default function CotizarPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading...</div>}>
      <QuoteForm />
    </Suspense>
  );
}
